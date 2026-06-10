const { PROFILE_CONTEXT, SYSTEM_INSTRUCTION } = require('./profile-context');

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'object') return req.body;

  try {
    return JSON.parse(req.body);
  } catch (error) {
    return {};
  }
}

function formatHistoryForGemini(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-8)
    .filter((entry) => entry && typeof entry.content === 'string')
    .map((entry) => ({
      role: entry.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: entry.content.slice(0, 1200) }]
    }));
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(503).json({ error: 'Gemini API key is not configured' });
  }

  const body = parseBody(req);
  const message = body.message ? String(body.message).trim().slice(0, 3000) : '';

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const history = formatHistoryForGemini(body.history || []);
  const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const systemInstruction = `${SYSTEM_INSTRUCTION}\n\nPortfolio context:\n${PROFILE_CONTEXT}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  const contents = [
    ...history,
    { role: 'user', parts: [{ text: message }] }
  ];

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  try {
    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.45
        }
      })
    });

    const data = await geminiResponse.json().catch(() => ({}));

    if (!geminiResponse.ok) {
      return res.status(geminiResponse.status).json({
        error: data.error?.message || 'Gemini request failed'
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      reply: reply || 'I could not generate a response. You can contact Sameer at nagarsam8989@gmail.com.'
    });
  } catch (error) {
    const message = error.name === 'AbortError'
      ? 'AI request timed out'
      : 'AI request failed';

    return res.status(502).json({ error: message });
  } finally {
    clearTimeout(timeout);
  }
};
