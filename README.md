# Sameer Nagar Portfolio

Personal portfolio for 2026 hiring, positioning Sameer Nagar as a Software Development Engineer with AI/LLM, backend, Salesforce, cloud, and enterprise automation experience.

## Highlights

- Strong recruiter-facing hero section for SDE, AI/LLM, backend, Salesforce, AWS, and enterprise software roles.
- Resume-aware AI assistant with sample recruiter prompts, formatted answers, typing state, local fallback answers, new chat, and saved chat history.
- Featured case studies for anomaly detection, Titan Smart Scheduler, the portfolio AI assistant, and Salesforce/Agentforce enterprise automation.
- Google Scholar and publications section for IEEE and Springer sentiment analysis research.
- Tech-to-Business Bridge section connecting engineering decisions to stakeholder needs, automation, reliability, and measurable business value.
- Responsive dark/light UI, accessible labels, loading/error states, and SEO/Open Graph metadata.
- Server-side AI proxy pattern so Gemini API keys are never exposed in frontend JavaScript.

## Project Structure

<<<<<<< HEAD
```text
.
|-- index.html                  # Static portfolio page
|-- assets/
|   |-- css/style.css           # Responsive visual system and theme tokens
|   |-- js/script.js            # Navigation, theme toggle, filters, forms, assistant UX
|   `-- images/                 # Portfolio imagery and icons
|-- api/
|   |-- chat.js                 # Vercel serverless Gemini API proxy
|   `-- profile-context.js      # Server-side resume context for the AI assistant
|-- main.py                     # Optional FastAPI backend for local/API hosting
|-- profile_context.py          # Python resume context for FastAPI
|-- requirements.txt            # Python backend dependencies
|-- .env.example                # Safe environment variable template
`-- Profile (3).pdf             # Current resume source file
=======
- `index.html` - Main portfolio page.
- `assets/css/style.css` - Responsive visual system.
- `assets/js/script.js` - Navigation, filters, contact form, and chat widget.
- `api/chat.js` - Serverless Google Gemini API proxy for the AI assistant.
- `Sameer_Nagar_Resume.pdf` - Resume download linked from the portfolio.

## AI Assistant

The chat widget works in two modes:

1. Local profile mode: always available in the browser with resume-aware fallback answers.
2. Live AI mode: available when deployed with a serverless `/api/chat` endpoint and `GEMINI_API_KEY`.

Create an environment variable in your hosting provider:

```bash
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-3.5-flash
>>>>>>> 2086db037149a89fa54c2c365b4cb951bf098709
```

## Local Static Preview

Open `index.html` directly in a browser for the static portfolio.

The AI assistant still works in local fallback mode without any API key. Live AI responses require either the FastAPI backend or a serverless deployment.

## Local FastAPI Backend

1. Create and activate a virtual environment.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Copy `.env.example` to `.env` and set:

```bash
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-3.5-flash
CORS_ORIGINS=http://localhost:5500,http://127.0.0.1:5500
```

4. Run the backend:

```bash
uvicorn main:app --reload --port 8000
```

5. Serve the static site from another port, for example:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Vercel Deployment

The `api/chat.js` endpoint is designed for Vercel serverless functions.

Set these environment variables in Vercel:

```bash
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-3.5-flash
```

Do not put API keys in `index.html`, `assets/js/script.js`, or any frontend file.

## Project Links

- Anomaly Detection Workbench: https://github.com/sameernagar-hub/anomaly-detection-workbench
- Titan Smart Scheduler: https://github.com/sameernagar-hub/titan-smart-scheduler
- Google Scholar: https://scholar.google.com/citations?user=FfTfe3gAAAAJ&hl=en

## Publications

- Logistic Regression Based Approach for Human Sentiment Analysis Across Domains, IEEE Xplore Digital Library, Nov 12, 2024: https://ieeexplore.ieee.org/document/10743868
- Cross Domain and Decision Tree Based Approach for Human Sentiment Analysis, Springer "Learning and Analytics in Intelligent Systems", Jul 13, 2024: https://link.springer.com/book/10.1007/978-981-97-9855-1

## GitHub Pages Deployment

GitHub Pages can host the static portfolio, but it cannot run `/api/chat.js`.

Options:

- Use GitHub Pages with local fallback AI answers only.
- Deploy the API separately on Vercel, Render, Railway, or another backend host and update the frontend API origin if needed.
- Deploy the whole project on Vercel for same-origin static files and serverless AI responses.

## Resume File

The current resume source file is `Profile (3).pdf`. Portfolio links download it as `Sameer_Nagar_Resume.pdf` for a cleaner recruiter experience.

## Contact

- Email: nagarsam8989@gmail.com
- LinkedIn: https://www.linkedin.com/in/aavonsameer/
- GitHub: https://github.com/sameernagar-hub

## License

MIT. Original template attribution is preserved in `LICENSE`; portfolio modifications are attributed to Sameer Nagar.
