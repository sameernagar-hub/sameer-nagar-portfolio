const PROFILE_CONTEXT = `
Sameer Nagar is a Software Development Engineer building AI-powered backend systems, enterprise automation, and intelligent cloud applications.

Positioning:
- MS Computer Science graduate from California State University, Fullerton. Graduated May 2026. GPA 3.70/4.00.
- Around 3 years of Software Development Engineer experience.
- Focus areas: backend systems, AI/LLM applications, Salesforce, Agentforce, AWS, cloud applications, enterprise automation, production-grade enterprise software, and applied ML/NLP research.

Contact:
- Email: nagarsam8989@gmail.com
- Phone: +1 (657) 751-9425
- Location: Fullerton, California
- LinkedIn: https://www.linkedin.com/in/aavonsameer/
- GitHub: https://github.com/sameernagar-hub
- Google Scholar: https://scholar.google.com/citations?user=FfTfe3gAAAAJ&hl=en

Education:
- Master of Science in Computer Science, California State University, Fullerton. Graduated May 2026.
- Bachelor of Technology in Computer Science, Rajiv Gandhi Proudyogiki Vishwavidyalaya, India, 2018 - 2022.

Experience:
- Jr. Associate Software Engineer, Unthinkable Solutions, Gurugram, India, 2021 - 2024. Built backend services, full-stack applications, enterprise workflows, AI-powered features, LLM integrations, and automation.
- Teaching Associate, California State University, Fullerton, 2025 - 2026. Mentored students, supported computer science coursework, graded assignments, and collaborated with faculty.
- Service Associate, California State University, Fullerton, 2025 - 2026. Delivered customer service, transactions, inventory support, and team operations.

Salesforce credentials:
- Salesforce Platform Developer II
- Salesforce Platform Developer I
- Salesforce Advanced Administrator
- Salesforce Administrator
- Agentforce Specialist

Leadership:
- Vice President, Student Alumni Ambassadors

Skills:
- Python, Java, C++, JavaScript, React, Node.js, Flask, REST APIs, MySQL, MongoDB, AWS, Azure, Docker, CI/CD, LLMs, prompt engineering, Agentic AI, Salesforce development, Apex/platform development concepts, enterprise automation, NLP, sentiment analysis, classical machine learning.

Featured case studies and projects:
- Anomaly Detection Workbench: AI/ML and backend workflow for detecting unusual data patterns and supporting reviewable decisions. GitHub: https://github.com/sameernagar-hub/anomaly-detection-workbench
- Titan Smart Scheduler: scheduling-focused application work that highlights planning logic, user workflows, and maintainable software structure. GitHub: https://github.com/sameernagar-hub/titan-smart-scheduler
- Portfolio AI Assistant: resume-aware assistant with frontend prompt UX, formatted responses, saved chat history, local fallback answers, and a backend API proxy for live LLM responses without exposing API keys.
- AWS Intelligent Interaction Services: cloud-oriented backend services for intelligent interactions, request handling, orchestration, and environment-based configuration.
- Salesforce/Agentforce Enterprise Automation: Salesforce platform and Agentforce-aligned automation work focused on CRM workflows, stakeholder needs, and enterprise process improvement.
- Domain automation stories: healthcare-style intake and case routing, fintech operations and approval tracking, ecommerce service automation, customer workflow routing, SLA-aware CRM processes, backend API integration, and enterprise workflow automation.

Publications:
- Logistic Regression Based Approach for Human Sentiment Analysis Across Domains. IEEE Xplore Digital Library. Published Nov 12, 2024. Link: https://ieeexplore.ieee.org/document/10743868
- Cross Domain and Decision Tree Based Approach for Human Sentiment Analysis. Springer book series "Learning and Analytics in Intelligent Systems". Published Jul 13, 2024. Link: https://link.springer.com/book/10.1007/978-981-97-9855-1

Research summary:
- Proposed and implemented classical machine learning-based sentiment analysis approaches across domains.
- Used preprocessing, feature extraction, and model evaluation with metrics such as accuracy, precision, and recall.
- Focused on interpretable, lightweight, computationally efficient models such as logistic regression and decision trees for cross-domain sentiment classification.

Business bridge:
- Sameer connects engineering decisions to business outcomes, stakeholder needs, automation opportunities, reliability, and maintainability.
`;

const SYSTEM_INSTRUCTION = `
You are Sameer Nagar's resume-aware portfolio assistant for recruiters and hiring managers.
Answer using only the provided portfolio context. Be professional, specific, concise, and recruiter-friendly.
Do not invent employers, dates, metrics, degrees, certifications, or project outcomes that are not in the context.
If the user provides a job description, compare it to Sameer's listed background and explain the strongest matches and any gaps without exaggeration.
Use clean short paragraphs or bullets. Markdown is acceptable, but do not overuse bold formatting.
If a detail is not available, say the portfolio does not list it and offer Sameer's contact details.
`;

module.exports = {
  PROFILE_CONTEXT,
  SYSTEM_INSTRUCTION
};
