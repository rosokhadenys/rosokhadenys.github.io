// User-verified professional content. Brackets mark unresolved, non-public details.
export interface Experience {
  id: string; location?: string; projectLink?: string; company: string; position: string; period: string; description: string;
  overview?: string; scope?: string | string[]; responsibilities?: string[]; impact?: string | string[]; tools?: string | string[]; tags?: string[];
}
export interface Project {
  id: string; category: string; title: string; summary: string; tags: string[];
  challenge: string; role: string; solution: string; results: string; technologies: string | string[];
}
export interface WorkflowStep { id: string; title: string; description: string; input: string; process: string; output: string; role: string }
export const profile = {
  "name": "Denys Rosokha",
  "initials": "PM",
  "role": "Project Manager",
  "direction": "Operations & Delivery | AI-enabled Workflows",
  "introduction": "Founder-minded Project Manager with 2.5+ years of hands-on experience launching, running and scaling operations in fast-growing German businesses — now bringing that ownership mindset, structure and execution speed into digital product teams and AI-enabled workflows.",
  "overview": "I launch, run and scale operations across renewable energy, construction and climate installation services in Germany. My work connects project planning, resource and capacity planning, stakeholder communication and delivery.\n\nFrom scaling installation crews and building B2B partnerships to coordinating construction delivery and 200+ private orders, I bring an ownership mindset to the full project lifecycle.\n\nI now bring that experience into digital product teams and AI-enabled workflows, supported by completed IT Project Management training and practical work with ChatGPT, Google Sheets and Gmail.",
  "tags": [
    "Project Management",
    "AI Automation",
    "Operations",
    "International Clients"
  ],
  "trajectory": [
    "Project coordination",
    "Operations",
    "Entrepreneurship",
    "Automation",
    "IT Project Management"
  ],
  "headline": "Project Manager | Operations & Delivery | AI-enabled Workflows",
  "stats": [
    {
      "value": "1 → 5 crews",
      "label": "Scaled installation operations from 1 test crew to 5 crews (~10 installers)"
    },
    {
      "value": "3 B2B partners",
      "label": "Secured cooperation with 3 German solar companies after a successful test period"
    },
    {
      "value": "~€1.5M",
      "label": "Construction project delivery coordinated with 2 junior PMs, 4 crews (~20 workers) and a technical foreman"
    },
    {
      "value": "200+ orders",
      "label": "Private installation orders coordinated across 3 German regions"
    }
  ]
};
export const contact = {
  "email": "rosokha.denys@gmail.com",
  "linkedin": "https://www.linkedin.com/in/denys-rosokha-pm/",
  "phone": "+49 160 95470041",
  "cv": "/Denys-Rosokha-CV.pdf",
  "location": "Frankfurt am Main, Germany",
  "availability": "Open to Project Manager roles in digital product and AI-driven teams in Frankfurt / Rhein-Main and remote."
};
export const capabilities = [
  {
    "title": "Project Delivery",
    "summary": "Plan work, coordinate execution",
    "detail": "Plan work, coordinate execution, track progress and resolve blockers across multiple stakeholders."
  },
  {
    "title": "Team Leadership",
    "summary": "Coordinate teams, clarify responsibilities",
    "detail": "Coordinate teams, clarify responsibilities and maintain the communication needed to keep delivery moving."
  },
  {
    "title": "Business Operations",
    "summary": "Build repeatable processes",
    "detail": "Build repeatable processes across suppliers, subcontractors, scheduling, documentation and quality control."
  },
  {
    "title": "AI Automation",
    "summary": "Design practical AI-supported workflows",
    "detail": "Design practical AI-supported workflows that connect business rules, structured data, operational tools and human review."
  }
];
export const experience: Experience[] = [
  {
    "id": "experience-1",
    "period": "02/2026 — Present",
    "company": "Ryntovt UG",
    "position": "Founder | Operations & Project Management",
    "description": "Founded and run a B2C/B2B climate & HVAC installation business in Germany, owning the end-to-end delivery flow.",
    "tags": [
      "Business Operations",
      "Project Coordination",
      "Process Automation"
    ],
    "overview": "Founded and run a B2C/B2B climate & HVAC installation business in Germany; own the end-to-end flow from lead intake and proposal to scheduling, delivery, documentation and customer handover.",
    "scope": [
      "B2C and B2B customer projects across Germany",
      "Network of 3 independent installation crews in 3 German regions",
      "More than 200 private installation orders",
      "Coordination of suppliers, subcontractors, customers and project documentation"
    ],
    "responsibilities": [
      "Founded and run a B2C/B2B climate & HVAC installation business in Germany; own the end-to-end flow from lead intake and proposal to scheduling, delivery, documentation and customer handover.",
      "Built and manage a distributed network of 3 independent installation crews across 3 German regions; coordinated 200+ private installation orders.",
      "Manage suppliers and subcontractors: capacity planning, scheduling, dependencies and quality of delivery.",
      "Designed and implemented a semi-automated lead-to-proposal workflow with ChatGPT, Google Sheets and Gmail."
    ],
    "impact": [
      "Built a distributed network of 3 independent installation crews across 3 German regions.",
      "Coordinated 200+ private installation orders.",
      "Reduced repetitive proposal preparation and enabled faster sales follow-up."
    ],
    "tools": [
      "ChatGPT",
      "Google Sheets",
      "Gmail",
      "Process Design",
      "Supplier Coordination",
      "Subcontractor Management",
      "Project Scheduling",
      "Quality Control"
    ],
    "location": "Frankfurt am Main",
    "projectLink": "#automation"
  },
  {
    "id": "experience-2",
    "period": "08/2025 — 02/2026",
    "company": "Smartbau Technologie GmbH",
    "position": "Project Manager",
    "description": "Coordinated construction and data-centre project delivery with 2 junior PMs, 4 crews (~20 site workers) and a technical foreman.",
    "tags": [
      "Project Delivery",
      "Team Coordination",
      "Stakeholders",
      "Reporting"
    ],
    "overview": "Drove delivery of a construction project with an overall budget of ~€1.5M, from planning and site preparation through progress tracking and handover.",
    "scope": [
      "Construction project with an overall budget of ~€1.5M",
      "2 junior Project Managers",
      "4 crews (~20 site workers) and a technical foreman",
      "Coordination with planners, suppliers and external workstreams"
    ],
    "responsibilities": [
      "Coordinated project delivery together with 2 junior Project Managers, 4 crews (~20 site workers) and a technical foreman in complex construction and data-centre environments.",
      "Drove delivery of a construction project with an overall budget of ~€1.5M, from planning and site preparation through progress tracking and handover.",
      "Single point of contact for the client: communication, deliveries, work permits, change requests and progress reporting; aligned planners, suppliers and external workstreams.",
      "Ran daily operational planning and resource allocation; supported estimates, man-hour tracking and documentation of additional project costs (change management)."
    ],
    "impact": [
      "Recovered a 4-day schedule delay caused by a technical project conflict by coordinating planners, client representatives, another contractor and additional site resources.",
      "Developed and executed a recovery plan that added 4 workers for 4 days, allowing the project team to regain the lost schedule.",
      "Resolved a critical site liability dispute by consolidating project documents, contract terms, photographs and written authorization; claims against Smartbau were withdrawn and work resumed.",
      "Created a structured internal communication setup using role-specific WhatsApp groups for operational coordination and announcements."
    ],
    "tools": [
      "Project Planning",
      "Progress Reporting",
      "Change Management",
      "Work Permits",
      "Resource Planning",
      "Supplier Coordination",
      "Site Documentation",
      "Stakeholder Communication",
      "Excel",
      "General Contractor Project Software"
    ],
    "location": "Frankfurt am Main"
  },
  {
    "id": "experience-3",
    "period": "03/2024 — 07/2025",
    "company": "Renewable Energy Business",
    "position": "Founding Operations Partner | Project Coordination",
    "description": "Supported the launch and growth of solar-system and heat-pump installation operations, scaling from 1 test crew to 5 crews (~10 installers).",
    "tags": [
      "Operations",
      "Client Communication",
      "Scheduling",
      "Team Coordination"
    ],
    "overview": "Part of the founding team: supported the launch and operational growth of an installation business for private and commercial customers.",
    "scope": [
      "Scaled from 1 test crew to 5 crews (~10 installers)",
      "3 German solar company partners",
      "Private and commercial solar-system and heat-pump installation projects",
      "Commercial solar projects above 1 MW"
    ],
    "responsibilities": [
      "Part of the founding team: supported the launch and operational growth of an installation business for private and commercial customers.",
      "Owned project intake, installation scheduling, crew capacity and customer handovers, scaling operations from 1 test crew to 5 crews (~10 installers).",
      "Managed B2B communication and secured cooperation with 3 German solar companies after a successful test period; supported commercial solar projects above 1 MW."
    ],
    "impact": [
      "Secured cooperation with 3 German solar companies after a successful initial test period.",
      "Helped scale installation capacity to 5 crews / 10 installers.",
      "Supported delivery of commercial solar projects, including installations above 1 MW."
    ],
    "tools": [
      "B2B Communication",
      "Capacity Planning",
      "Scheduling",
      "Client Negotiation",
      "Installation Coordination",
      "Project Handover",
      "Team Coordination"
    ],
    "location": "Germany"
  }
];
export const projects: Project[] = [
  {
    "id": "automation",
    "category": "AI & AUTOMATION",
    "title": "AI Lead-to-Proposal Automation",
    "summary": "Designed a semi-automated lead-to-proposal workflow that reduced repetitive work and enabled faster proposal preparation and sales follow-up.",
    "tags": [
      "ChatGPT",
      "Google Sheets",
      "Gmail",
      "Workflow design",
      "Human-in-the-loop"
    ],
    "challenge": "Manual proposal preparation took time away from sales and slowed down follow-up with new leads.",
    "role": "Designed the end-to-end workflow, defined the business logic, structured the knowledge base and connected the tools required for lead processing, proposal preparation and sales handoff.",
    "solution": "Designed a semi-automated workflow — leads structured in Google Sheets, proposal drafts generated with ChatGPT, follow-ups sent via Gmail, with human approval before anything goes to the client.",
    "results": "Less repetitive work, faster proposal preparation and sales follow-up.",
    "technologies": [
      "ChatGPT",
      "Google Sheets",
      "Gmail",
      "Workflow design",
      "Human-in-the-loop"
    ]
  },
  {
    "id": "delivery",
    "category": "PROJECT DELIVERY",
    "title": "Data Center Schedule Recovery",
    "summary": "Coordinated cross-functional stakeholders and additional site resources to recover a four-day project delay caused by a technical design conflict.",
    "tags": [
      "Project Planning",
      "Change Management",
      "Resource Planning"
    ],
    "challenge": "A technical conflict between planned ventilation routes and the fire-suppression system blocked further installation work.\n\nTwo installation crews were unable to continue for four days.\n\nThe general contractor did not extend the project deadline, which meant the lost time had to be recovered within the existing schedule.",
    "role": "Coordinated the technical and operational response between the installation team, planner, client management and the fire-suppression contractor.",
    "solution": "Worked with the technical foreman, planner, chief client manager and the fire-suppression company’s Project Manager to identify and assess alternative solutions.\n\nThree possible alternatives were evaluated and checked by the relevant designers using specialist planning tools.\n\nAfter the revised solution was approved and documented, I proposed a resource-recovery plan:\n\n- add 4 workers\n- deploy them for 4 days\n- coordinate the expanded installation workload\n- obtain the required permissions\n- align the revised execution plan with the technical foreman",
    "results": "The team recovered the full four-day schedule delay within four days and returned the project to the original delivery plan.",
    "technologies": [
      "Project Planning",
      "Stakeholder Coordination",
      "Change Management",
      "Resource Planning",
      "Work Permits",
      "Progress Reporting",
      "General Contractor Project Software"
    ]
  },
  {
    "id": "operations",
    "category": "BUSINESS OPERATIONS",
    "title": "Multi-region Climate Installation Operations",
    "summary": "Built and coordinated a subcontractor-based installation network across three German regions with standardized onboarding, scheduling and quality control.",
    "tags": [
      "Subcontractor Management",
      "Scheduling",
      "Quality Control"
    ],
    "challenge": "Customer projects were distributed across multiple German regions, requiring reliable local installation capacity without building a large internal workforce.\n\nThe operating model needed to support regional scheduling while maintaining consistent documentation and installation quality.",
    "role": "Built and coordinated the subcontractor network, supplier workflow, project scheduling and quality-control process.",
    "solution": "Recruited three independent installation crews operating in three German regions.\n\nBefore cooperation, I reviewed:\n\n- business documentation\n- insurance\n- previous experience\n- portfolio\n- availability of professional installation equipment\n\nEach region was launched separately.\n\nInitial test projects were completed in my region with my direct involvement before longer-term cooperation was established.\n\nA standardized delivery process was introduced for every installation:\n\nCustomer order\n→ regional crew assignment\n→ appointment scheduling\n→ equipment / material coordination\n→ installation\n→ photo report\n→ signed customer acceptance",
    "results": "Built an installation network covering three German regions.\n\nCoordinated more than 200 private installation orders.\n\nIntroduced a standardized quality and acceptance process based on photo documentation and signed installation acceptance.",
    "technologies": [
      "Subcontractor Management",
      "Project Scheduling",
      "Supplier Coordination",
      "Quality Control",
      "Customer Communication",
      "Documentation",
      "Regional Capacity Planning"
    ]
  }
];
// Requested demonstration sequence. Technical behavior awaits verified project content.
export const workflowSteps: WorkflowStep[] = ['Lead', 'Intake Form', 'Google Sheets', 'ChatGPT', 'Proposal Calculation', 'PDF Proposal', 'Human Approval', 'Gmail', 'Sales Follow-up'].map(title => ({ id: title.toLowerCase().replaceAll(' ', '-'), title, description: title === 'ChatGPT' ? 'Equipment and configuration recommendation using controlled source material.' : title === 'Human Approval' ? 'Human approval remained mandatory before any proposal was sent to the customer.' : `[Add a short explanation of ${title}.]`, input: title === 'ChatGPT' ? 'Price lists, compatibility tables, installation tariffs, configuration rules and margin rules.' : '[Define the actual input.]', process: title === 'ChatGPT' ? 'Equipment and configuration recommendation before proposal calculation.' : title === 'Human Approval' ? 'Mandatory human approval before sending a proposal to the customer.' : '[Describe the verified processing behavior.]', output: title === 'ChatGPT' ? 'Equipment and configuration recommendation.' : '[Define the actual output.]', role: title === 'Human Approval' ? 'Human-in-the-loop approval before Gmail and sales follow-up.' : '[Explain this stage’s role in the workflow.]' }));
export const skills = [
  {
    "title": "Project Management",
    "items": [
      "Project Planning",
      "Scheduling",
      "Resource & Capacity Planning",
      "Stakeholder Management",
      "Risk Mitigation",
      "Change Management",
      "Budget Tracking",
      "Progress Reporting"
    ]
  },
  {
    "title": "Delivery & Ways of Working",
    "items": [
      "Agile / Scrum Fundamentals",
      "SDLC",
      "Requirements",
      "Vendor & Partner Management",
      "Process Improvement"
    ]
  },
  {
    "title": "Tools",
    "items": [
      "Jira",
      "Google Sheets",
      "Excel",
      "Notion",
      "Trello",
      "Miro",
      "Figma",
      "GitHub",
      "Gmail"
    ]
  },
  {
    "title": "AI & Automation",
    "items": [
      "ChatGPT (incl. Projects)",
      "AI Workflow Design",
      "Prompt-based Automation of Business Processes",
      "Human-in-the-loop Approval Steps"
    ]
  }
];
export interface LearningEntry {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  period: string;
  chapter: string;
  organization: string;
  summary: string;
  tags: string[];
  description?: string;
  location?: string;
  status?: string;
}
export const education: LearningEntry[] = [
  {
    "id": "education-management",
    "title": "Bachelor’s Degree in Management",
    "subtitle": "Polish-Ukrainian Joint Programme",
    "organization": "Interregional Academy of Personnel Management (IAPM) & Wyższa Szkoła Nauk Społecznych i Bezpieczeństwa w Łodzi",
    "location": "Kharkiv, Ukraine / Łódź, Poland",
    "date": "Starting October 2026",
    "period": "Starting 10/2026",
    "chapter": "NEXT CHAPTER",
    "status": "Enrolled — starting October 2026",
    "summary": "Joint Management programme delivered in cooperation between Ukrainian and Polish higher-education institutions.",
    "tags": [
      "Management",
      "International Programme",
      "Poland · Ukraine"
    ],
    "description": "Polish-Ukrainian joint Bachelor’s programme in Management delivered in cooperation between IAPM and Wyższa Szkoła Nauk Społecznych i Bezpieczeństwa w Łodzi."
  },
  {
    "id": "education-pm",
    "title": "IT Project Management Course",
    "organization": "PM_ON",
    "date": "Completed September 2026",
    "period": "09/2026",
    "chapter": "COMPLETED",
    "status": "Completed September 2026",
    "summary": "Practical IT Project Management training focused on digital project delivery, Jira and modern PM workflows.",
    "tags": [
      "IT Project Management",
      "Jira",
      "Agile / Scrum",
      "SDLC"
    ],
    "description": "Project lifecycle, SDLC, Agile & Scrum, requirements, estimation, budgeting, risk management, stakeholder management, Jira, project reporting."
  },
  {
    "id": "education-goethe",
    "title": "AWP Programme for International Students",
    "organization": "Goethe-Universität Frankfurt am Main",
    "date": "October 2023 — January 2025",
    "period": "10/2023 — 01/2025",
    "chapter": "COMPLETED",
    "summary": "University programme including German language studies to C1 level.",
    "tags": [
      "German C1",
      "International Programme",
      "Frankfurt"
    ],
    "description": "German language studies to C1 level.\nUniversity-issued Zeugnis: “mit gutem Erfolg”."
  },
  {
    "id": "education-secondary",
    "title": "Secondary Education",
    "organization": "University Lyceum of V. N. Karazin Kharkiv National University",
    "date": "Completed May 2023",
    "period": "Completed 05/2023",
    "chapter": "FOUNDATION",
    "location": "Kharkiv, Ukraine",
    "summary": "Secondary education completed at the University Lyceum of V. N. Karazin Kharkiv National University.",
    "tags": [
      "Secondary Education",
      "Kharkiv"
    ]
  }
];
export const languages = [
  "German — C1",
  "English — B2, professional working proficiency",
  "Ukrainian — native",
  "Russian — native"
];
export const portfolio = { profile, contact, capabilities, experience, projects, workflowSteps, skills, education, languages };

// Presentation labels use only the supplied case-study facts; original narratives remain intact.
export const caseStudyPresentation: Record<string, {
  outcomes?: string[];
  recoverySteps?: string[];
  beforeLabel?: string;
  afterLabel?: string;
}> = {
  automation: { beforeLabel: 'Before automation', afterLabel: 'Observed after implementation' },
  delivery: {
    outcomes: ['4-day delay', 'recovered in 4 days'],
    recoverySteps: ['+4 workers', '4 days', 'Expanded installation workload', 'Required permissions', 'Revised execution alignment'],
  },
  operations: { outcomes: ['3 German regions', '200+ private installation orders', 'Standardized photo-report + acceptance process'] },
};
