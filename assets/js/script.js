'use strict';

document.documentElement.classList.add('js');

const portfolioData = {
  prompts: [
    { label: 'Introduce Sameer in 30 seconds.', prompt: 'Introduce Sameer in 30 seconds.' },
    { label: 'Why should we hire Sameer?', prompt: 'Why should we hire Sameer?' },
    { label: 'Show his strongest AI work.', prompt: 'Summarize Sameer for an AI engineering role.' },
    { label: 'Show backend project signals.', prompt: 'Which project best shows Sameer\'s backend skills?' },
    { label: 'Match Sameer to this job description.', prompt: 'Match Sameer to this job description:', prefill: true }
  ],
  categories: [
    { id: 'all', label: 'All' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'salesforce', label: 'Salesforce' },
    { id: 'automation', label: 'Automation' },
    { id: 'research', label: 'Research' }
  ],
  caseStudies: [
    {
      title: 'Anomaly Detection Workbench',
      category: 'AI/ML + Backend',
      linkLabel: 'GitHub',
      link: 'https://github.com/sameernagar-hub/anomaly-detection-workbench',
      details: {
        Problem: 'Teams need a practical way to inspect unusual operational or analytical data patterns without manual spreadsheet-heavy review.',
        'My role': 'Designed the workbench around data ingestion, anomaly detection workflow, explainable review, and action-oriented outputs.',
        'Tech stack': 'Python, Pandas, machine learning workflow patterns, backend APIs, data review UX.',
        'Architecture/approach': 'Separated data preparation, detection logic, result ranking, and review flows so the system stays easier to test and extend.',
        Impact: 'Shows AI engineering judgment across backend processing, model-assisted analysis, and user-centered decision support.'
      }
    },
    {
      title: 'Titan Smart Scheduler',
      category: 'Scheduling + Backend',
      linkLabel: 'GitHub',
      link: 'https://github.com/sameernagar-hub/titan-smart-scheduler',
      details: {
        Problem: 'Students and teams need scheduling tools that reduce manual planning friction and make availability easier to reason about.',
        'My role': 'Built a scheduler-oriented application experience with planning logic, user workflows, and maintainable project structure.',
        'Tech stack': 'JavaScript, backend/service design patterns, scheduling logic, responsive UI concepts.',
        'Architecture/approach': 'Organized the project around schedule data, interaction flows, and reusable UI behavior so new scheduling rules can be added cleanly.',
        Impact: 'Demonstrates product-minded engineering in a practical planning workflow with clear backend and UX signals.'
      }
    },
    {
      title: 'Portfolio AI Assistant',
      category: 'LLM Application',
      linkLabel: 'GitHub',
      link: 'https://github.com/sameernagar-hub/sameer-nagar-portfolio',
      details: {
        Problem: 'Recruiters and hiring managers need a faster way to understand Sameer\'s fit without searching through every section manually.',
        'My role': 'Built a resume-aware assistant with prompt UX, local fallback answers, formatted responses, chat history, and a backend API proxy for live LLM responses.',
        'Tech stack': 'HTML, CSS, JavaScript, Python/FastAPI option, serverless API, Gemini API via environment variables.',
        'Architecture/approach': 'Keeps API keys server-side, constrains responses to resume-aligned context, and handles loading, errors, formatting, new chats, and saved history.',
        Impact: 'Turns the portfolio into an interactive evaluator while preserving privacy and deployment safety.'
      }
    },
    {
      title: 'Salesforce and Agentforce Enterprise Automation',
      category: 'Salesforce + Agentforce',
      linkLabel: 'Request demo',
      link: 'mailto:nagarsam8989@gmail.com?subject=Salesforce%20Agentforce%20case%20study',
      details: {
        Problem: 'Enterprise teams often need cleaner CRM workflows, reduced manual handoffs, and automation that matches real business processes.',
        'My role': 'Applied Salesforce platform development, admin knowledge, and Agentforce learning to automation-heavy enterprise scenarios.',
        'Tech stack': 'Salesforce, Apex/platform development concepts, administration, Agentforce Specialist knowledge, enterprise process mapping.',
        'Architecture/approach': 'Maps stakeholder workflows into platform logic, validation, automation paths, and maintainable CRM configuration.',
        Impact: 'Positions Sameer for technology consulting and enterprise software roles where engineering supports business operations.'
      }
    }
  ],
  projects: [
    {
      title: 'Anomaly Detection Workbench',
      category: 'ai-ml',
      categoryLabel: 'AI/ML',
      image: './assets/images/project-5.png',
      alt: 'Anomaly detection workflow dashboard',
      text: 'AI workflow for detecting unusual data patterns and making results easier to review, explain, and act on.',
      tags: ['Python', 'Pandas', 'ML Workflows'],
      links: [{ label: 'GitHub', href: 'https://github.com/sameernagar-hub/anomaly-detection-workbench' }]
    },
    {
      title: 'Titan Smart Scheduler',
      category: 'backend',
      categoryLabel: 'Backend',
      image: './assets/images/project-1.jpg',
      alt: 'Scheduling application planning interface',
      text: 'Scheduler-focused application work that highlights planning logic, clean interaction flow, and maintainable software structure.',
      tags: ['Scheduling', 'JavaScript', 'Backend Logic'],
      links: [{ label: 'GitHub', href: 'https://github.com/sameernagar-hub/titan-smart-scheduler' }]
    },
    {
      title: 'Portfolio AI Assistant',
      category: 'ai-ml',
      categoryLabel: 'AI/ML',
      image: './assets/images/project-3.jpg',
      alt: 'AI assistant interface',
      text: 'Resume-aware assistant with prompt chips, formatted responses, saved chat history, local fallback logic, and a live LLM proxy.',
      tags: ['LLM', 'JavaScript', 'FastAPI'],
      links: [{ label: 'GitHub', href: 'https://github.com/sameernagar-hub/sameer-nagar-portfolio' }]
    },
    {
      title: 'AWS Intelligent Interaction Services',
      category: 'cloud',
      categoryLabel: 'Cloud',
      image: './assets/images/project-9.png',
      alt: 'AWS intelligent service architecture',
      text: 'Cloud-oriented interaction services that combine backend request flow, intelligent behavior, and deployment-aware architecture.',
      tags: ['AWS', 'APIs', 'Cloud'],
      links: [{ label: 'Discuss', href: 'mailto:nagarsam8989@gmail.com?subject=AWS%20Intelligent%20Interaction%20Services' }]
    },
    {
      title: 'Salesforce Healthcare Automation',
      category: 'salesforce',
      categoryLabel: 'Salesforce',
      image: './assets/images/project-4.png',
      alt: 'Healthcare automation workflow',
      text: 'Workflow automation story for healthcare-style intake, case routing, data validation, and stakeholder handoff patterns in Salesforce.',
      tags: ['Salesforce', 'Healthcare', 'Automation'],
      links: [{ label: 'Discuss', href: 'mailto:nagarsam8989@gmail.com?subject=Healthcare%20Salesforce%20Automation' }]
    },
    {
      title: 'FinTech Operations Automation',
      category: 'automation',
      categoryLabel: 'Automation',
      image: './assets/images/project-7.png',
      alt: 'FinTech automation data workflow',
      text: 'Automation concept for financial operations workflows such as request intake, approval tracking, exception handling, and audit-friendly process design.',
      tags: ['FinTech', 'Workflow', 'Salesforce'],
      links: [{ label: 'Discuss', href: 'mailto:nagarsam8989@gmail.com?subject=FinTech%20Automation%20Work' }]
    },
    {
      title: 'Ecommerce Service Automation',
      category: 'automation',
      categoryLabel: 'Automation',
      image: './assets/images/project-8.jpg',
      alt: 'Ecommerce service automation dashboard',
      text: 'Ecommerce automation narrative around order support, customer case workflows, SLA-aware routing, and backend service integration.',
      tags: ['Ecommerce', 'CRM', 'APIs'],
      links: [{ label: 'Discuss', href: 'mailto:nagarsam8989@gmail.com?subject=Ecommerce%20Automation%20Work' }]
    },
    {
      title: 'Enterprise Data Pipeline Services',
      category: 'backend',
      categoryLabel: 'Backend',
      image: './assets/images/project-6.png',
      alt: 'Enterprise data pipeline visualization',
      text: 'Database-backed processes, validation layers, and service logic for more reliable data movement across enterprise systems.',
      tags: ['SQL', 'NoSQL', 'APIs'],
      links: [{ label: 'Discuss', href: 'mailto:nagarsam8989@gmail.com?subject=Enterprise%20Data%20Pipeline%20Services' }]
    },
    {
      title: 'Cross-Domain Sentiment Research',
      category: 'research',
      categoryLabel: 'Research',
      image: './assets/images/blog-2.jpg',
      alt: 'Natural language processing research workspace',
      text: 'Published NLP research exploring interpretable machine learning approaches for sentiment analysis across domains.',
      tags: ['NLP', 'Logistic Regression', 'Decision Trees'],
      links: [{ label: 'Scholar', href: 'https://scholar.google.com/citations?user=FfTfe3gAAAAJ&hl=en' }]
    }
  ],
  publications: [
    {
      title: 'Logistic Regression Based Approach for Human Sentiment Analysis Across Domains',
      venue: 'IEEE Xplore Digital Library',
      date: 'Nov 12, 2024',
      link: 'https://ieeexplore.ieee.org/document/10743868',
      summary: [
        'Proposed and implemented a machine learning-based sentiment analysis model using logistic regression to classify human sentiment across multiple domains.',
        'Conducted preprocessing, feature extraction, and evaluation with accuracy, precision, and recall to highlight interpretable, computationally efficient NLP modeling.'
      ]
    },
    {
      title: 'Cross Domain and Decision Tree Based Approach for Human Sentiment Analysis',
      venue: 'Springer book series "Learning and Analytics in Intelligent Systems"',
      date: 'Jul 13, 2024',
      link: 'https://link.springer.com/book/10.1007/978-981-97-9855-1',
      summary: [
        'Proposed a cross-domain sentiment analysis framework using decision tree-based classification across textual domains such as product reviews, social media, and news data.',
        'Focused on domain-independent feature extraction and model transparency for scalable real-world sentiment analysis applications.'
      ]
    }
  ]
};

const profileContext = {
  name: 'Sameer Nagar',
  role: 'Software Development Engineer building AI-powered backend systems, enterprise automation, and intelligent cloud applications.',
  contact: {
    email: 'nagarsam8989@gmail.com',
    phone: '+1 (657) 751-9425',
    location: 'Fullerton, California',
    linkedin: 'https://www.linkedin.com/in/aavonsameer/',
    github: 'https://github.com/sameernagar-hub',
    scholar: 'https://scholar.google.com/citations?user=FfTfe3gAAAAJ&hl=en'
  },
  education: [
    'MS in Computer Science, California State University, Fullerton. Graduated May 2026, GPA 3.70/4.00.',
    'BTech in Computer Science, Rajiv Gandhi Proudyogiki Vishwavidyalaya, India, 2018 - 2022, GPA 3.66/4.00.'
  ],
  experience: [
    '~3 years of Software Development Engineer experience.',
    'Jr. Associate Software Engineer at Unthinkable Solutions, 2021 - 2024.',
    'Teaching Associate at California State University, Fullerton, 2025 - 2026.',
    'Service Associate at California State University, Fullerton, 2025 - 2026.'
  ],
  certifications: [
    'Salesforce Platform Developer II',
    'Salesforce Platform Developer I',
    'Salesforce Advanced Administrator',
    'Salesforce Administrator',
    'Agentforce Specialist'
  ],
  leadership: [
    'Vice President, Student Alumni Ambassadors'
  ],
  skills: [
    'Backend systems',
    'AI/LLM applications',
    'Salesforce development',
    'Agentforce',
    'AWS',
    'enterprise automation',
    'Python',
    'Java',
    'C++',
    'JavaScript',
    'React',
    'Node.js',
    'Flask',
    'MySQL',
    'MongoDB',
    'Docker',
    'CI/CD'
  ],
  projects: portfolioData.caseStudies.map((project) => project.title),
  publications: portfolioData.publications.map((publication) => publication.title)
};

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const createLink = (label, href, className) => {
  const link = createElement('a', className, label);
  link.href = href;

  if (!href.startsWith('mailto:') && !href.startsWith('tel:')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  return link;
};

const inlineFormat = (line) => escapeHtml(line)
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

const formatMessageHtml = (message) => {
  const lines = String(message || '').replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let listType = null;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      return;
    }

    const bullet = trimmed.match(/^[-*]\s+(.+)/);
    const numbered = trimmed.match(/^\d+[.)]\s+(.+)/);

    if (bullet || numbered) {
      const nextListType = bullet ? 'ul' : 'ol';
      if (listType !== nextListType) {
        closeList();
        html += `<${nextListType}>`;
        listType = nextListType;
      }
      html += `<li>${inlineFormat(bullet ? bullet[1] : numbered[1])}</li>`;
      return;
    }

    closeList();
    html += `<p>${inlineFormat(trimmed)}</p>`;
  });

  closeList();
  return html || '<p></p>';
};

const toggleActive = (element) => {
  if (element) element.classList.toggle('active');
};

const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateSlidingIndicator = (container, activeElement, xVar, widthVar) => {
  if (!container || !activeElement) return;
  const containerRect = container.getBoundingClientRect();
  const activeRect = activeElement.getBoundingClientRect();
  container.style.setProperty(xVar, `${activeRect.left - containerRect.left}px`);
  container.style.setProperty(widthVar, `${activeRect.width}px`);
};

const renderPrompts = () => {
  document.querySelectorAll('[data-prompt-list]').forEach((container) => {
    container.innerHTML = '';

    portfolioData.prompts.forEach((item) => {
      const button = createElement('button', 'prompt-chip', item.label);
      button.type = 'button';
      button.dataset.aiPrompt = item.prompt;
      if (item.prefill) button.dataset.aiPrefill = 'true';
      container.appendChild(button);
    });
  });
};

const renderCaseStudies = () => {
  const container = document.querySelector('[data-case-study-list]');
  if (!container) return;

  container.innerHTML = '';

  portfolioData.caseStudies.forEach((study) => {
    const article = createElement('article', 'case-study-card');
    const topline = createElement('div', 'case-study-topline');
    topline.appendChild(createElement('p', 'project-category', study.category));
    topline.appendChild(createLink(study.linkLabel, study.link, null));

    const title = createElement('h3', 'project-title', study.title);
    const details = createElement('dl', 'case-study-details');

    Object.entries(study.details).forEach(([label, text]) => {
      details.appendChild(createElement('dt', null, label));
      details.appendChild(createElement('dd', null, text));
    });

    article.append(topline, title, details);
    container.appendChild(article);
  });
};

const renderProjectFilters = () => {
  const filterList = document.querySelector('[data-project-filters]');
  const selectList = document.querySelector('[data-project-select]');

  if (filterList) filterList.innerHTML = '';
  if (selectList) selectList.innerHTML = '';

  portfolioData.categories.forEach((category, index) => {
    if (filterList) {
      const item = createElement('li', 'filter-item');
      const button = createElement('button', index === 0 ? 'active' : '', category.label);
      button.type = 'button';
      button.dataset.filterBtn = '';
      button.dataset.filter = category.id;
      item.appendChild(button);
      filterList.appendChild(item);
    }

    if (selectList) {
      const item = createElement('li', 'select-item');
      const button = createElement('button', null, category.label);
      button.type = 'button';
      button.dataset.selectItem = '';
      button.dataset.filter = category.id;
      item.appendChild(button);
      selectList.appendChild(item);
    }
  });
};

const renderProjects = () => {
  const list = document.querySelector('[data-project-list]');
  if (!list) return;

  list.innerHTML = '';

  portfolioData.projects.forEach((project) => {
    const item = createElement('li', 'project-item active');
    item.dataset.filterItem = '';
    item.dataset.category = project.category;

    const card = createElement('article', 'project-card');
    const figure = createElement('figure', 'project-img');
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.alt;
    image.loading = 'lazy';
    figure.appendChild(image);

    const content = createElement('div', 'project-content');
    content.appendChild(createElement('p', 'project-category', project.categoryLabel));
    content.appendChild(createElement('h3', 'project-title', project.title));
    content.appendChild(createElement('p', 'project-text', project.text));

    const tags = createElement('ul', 'tag-list');
    project.tags.forEach((tag) => tags.appendChild(createElement('li', null, tag)));
    content.appendChild(tags);

    if (project.links?.length) {
      const links = createElement('div', 'project-links');
      project.links.forEach((link) => links.appendChild(createLink(link.label, link.href, 'card-link')));
      content.appendChild(links);
    }

    card.append(figure, content);
    item.appendChild(card);
    list.appendChild(item);
  });
};

const renderPublications = () => {
  const list = document.querySelector('[data-publication-list]');
  if (!list) return;

  list.innerHTML = '';

  portfolioData.publications.forEach((publication) => {
    const article = createElement('article', 'publication-card');
    const meta = createElement('p', 'publication-meta', `${publication.venue} | ${publication.date}`);
    const title = createElement('h4', 'h4', publication.title);
    const summaryList = createElement('ul', 'publication-summary');

    publication.summary.forEach((summary) => {
      summaryList.appendChild(createElement('li', null, summary));
    });

    const link = createLink('Show publication', publication.link, 'card-link');
    article.append(meta, title, summaryList, link);
    list.appendChild(article);
  });
};

renderPrompts();
renderCaseStudies();
renderProjectFilters();
renderProjects();
renderPublications();

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => toggleActive(sidebar));
}

const navigationLinks = document.querySelectorAll('.navbar [data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
const navList = document.querySelector('[data-nav-list]');

const updateNavIndicator = () => {
  const activeNav = document.querySelector('.navbar [data-nav-link].active');
  updateSlidingIndicator(navList, activeNav, '--nav-indicator-x', '--nav-indicator-width');
};

const showPage = (targetPage) => {
  if (!targetPage) return;

  pages.forEach((page) => {
    page.classList.toggle('active', page.dataset.page === targetPage);
  });

  navigationLinks.forEach((navLink) => {
    navLink.classList.toggle('active', navLink.dataset.target === targetPage);
  });

  updateNavIndicator();

  requestAnimationFrame(() => {
    document.querySelectorAll(`[data-page="${targetPage}"] .reveal`).forEach((element) => {
      element.classList.add('is-visible');
    });
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => showPage(link.dataset.target));
});

requestAnimationFrame(updateNavIndicator);
window.addEventListener('resize', updateNavIndicator);

const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterList = document.querySelector('[data-project-filters]');

const updateFilterIndicator = () => {
  const activeFilter = document.querySelector('[data-filter-btn].active');
  updateSlidingIndicator(filterList, activeFilter, '--filter-indicator-x', '--filter-indicator-width');
};

const filterProjects = (filter) => {
  filterItems.forEach((item) => {
    const isVisible = filter === 'all' || item.dataset.category === filter;
    item.classList.toggle('active', isVisible);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle('active', filterButton === button);
    });

    if (selectValue) selectValue.textContent = button.textContent.trim();
    filterProjects(filter);
    updateFilterIndicator();
  });
});

if (select) {
  select.addEventListener('click', () => toggleActive(select));
}

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const filter = item.dataset.filter;
    const label = item.textContent.trim();

    if (selectValue) selectValue.textContent = label;
    if (select) select.classList.remove('active');

    filterButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === filter);
    });

    filterProjects(filter);
    updateFilterIndicator();
  });
});

requestAnimationFrame(updateFilterIndicator);
window.addEventListener('resize', updateFilterIndicator);

const themeToggle = document.querySelector('[data-theme-toggle]');
const storedTheme = localStorage.getItem('portfolio_theme');
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = ['dark', 'light'].includes(storedTheme) ? storedTheme : (prefersLight ? 'light' : 'dark');

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('portfolio_theme', theme);

  if (!themeToggle) return;
  const icon = themeToggle.querySelector('ion-icon');
  const isLight = theme === 'light';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  if (icon) icon.setAttribute('name', isLight ? 'moon-outline' : 'sunny-outline');
};

applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

const updateFormState = () => {
  if (!form || !formBtn) return;
  formBtn.toggleAttribute('disabled', !form.checkValidity());
};

formInputs.forEach((input) => input.addEventListener('input', updateFormState));

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('fullname') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:nagarsam8989@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
    updateFormState();
  });
}

const agentMessages = document.getElementById('agentMessages');
const agentInput = document.getElementById('agentInput');
const agentForm = document.getElementById('agentForm');
const agentSendBtn = document.getElementById('agentSendBtn');
const newChatBtn = document.getElementById('newChatBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const chatHistoryList = document.getElementById('chatHistoryList');

const chatWidget = document.getElementById('chatWidget');
const chatWidgetBtn = document.getElementById('chatWidgetBtn');
const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatForm = document.getElementById('chatForm');
const chatSendBtn = document.getElementById('chatSendBtn');

const CHAT_SESSIONS_KEY = 'agent_chat_sessions';
const ACTIVE_CHAT_KEY = 'agent_active_chat';
const LEGACY_HISTORY_KEY = 'agent_history';
const assistantGreeting = "Hi, I'm Sameer's portfolio assistant. I can walk you through his AI, backend, Salesforce, cloud, research, leadership, and project work using grounded context.";
const heroIntroText = "Hi, I'm Sameer's portfolio assistant. I can walk you through his AI projects, backend systems, Salesforce credentials, cloud work, research, and leadership without making you dig through a static page.";

const startHeroIntro = () => {
  const target = document.querySelector('[data-typed-intro]');
  const state = document.querySelector('[data-agent-state]');
  const steps = Array.from(document.querySelectorAll('[data-agent-step]'));

  if (!target) return;

  const setStep = (index) => {
    steps.forEach((step, stepIndex) => {
      step.classList.toggle('active', stepIndex <= index);
    });
    if (state) {
      state.textContent = index >= steps.length - 1 ? 'ready' : 'syncing';
    }
  };

  if (prefersReducedMotion) {
    target.textContent = heroIntroText;
    target.classList.add('is-complete');
    setStep(steps.length - 1);
    return;
  }

  target.textContent = '';
  setStep(0);
  let index = 0;

  const typeNext = () => {
    target.textContent = heroIntroText.slice(0, index);

    if (index === 46) setStep(1);
    if (index === 118) setStep(2);

    if (index >= heroIntroText.length) {
      target.classList.add('is-complete');
      setStep(steps.length - 1);
      return;
    }

    index += 1;
    window.setTimeout(typeNext, index < 12 ? 42 : 18);
  };

  window.setTimeout(typeNext, 450);
};

const createSessionId = () => {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const createSession = (messages = []) => ({
  id: createSessionId(),
  title: messages.find((message) => message.role === 'user')?.content.slice(0, 42) || 'New Chat',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  messages
});

const loadSessions = () => {
  try {
    const sessions = JSON.parse(localStorage.getItem(CHAT_SESSIONS_KEY) || '[]');
    if (Array.isArray(sessions) && sessions.length) return sessions;

    const legacy = JSON.parse(localStorage.getItem(LEGACY_HISTORY_KEY) || '[]');
    if (Array.isArray(legacy) && legacy.length) return [createSession(legacy)];
  } catch (error) {
    localStorage.removeItem(CHAT_SESSIONS_KEY);
  }

  return [createSession()];
};

let chatSessions = loadSessions();
let activeSessionId = localStorage.getItem(ACTIVE_CHAT_KEY) || chatSessions[0].id;

const getActiveSession = () => {
  let session = chatSessions.find((item) => item.id === activeSessionId);

  if (!session) {
    session = chatSessions[0] || createSession();
    chatSessions = chatSessions.length ? chatSessions : [session];
    activeSessionId = session.id;
  }

  return session;
};

let conversationHistory = getActiveSession().messages;

const saveSessions = () => {
  chatSessions = chatSessions
    .map((session) => ({
      ...session,
      messages: session.messages.slice(-24)
    }))
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 12);

  localStorage.setItem(CHAT_SESSIONS_KEY, JSON.stringify(chatSessions));
  localStorage.setItem(ACTIVE_CHAT_KEY, activeSessionId);
};

const formatTime = (timestamp) => {
  try {
    return new Intl.DateTimeFormat([], {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date(timestamp));
  } catch (error) {
    return 'Saved chat';
  }
};

const renderHistory = () => {
  if (!chatHistoryList) return;

  chatHistoryList.innerHTML = '';

  chatSessions.forEach((session) => {
    const item = createElement('div', session.id === activeSessionId ? 'history-item active' : 'history-item');
    const button = createElement('button', 'history-main', '');
    button.type = 'button';
    button.dataset.sessionId = session.id;

    const title = createElement('span', 'history-title', session.title || 'New Chat');
    const time = createElement('span', 'history-time', formatTime(session.updatedAt));
    button.append(title, time);

    const removeButton = createElement('button', 'history-delete-btn', 'Delete');
    removeButton.type = 'button';
    removeButton.dataset.deleteSession = session.id;

    item.append(button, removeButton);
    chatHistoryList.appendChild(item);
  });
};

const renderActiveMessages = () => {
  if (!agentMessages) return;

  const session = getActiveSession();
  conversationHistory = session.messages;
  agentMessages.innerHTML = '';

  if (!session.messages.length) {
    appendMessage(agentMessages, assistantGreeting, 'bot');
    return;
  }

  session.messages.forEach((message) => {
    appendMessage(agentMessages, message.content, message.role === 'user' ? 'user' : 'bot');
  });
};

const activateSession = (sessionId) => {
  activeSessionId = sessionId;
  conversationHistory = getActiveSession().messages;
  saveSessions();
  renderHistory();
  renderActiveMessages();
  if (agentInput) agentInput.focus();
};

const startNewChat = () => {
  const session = createSession();
  chatSessions.unshift(session);
  activeSessionId = session.id;
  conversationHistory = session.messages;
  saveSessions();
  renderHistory();
  renderActiveMessages();
  if (agentInput) agentInput.focus();
};

const deleteSession = (sessionId) => {
  chatSessions = chatSessions.filter((session) => session.id !== sessionId);

  if (!chatSessions.length) {
    chatSessions = [createSession()];
  }

  if (activeSessionId === sessionId) {
    activeSessionId = chatSessions[0].id;
  }

  conversationHistory = getActiveSession().messages;
  saveSessions();
  renderHistory();
  renderActiveMessages();
};

const pushToActiveSession = (role, content) => {
  const session = getActiveSession();
  session.messages.push({ role, content });
  session.updatedAt = Date.now();

  if (role === 'user' && (!session.title || session.title === 'New Chat')) {
    session.title = content.length > 42 ? `${content.slice(0, 42)}...` : content;
  }

  conversationHistory = session.messages;
  saveSessions();
  renderHistory();
};

const openChat = () => {
  if (!chatWidget || !chatWidgetBtn) return;
  chatWidget.classList.add('active');
  chatWidgetBtn.style.display = 'none';
  if (chatInput) chatInput.focus();
};

const closeChat = () => {
  if (!chatWidget || !chatWidgetBtn) return;
  chatWidget.classList.remove('active');
  chatWidgetBtn.style.display = 'flex';
};

if (chatWidgetBtn) chatWidgetBtn.addEventListener('click', openChat);
if (chatToggleBtn) chatToggleBtn.addEventListener('click', closeChat);

const appendMessage = (container, message, type, options = {}) => {
  if (!container) return null;

  const messageElement = document.createElement('div');
  messageElement.className = container.id === 'agentMessages' ? `agent-${type}-message` : `message ${type}-message`;
  messageElement.classList.add('rendered-message');
  if (options.pending) messageElement.classList.add('is-pending');
  if (options.error) messageElement.classList.add('is-error');

  const content = document.createElement('div');

  if (options.pending) {
    content.innerHTML = `${escapeHtml(message)} <span class="typing-dots" aria-hidden="true"><span></span><span></span><span></span></span>`;
  } else {
    content.innerHTML = formatMessageHtml(message);
  }

  messageElement.appendChild(content);
  container.appendChild(messageElement);
  container.scrollTop = container.scrollHeight;

  return messageElement;
};

const removeMessage = (messageElement) => {
  if (messageElement && messageElement.parentElement) {
    messageElement.parentElement.removeChild(messageElement);
  }
};

const includesAny = (message, keywords) => keywords.some((keyword) => message.includes(keyword));

const localAssistantResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  const contactLine = `You can reach Sameer at ${profileContext.contact.email}, LinkedIn at ${profileContext.contact.linkedin}, GitHub at ${profileContext.contact.github}, or Google Scholar at ${profileContext.contact.scholar}.`;

  if (includesAny(message, ['hello', 'hi', 'hey'])) {
    return "**Hi, I'm Sameer's portfolio assistant.**\n\nAsk me about his AI/LLM work, backend systems, Salesforce credentials, AWS experience, research, projects, leadership, contact channels, or fit for a role.";
  }

  if (includesAny(message, ['introduce', '30 seconds', 'overview', 'summary'])) {
    return "**Sameer in 30 seconds:** Sameer Nagar is a Software Development Engineer and CSUF MS Computer Science graduate focused on AI-ready backend systems, LLM product flows, Salesforce and Agentforce automation, AWS/cloud applications, research-backed ML/NLP work, and practical enterprise software.";
  }

  if (includesAny(message, ['hire', 'why should we hire', 'why hire'])) {
    return "**Why hire Sameer:**\n- ~3 years of Software Development Engineer experience\n- MS Computer Science from CSUF, May 2026\n- Backend systems, AI/LLM applications, Salesforce, AWS, and enterprise automation strengths\n- Salesforce Platform Developer II, Platform Developer I, Advanced Admin, Admin, and Agentforce Specialist\n- Leadership as Vice President, Student Alumni Ambassadors";
  }

  if (includesAny(message, ['ai engineering role', 'ai engineer', 'llm role', 'summarize sameer for an ai'])) {
    return "**AI engineering fit:** Sameer brings LLM application experience, prompt engineering, anomaly detection workflow thinking, backend API skills, and cloud deployment awareness. His portfolio AI assistant, anomaly detection workbench, and sentiment analysis publications show he can connect AI behavior to usable product and research workflows.";
  }

  if (includesAny(message, ['backend skills', 'backend project', 'api skills'])) {
    return "**Best backend signals:**\n- Titan Smart Scheduler for application logic and planning workflows\n- AWS Intelligent Interaction Services for cloud-aware service design\n- Portfolio AI Assistant for secure API proxying and response handling\n- Enterprise data pipeline services for validation and data movement patterns";
  }

  if (includesAny(message, ['consulting', 'technology role', 'business role', 'stakeholder'])) {
    return "Sameer fits consulting and technology roles because he blends engineering execution with business context: Salesforce and Agentforce credentials, enterprise automation experience, backend systems thinking, stakeholder communication, and leadership as Vice President of Student Alumni Ambassadors.";
  }

  if (includesAny(message, ['job description', 'jd', 'match sameer', 'match this'])) {
    return "Paste the job description and I can compare it against Sameer's resume-aligned strengths: Software Development Engineering, AI/LLMs, backend systems, Salesforce Platform Developer/Admin credentials, Agentforce Specialist, AWS, enterprise automation, CSUF MS Computer Science, publications, and leadership experience.";
  }

  if (includesAny(message, ['publication', 'research', 'scholar', 'ieee', 'springer', 'sentiment'])) {
    return `**Publications:**\n- ${profileContext.publications[0]} - IEEE Xplore Digital Library, Nov 12, 2024\n- ${profileContext.publications[1]} - Springer Learning and Analytics in Intelligent Systems, Jul 13, 2024\n\nGoogle Scholar: ${profileContext.contact.scholar}`;
  }

  if (includesAny(message, ['titan', 'scheduler', 'schedular', 'schedule'])) {
    return "Titan Smart Scheduler is a scheduling-focused project that highlights Sameer's application logic, planning workflow design, and ability to organize interactive software around practical user needs. GitHub: https://github.com/sameernagar-hub/titan-smart-scheduler";
  }

  if (includesAny(message, ['anomaly', 'detection', 'workbench'])) {
    return "Anomaly Detection Workbench is one of Sameer's strongest AI/backend projects. It focuses on detecting unusual data patterns, structuring review workflows, and making model-assisted outputs easier to inspect and act on. GitHub: https://github.com/sameernagar-hub/anomaly-detection-workbench";
  }

  if (includesAny(message, ['healthcare', 'fintech', 'ecommerce', 'e-commerce'])) {
    return "Sameer's automation positioning includes Salesforce and enterprise workflow patterns for healthcare-style intake and case routing, fintech operations and approval tracking, and ecommerce service automation with CRM and backend API integration. These are framed as domain-focused automation stories without overstating private client details.";
  }

  if (includesAny(message, ['salesforce', 'agentforce', 'certification', 'certified', 'crm'])) {
    return `Sameer's Salesforce credentials include ${profileContext.certifications.join(', ')}. His Salesforce positioning is strongest for platform development, administration, Agentforce-aware automation, CRM workflow improvement, and enterprise technology consulting.`;
  }

  if (includesAny(message, ['leadership', 'student alumni', 'ambassador', 'vice president'])) {
    return "Sameer serves as Vice President of Student Alumni Ambassadors, which strengthens his stakeholder communication, representation, leadership, and team collaboration profile alongside his engineering background.";
  }

  if (includesAny(message, ['contact', 'email', 'phone', 'linkedin', 'github', 'reach'])) {
    return `You can reach Sameer at ${profileContext.contact.email}, call ${profileContext.contact.phone}, view LinkedIn at ${profileContext.contact.linkedin}, see GitHub at ${profileContext.contact.github}, or review Google Scholar at ${profileContext.contact.scholar}.`;
  }

  if (includesAny(message, ['resume', 'cv', 'download'])) {
    return "This portfolio focuses on live context instead of a download-first flow. Ask me for a role-specific summary, project evidence, or a job-description match, then reach Sameer by email or LinkedIn from the contact section.";
  }

  if (includesAny(message, ['education', 'school', 'degree', 'gpa', 'csuf', 'university', 'graduate'])) {
    return profileContext.education.join(' ');
  }

  if (includesAny(message, ['experience', 'work', 'job', 'unthinkable', 'teaching', 'associate'])) {
    return `${profileContext.experience.join(' ')} His strongest themes are backend engineering, AI/LLM applications, Salesforce automation, AWS/cloud systems, research-backed ML/NLP work, and enterprise software delivery.`;
  }

  if (includesAny(message, ['skill', 'stack', 'technology', 'tech', 'tools'])) {
    return `Sameer's core stack includes ${profileContext.skills.join(', ')}. His strongest hiring narrative is software development engineering with AI/LLM, backend, Salesforce, cloud, enterprise automation, and applied ML/NLP research strengths.`;
  }

  if (includesAny(message, ['cloud', 'aws', 'azure', 'docker', 'ci/cd', 'devops'])) {
    return "Sameer has cloud and delivery experience across AWS, Azure exposure, Docker, CI/CD, deployment automation, and intelligent cloud application patterns. The AWS Intelligent Interaction Services project is the clearest cloud-focused case study.";
  }

  if (includesAny(message, ['project', 'portfolio', 'case study', 'built', 'application'])) {
    return `Featured case studies include ${profileContext.projects.join(', ')}. Together they show AI/LLM applications, backend systems, scheduling workflows, Salesforce automation, and recruiter-friendly product thinking.`;
  }

  return `Sameer is a Software Development Engineer focused on AI-powered backend systems, Salesforce and Agentforce automation, AWS/cloud applications, research-backed ML/NLP work, and production-grade enterprise software. ${contactLine}`;
};

const askLiveAssistant = async (message, history) => {
  const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const origin = isLocalHost ? 'http://localhost:8000' : '';
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${origin}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        message,
        history: history.slice(-8)
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'AI endpoint unavailable');
    }

    if (!data || typeof data.reply !== 'string' || !data.reply.trim()) {
      throw new Error('AI endpoint returned an empty response');
    }

    return data.reply.trim();
  } finally {
    window.clearTimeout(timeoutId);
  }
};

const setChatLoading = (isLoading) => {
  if (chatSendBtn) chatSendBtn.disabled = isLoading;
  if (chatInput) chatInput.disabled = isLoading;
  if (chatMessages) chatMessages.setAttribute('aria-busy', String(isLoading));
};

const setAgentLoading = (isLoading) => {
  if (agentSendBtn) agentSendBtn.disabled = isLoading;
  if (agentInput) agentInput.disabled = isLoading;
  if (agentMessages) agentMessages.setAttribute('aria-busy', String(isLoading));
};

const sendChatMessage = async (event) => {
  event.preventDefault();
  const isWidget = event.currentTarget.id === 'chatForm';
  const input = isWidget ? chatInput : agentInput;
  const container = isWidget ? chatMessages : agentMessages;
  const setLoading = isWidget ? setChatLoading : setAgentLoading;

  if (!input || !container) return;
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(container, userMessage, 'user');
  pushToActiveSession('user', userMessage);
  input.value = '';
  setLoading(true);

  const pendingMessage = appendMessage(container, 'Thinking through Sameer\'s profile', 'bot', { pending: true });

  try {
    const reply = await askLiveAssistant(userMessage, getActiveSession().messages);
    removeMessage(pendingMessage);
    appendMessage(container, reply, 'bot');
    pushToActiveSession('assistant', reply);
  } catch (error) {
    const fallbackReply = `**Live AI is unavailable, so here is the local resume-aware answer:**\n\n${localAssistantResponse(userMessage)}`;
    removeMessage(pendingMessage);
    appendMessage(container, fallbackReply, 'bot', { error: true });
    pushToActiveSession('assistant', fallbackReply);
  } finally {
    setLoading(false);
    if (input) input.focus();
  }
};

const attachPromptListeners = () => {
  document.querySelectorAll('[data-ai-prompt]').forEach((button) => {
    button.addEventListener('click', () => {
      const prompt = button.dataset.aiPrompt || '';
      const shouldPrefill = button.dataset.aiPrefill === 'true';

      showPage('agent');

      if (!agentInput || !agentForm) return;
      agentInput.value = shouldPrefill ? `${prompt} ` : prompt;
      agentInput.focus();

      if (!shouldPrefill) {
        requestAnimationFrame(() => {
          if (typeof agentForm.requestSubmit === 'function') {
            agentForm.requestSubmit();
          } else {
            agentForm.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          }
        });
      }
    });
  });
};

const openAgentButtons = document.querySelectorAll('[data-open-agent]');

openAgentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showPage('agent');
    if (agentInput) agentInput.focus();
  });
});

attachPromptListeners();

if (chatHistoryList) {
  chatHistoryList.addEventListener('click', (event) => {
    const historyButton = event.target.closest('[data-session-id]');
    const deleteButton = event.target.closest('[data-delete-session]');

    if (deleteButton) {
      deleteSession(deleteButton.dataset.deleteSession);
      return;
    }

    if (historyButton) {
      activateSession(historyButton.dataset.sessionId);
    }
  });
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('Clear all saved AI chat history?')) {
      chatSessions = [createSession()];
      activeSessionId = chatSessions[0].id;
      conversationHistory = chatSessions[0].messages;
      saveSessions();
      renderHistory();
      renderActiveMessages();
    }
  });
}

startHeroIntro();

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page.active .reveal').forEach((element) => {
    element.classList.add('is-visible');
  });

  renderHistory();
  renderActiveMessages();
});

if (chatForm) chatForm.addEventListener('submit', sendChatMessage);
if (agentForm) agentForm.addEventListener('submit', sendChatMessage);
if (newChatBtn) newChatBtn.addEventListener('click', startNewChat);
