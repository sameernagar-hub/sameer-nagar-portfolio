const PROFILE_CONTEXT = `
Sameer Nagar is a Software Development Engineer focused on backend systems, AI integration, cloud platforms, and full-stack delivery.

Contact:
- Email: nagarsam8989@gmail.com
- Phone: +1 (657) 751-9425
- Location: Fullerton, California
- LinkedIn: https://www.linkedin.com/in/aavonsameer/
- GitHub: https://github.com/sameernagar-hub

Education:
- Master of Science in Computer Science, California State University, Fullerton, 2024 - 2026, GPA 3.70/4.00.
- Bachelor of Technology in Computer Science, Rajiv Gandhi Proudyogiki Vishwavidyalaya, India, 2018 - 2022, GPA 3.66/4.00.

Experience:
- Jr. Associate Software Engineer, Unthinkable Solutions, Gurugram, India, 2021 - 2024. Built scalable backend services, full-stack applications, enterprise workflows, AI-powered solutions, LLM integrations, and automation.
- Teaching Associate, California State University, Fullerton, 2025 - 2026. Mentored students, supported computer science coursework, graded assignments, and collaborated with faculty.
- Service Associate, California State University, Fullerton, 2025 - 2026. Delivered customer service, transactions, inventory support, and team operations.

Skills:
- Python, Java, C++, JavaScript, React, Node.js, Flask, MySQL, MongoDB, AWS, Azure, Docker, CI/CD, LLMs, Prompt Engineering, Agentic AI, Salesforce Development.

Project themes:
- Scalable API services, LLM portfolio assistant, task manager application, ML pipeline automation, data pipeline services, cloud operations dashboard.
`;

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'object') return req.body;

  try {
    return JSON.parse(req.body);
  } catch (error) {
    return {};
  }
}

function cleanHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-8)
    .map((entry) => {
      const role = entry && entry.role === 'assistant' ? 'assistant' : 'user';
      const content = entry && entry.content ? String(entry.content).slice(0, 900) : '';
      return content ? `${role}: ${content}` : '';
    })
    .filter(Boolean);
}

function extractOutputText(data) {
  if (!data) return '';
  if (typeof data.output_text === 'string') return data.output_text;

  if (!Array.isArray(data.output)) return '';

  return data.output
    .flatMap((item) => Array.isArray(item.content) ? item.content : [])
    .map((content) => {
      if (typeof content.text === 'string') return content.text;
      if (typeof content.output_text === 'string') return content.output_text;
      if (typeof content.value === 'string') return content.value;
      return '';
    })
    .filter(Boolean)
    .join('\n')
    .trim();
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(503).json({ error: 'OpenAI API key is not configured' });
  }

  const body = parseBody(req);
  const message = body.message ? String(body.message).trim().slice(0, 1200) : '';

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const history = cleanHistory(body.history);
  const model = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
  const input = [
    'Portfolio context:',
    PROFILE_CONTEXT,
    history.length ? `Recent conversation:\n${history.join('\n')}` : '',
    `Visitor question: ${message}`
  ].filter(Boolean).join('\n\n');

  const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      instructions: [
        "You are Sameer Nagar's portfolio assistant.",
        'Answer only from the portfolio context.',
        'Be concise, warm, and specific.',
        'If a detail is not in the context, say that the portfolio does not list it and offer Sameer contact details.',
        'Do not invent employers, project links, certifications, dates, metrics, or personal claims.'
      ].join(' '),
      input,
      max_output_tokens: 280
    })
  });

  const data = await openaiResponse.json().catch(() => ({}));

  if (!openaiResponse.ok) {
    return res.status(openaiResponse.status).json({
      error: data.error && data.error.message ? data.error.message : 'OpenAI request failed'
    });
  }

  const reply = extractOutputText(data);

  return res.status(200).json({
    reply: reply || "I could not generate a response from the AI endpoint. You can contact Sameer at nagarsam8989@gmail.com."
  });
};
