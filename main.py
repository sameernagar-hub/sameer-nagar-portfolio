import os
import traceback
from typing import List

import google.generativeai as genai
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field

from profile_context import SYSTEM_INSTRUCTION

load_dotenv()

app = FastAPI(title="Sameer Nagar AI Portfolio Backend")

allowed_origins = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "*").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)

MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGODB_URL)
db = client.portfolio_db


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage] = Field(default_factory=list)

api_key = (os.getenv("GEMINI_API_KEY") or "").strip()
model = None

if api_key:
    genai.configure(api_key=api_key, transport="rest")
    model = genai.GenerativeModel(
        os.getenv("GEMINI_MODEL", "gemini-3.5-flash"),
        system_instruction=SYSTEM_INSTRUCTION,
    )


@app.get("/api/health")
async def health_check():
    return {"ok": True, "aiConfigured": bool(api_key)}


@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    if not api_key or model is None:
        raise HTTPException(status_code=503, detail="Gemini API key is not configured on server.")

    message = request.message.strip()[:3000]

    if not message:
        raise HTTPException(status_code=400, detail="Message is required.")

    try:
        chat = model.start_chat(history=[
            {
                "role": "model" if m.role == "assistant" else "user",
                "parts": [{"text": m.content[:1200]}],
            }
            for m in request.history[-8:]
            if m.content
        ])

        response = chat.send_message(message)

        try:
            reply_text = response.text
        except (ValueError, AttributeError):
            reply_text = "I cannot provide an answer to that right now. Please try asking about Sameer's experience, skills, projects, or contact details."

        return {"reply": reply_text}
    except Exception as e:
        print(f"AI Assistant Error: {str(e)}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Internal AI processing error")


@app.get("/api/projects")
async def get_projects():
    """Fetch dynamic project data from MongoDB if a MongoDB instance is configured."""
    try:
        projects = await db.projects.find().to_list(100)
        for project in projects:
            project["_id"] = str(project["_id"])
        return projects
    except Exception as e:
        return {"error": "Could not fetch projects", "details": str(e)}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
