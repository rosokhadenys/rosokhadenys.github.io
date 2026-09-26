// User-verified professional content. Brackets mark unresolved, non-public details.
export interface Experience {
  id: string; company: string; position: string; period: string; description: string;
  overview?: string; scope?: string | string[]; responsibilities?: string[]; impact?: string | string[]; tools?: string | string[]; tags?: string[];
}
export interface Project {
  id: string; category: string; title: string; summary: string; tags: string[];
  challenge: string; role: string; solution: string; results: string; technologies: string | string[];
}
export interface WorkflowStep { id: string; title: string; description: string; input: string; process: string; output: string; role: string }
export const profile = {
  name: 'Denys Rosokha', initials: 'PM', role: 'Project Manager', direction: 'transitioning into IT',
  introduction: "Project manager with hands-on experience coordinating teams, stakeholders and operations — now bringing that delivery mindset into digital products and AI-enabled workflows.",
  overview: "My background is in project delivery, business operations and entrepreneurship.\n\nAcross renewable energy, construction and my own service business, I have coordinated teams, clients, suppliers and subcontractors, managed changing project conditions and built processes that helped work move forward.\n\nWhat consistently interested me most was not the industry itself, but the system behind the work: planning, communication, problem-solving, process improvement and making complex operations easier to manage.\n\nDesigning an AI-supported lead-to-proposal workflow made the next direction clear. I now want to apply that experience in technology teams and continue developing as an IT Project Manager.",
  tags: ['Project Management', 'AI Automation', 'Operations', 'International Clients'],
  trajectory: ['Project coordination', 'Operations', 'Entrepreneurship', 'Automation', 'IT Project Management'],
};
export const contact = { email: 'rosokha.denys@gmail.com', linkedin: 'https://www.linkedin.com/in/denys-rosokha-pm/', phone: '+49 160 95470041', cv: null as string | null, location: 'Frankfurt am Main, Germany', availability: '[Add availability]' };
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
    "position": "Founder · Operations & Project Management",
    "description": "Managing customer projects, subcontractor coordination, supplier workflows and process automation across HVAC and climate installation services.",
    "tags": [
      "Business Operations",
      "Project Coordination",
      "Process Automation"
    ],
    "overview": "Founded and operate a small German service business focused on climate equipment, installation projects and subcontractor-based project delivery.",
    "scope": [
      "B2C and B2B customer projects across Germany",
      "Network of 3 independent installation crews in 3 German regions",
      "More than 200 private installation orders",
      "Coordination of suppliers, subcontractors, customers and project documentation"
    ],
    "responsibilities": [
      "Managed incoming customer and B2B project requests from initial assessment through quotation, scheduling and delivery.",
      "Coordinated equipment and material suppliers, installation partners and customer appointments.",
      "Recruited and onboarded independent installation crews, including document, insurance, experience and equipment checks.",
      "Introduced standardized quality controls using photo reports and signed acceptance documentation.",
      "Personally supported significant B2B projects on site, coordinating subcontractors, materials, working hours and communication with client managers.",
      "Designed a semi-automated lead-to-proposal workflow using ChatGPT, Google Sheets, Gmail integrations and structured business knowledge."
    ],
    "impact": [
      "Built a subcontractor network covering 3 German regions.",
      "Coordinated more than 200 private installation orders.",
      "Introduced a structured quality and acceptance process for every installation.",
      "Developed an AI-supported proposal workflow that reduced manual preparation work and supported at least a doubling of monthly sales contracts over approximately 2.5 months."
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
    ]
  },
  {
    "id": "experience-2",
    "period": "08/2025 — 02/2026",
    "company": "Smartbau Technologie GmbH",
    "position": "Project Management · Construction & Data Center Projects",
    "description": "Coordinated international project delivery, site operations, reporting and cross-functional teams in complex construction environments.",
    "tags": [
      "Project Delivery",
      "Team Coordination",
      "Stakeholders",
      "Reporting"
    ],
    "overview": "Managed operational project delivery for construction and data-center-related projects, coordinating client communication, planning, site teams, suppliers and project documentation.",
    "scope": [
      "2 junior Project Managers",
      "4 crews / approximately 20 site workers",
      "1 technical foreman",
      "International client communication in English",
      "Coordination with planners, suppliers, general contractor teams and other project workstreams"
    ],
    "responsibilities": [
      "Coordinated projects from initial client discussions and preliminary calculations through site execution and handover.",
      "Organized daily operational planning together with junior PMs and the technical foreman.",
      "Coordinated deliveries, materials, tools, work permits and site access.",
      "Managed client communication, project changes, issue reporting and progress documentation.",
      "Maintained daily progress reporting using measurements, photographs and completed-volume updates.",
      "Coordinated schedule dependencies with other project teams and external technical stakeholders.",
      "Supported financial decision-making through estimates, weekly man-hour reporting, delivery documentation and controlled approval of additional costs."
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
    ]
  },
  {
    "id": "experience-3",
    "period": "03/2024 — 07/2025",
    "company": "Renewable Energy Business",
    "position": "Founding Operations Partner · Project Coordination",
    "description": "Coordinated installation capacity, B2B partnerships and customer projects across solar and heat-pump operations.",
    "tags": [
      "Operations",
      "Client Communication",
      "Scheduling",
      "Team Coordination"
    ],
    "overview": "Supported the launch and operational growth of a renewable-energy installation business focused on solar systems and heat pumps for private and commercial customers.",
    "scope": [
      "Up to 5 two-person installation crews",
      "Approximately 10 installers at peak capacity",
      "Private and commercial customer projects",
      "Solar projects including commercial installations above 1 MW"
    ],
    "responsibilities": [
      "Developed relationships with German companies providing installation work.",
      "Managed B2B communication, project intake and installation planning.",
      "Coordinated crew capacity and project scheduling across the region.",
      "Supported customer communication and project handover.",
      "Helped scale operations from a single test crew to 5 active installation crews.",
      "Led client negotiations and supported project kick-off and final handover for two significant commercial solar projects, while technical execution was led by the operating partner."
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
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "automation",
    "category": "AI & AUTOMATION",
    "title": "AI Lead-to-Proposal Automation",
    "summary": "Designed a semi-automated workflow that transformed incoming customer leads into structured equipment recommendations and ready-to-review commercial proposals.",
    "tags": [
      "ChatGPT",
      "Google Sheets",
      "Gmail",
      "Workflow Design"
    ],
    "challenge": "Preparing customer proposals required significant manual work. Equipment had to be selected against customer requirements, compatibility checked, pricing calculated and a commercial proposal prepared before the sales conversation could continue.\n\nBefore the workflow was introduced, approximately 60% of the salesperson’s working time was spent on equipment selection, calculations and manual proposal preparation.",
    "role": "Designed the end-to-end workflow, defined the business logic, structured the knowledge base and connected the tools required for lead processing, proposal preparation and sales handoff.",
    "solution": "Built a semi-automated lead-to-proposal process using ChatGPT Projects, Google Sheets, Gmail integrations, structured business knowledge and branded PDF proposal templates.\n\nWorkflow:\n\nCustomer lead\n→ intake form\n→ Google Sheets\n→ ChatGPT\n→ equipment and configuration recommendation\n→ proposal calculation\n→ branded PDF proposal\n→ human approval\n→ Gmail\n→ sales follow-up\n\nThe AI used controlled source material including price lists, compatibility tables, installation tariffs, configuration rules and margin rules.\n\nA human approval step remained mandatory before any proposal was sent to the customer.",
    "results": "Reduced a significant share of repetitive proposal-preparation work and allowed the salesperson to focus more time on customer communication.\n\nDuring approximately 2.5 months after implementation, monthly sales contracts increased by at least 2×.",
    "technologies": [
      "ChatGPT Projects",
      "Google Sheets",
      "Gmail",
      "AI Instructions",
      "Knowledge Base Design",
      "Workflow Design",
      "Process Automation",
      "PDF Proposal Templates",
      "Human-in-the-loop Approval"
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
  { title: 'Project Management', items: ['Project Planning', 'Stakeholder Coordination', 'Team Coordination', 'Resource Planning', 'Project Scheduling', 'Change Management', 'Progress Reporting', 'Process Improvement', 'Client Communication', 'Supplier & Subcontractor Coordination'] },
  { title: 'Tools', items: ['Jira', 'Google Sheets', 'Microsoft Excel', 'Miro', 'Figma', 'Notion', 'Trello', 'GitHub'] },
  { title: 'AI & Automation', items: ['ChatGPT Projects', 'AI Workflow Design', 'Business Process Automation', 'Knowledge Base Design', 'AI Instructions', 'Google Sheets Integrations', 'Gmail Integrations', 'Human-in-the-loop Workflows', 'Process Optimization'] },
];
export interface LearningEntry {
  title: string;
  organization: string;
  description?: string;
  location?: string;
  status?: string;
}
export const education: LearningEntry[] = [
  { title: 'AWP Programme for International Students', organization: 'Goethe-Universität Frankfurt am Main', description: 'German language studies to C1 level.\nUniversity-issued Zeugnis: “mit gutem Erfolg”.' },
  { title: 'Secondary Education', organization: 'University Lyceum of V. N. Karazin Kharkiv National University', location: 'Kharkiv, Ukraine' },
];
export const certifications: LearningEntry[] = [
  { title: 'IT Project Management Course', organization: 'PM_ON', status: 'In progress', description: 'Focused training in IT Project Management covering project lifecycle, SDLC, Agile and Scrum, stakeholder management, estimation, budgeting, risk management, Jira, project reporting, requirements, team coordination and digital product delivery.' },
];
export const languages = ['German — C1', 'English — B2', 'Ukrainian — Native', 'Russian — Native'];
export const portfolio = { profile, contact, capabilities, experience, projects, workflowSteps, skills, education, certifications, languages };

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
