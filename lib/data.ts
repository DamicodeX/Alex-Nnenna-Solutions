export const siteConfig = {
  name: "HR  Portal",
  shortName: "HR Portal",
  founder: "People Operations Office",
  title: "HR Self-Service & Workplace Hub",
  description:
    "Your central hub for onboarding, policies, directory search, workplace news, and employee self-service forms.",
  links: {
    linkedin: "https://www.linkedin.com/in/dr-alexander-attah-aa7b6b29a/",
  },
};

export type QuickLink = {
  title: string;
  description: string;
  // href: string;
  tag: string;
};

export type SpotlightCard = {
  title: string;
  summary: string;
  owner: string;
  href: string;
  status: "Live" | "In Review" | "Upcoming";
};

export type Announcement = {
  title: string;
  body: string;
  date: string;
  priority: "high" | "normal";
  category: string;
  image:string;
};

export type HighlightedResource = {
  title: string;
  description: string;
  href: string;
  type: "Guide" | "Policy" | "Template" | "Learning";
};

export type MetricSnapshot = {
  label: string;
  value: string;
  trend: string;
  chartValues: number[];
};

export type OnboardingChecklistItem = {
  id: string;
  title: string;
  owner: string;
  due: string;
  status: "Not started" | "In progress" | "Done";
};

export type OnboardingDocument = {
  title: string;
  audience: string;
  fileType: string;
  href: string;
};

export type OrgChartRole = {
  id: string;
  name: string;
  title: string;
  reportsTo?: string;
};

export type OnboardingFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type PolicyDocument = {
  id: string;
  title: string;
  category: "Leave" | "Benefits" | "Security" | "Workplace" | "Payroll";
  audience: "All Staff" | "Managers" | "New Hires";
  updatedAt: string;
  size: string;
  href: string;
};

export type EmployeeProfile = {
  id: string;
  name: string;
  title: string;
  department: "People Ops" | "Engineering" | "Finance" | "Operations" | "Marketing";
  location: string;
  email: string;
  extension: string;
};

export type PortalForm = {
  id: string;
  title: string;
  description: string;
  category: "Time Off" | "Finance" | "Performance" | "People Operations";
  eta: string;
  href: string;
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  tag: "Announcement" | "Culture" | "Policy Update";
  featured?: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  category: "Training" | "Social" | "Compliance" | "All Hands";
};

export const quickLinks: QuickLink[] = [
  {
    title: "Request Time Off",
    description:
      "Submit annual, sick, and emergency leave requests and track approval status.",
    tag: "Self Service",
  },
  {
    title: "Update Personal Information",
    description:
      "Update your address, bank details, emergency contacts, and employee records.",
    tag: "Essential",
  },
  {
    title: "Benefits Enrollment",
    description:
      "Compare plans, enroll dependents, and review deadlines for benefits selection.",
    tag: "Popular",
  },
  {
    title: "New Hire Guide",
    description:
      "Access onboarding checklists, orientation docs, and first-30-day success steps.",
    tag: "Self-service",
  },
  {
    title: "Payroll & Compensation",
    description:
      "View pay schedules, compensation updates, and reimbursement processing timelines.",
    tag: "Self-service",
  },
  {
    title: "Job Openings",
    description:
      "Explore internal opportunities and refer qualified candidates across teams.",
    tag: "Self-service",
  },
  {
    title: "Training & Certification",
    description:
      "Find required learning paths, certification programs, and role-based courses.",
    tag: "Self-service",
  },
];

export const spotlightCards: SpotlightCard[] = [
  {
    title: "Benefits Enrollment Window",
    summary: "Annual enrollment closes in 9 days. Review health and retirement options.",
    owner: "People Ops",
    href: "/policies-benefits",
    status: "Live",
  },
  {
    title: "Manager Coaching Sprint",
    summary: "Four-week coaching sprint for team leads starts next Monday.",
    owner: "Learning & Development",
    href: "/events",
    status: "In Review",
  },
  {
    title: "Q3 Performance Cycle",
    summary: "Goal updates and check-ins are opening soon for all departments.",
    owner: "Talent Management",
    href: "/forms",
    status: "Upcoming",
  },
];

export const announcements: Announcement[] = [
  {
    title:"2026 Wellness Program kickoff",
    body:"Get ready for new incentives, onsite screening and fitness reimbursements",
    date: "2026",
    priority:"high",
    category:"Culture",
    image:"/Wellness_Program_Kickoff.png",
  },
  {
    title: "Policy Update",
    body: "Hybrid schedule policy now includes expanded home-office stipend eligibility.",
    date: "2026",
    priority: "high",
    category: "Policy",
    image:"/Policy_change.png",
  },
  {
    title: "Learning Spotlight",
    body: "Our Leadership Essentials course is available in LMS .",
    date: "2026",
    priority: "normal",
    category: "Learning",
    image:"/Leadership_program.png",
  },
];

export const highlightedResources: HighlightedResource[] = [
  {
    title: "First 30 Days Guide",
    description: "A practical walkthrough for role ramp-up, team rituals, and success metrics.",
    href: "/onboarding",
    type: "Guide",
  },
  {
    title: "Parental Leave Policy",
    description: "Eligibility, request flow, and support resources for growing families.",
    href: "/policies-benefits",
    type: "Policy",
  },
  {
    title: "1:1 Meeting Template",
    description: "Structured template for weekly manager-employee growth conversations.",
    href: "/forms",
    type: "Template",
  },
  {
    title: "Compliance Learning Path",
    description: "Required and recommended learning modules by role and region.",
    href: "/onboarding",
    type: "Learning",
  },
];

export const metricSnapshots: MetricSnapshot[] = [
  {
    label: "Onboarding Completion",
    value: "84%",
    trend: "+6% vs last month",
    chartValues: [32, 41, 47, 54, 63, 71, 84],
  },
  {
    label: "Forms Closed < 48h",
    value: "91%",
    trend: "+3% service level",
    chartValues: [70, 74, 78, 84, 86, 89, 91],
  },
  {
    label: "Policy Reads This Week",
    value: "1,248",
    trend: "+18% engagement",
    chartValues: [620, 740, 790, 860, 940, 1080, 1248],
  },
];

export const nextTownHall = {
  title: "People & Culture Town Hall",
  startsAt: "2026-05-15T13:00:00.000Z",
  location: "Main Auditorium + Stream",
};

export const onboardingChecklist: OnboardingChecklistItem[] = [
  {
    id: "onb-1",
    title: "Complete profile and emergency contact details",
    owner: "Employee",
    due: "Day 1",
    status: "In progress",
  },
  {
    id: "onb-2",
    title: "Review workplace code of conduct",
    owner: "Employee",
    due: "Day 2",
    status: "Not started",
  },
  {
    id: "onb-3",
    title: "Attend HR orientation and systems walkthrough",
    owner: "People Ops",
    due: "Day 3",
    status: "Not started",
  },
  {
    id: "onb-4",
    title: "Meet your manager for role goals alignment",
    owner: "Manager",
    due: "Day 4",
    status: "Not started",
  },
  {
    id: "onb-5",
    title: "Complete security and compliance training",
    owner: "Employee",
    due: "Day 5",
    status: "Not started",
  },
];

export const onboardingDocuments: OnboardingDocument[] = [
  {
    title: "Employee Handbook",
    audience: "All Staff",
    fileType: "PDF",
    href: "/forms",
  },
  {
    title: "IT Access Request Guide",
    audience: "New Hires",
    fileType: "DOCX",
    href: "/forms",
  },
  {
    title: "Benefits Enrollment Checklist",
    audience: "New Hires",
    fileType: "PDF",
    href: "/policies-benefits",
  },
  {
    title: "Manager Welcome Pack",
    audience: "Managers",
    fileType: "PDF",
    href: "/onboarding",
  },
];

export const complianceTrainingLinks = [
  { title: "Workplace Safety", duration: "20 min", href: "/onboarding" },
  { title: "Data Privacy Essentials", duration: "30 min", href: "/onboarding" },
  { title: "Anti-Harassment Policy", duration: "25 min", href: "/policies-benefits" },
];

export const onboardingOrgChart: OrgChartRole[] = [
  {
    id: "org-1",
    name: "Mina Adeyemi",
    title: "VP, People Operations",
  },
  {
    id: "org-2",
    name: "Kelechi Obi",
    title: "Onboarding Manager",
    reportsTo: "org-1",
  },
  {
    id: "org-3",
    name: "Tunde Salami",
    title: "IT Support Lead",
    reportsTo: "org-2",
  },
  {
    id: "org-4",
    name: "Lola Eze",
    title: "HR Business Partner",
    reportsTo: "org-2",
  },
  {
    id: "org-5",
    name: "Adaeze Okoro",
    title: "Learning Coordinator",
    reportsTo: "org-2",
  },
];

export const onboardingFaqs: OnboardingFaqItem[] = [
  {
    id: "faq-1",
    question: "When should I complete my first-week checklist?",
    answer:
      "Complete all day-specific items by the end of Day 5. If you have a blocker, notify your manager and People Ops so timelines can be adjusted.",
  },
  {
    id: "faq-2",
    question: "Who do I contact if I cannot access company systems?",
    answer:
      "Contact the IT Support Lead listed in the org chart card and include your department, device type, and the access issue in your message.",
  },
  {
    id: "faq-3",
    question: "Are all compliance trainings mandatory?",
    answer:
      "Yes. Mandatory compliance training must be completed within your first week unless your manager and People Ops provide a documented extension.",
  },
  {
    id: "faq-4",
    question: "Where can I find onboarding policies and forms later?",
    answer:
      "You can return to this page at any time, and you can also use the Forms and Policies sections from the main navigation for quick access.",
  },
];

export const policyDocuments: PolicyDocument[] = [
  {
    id: "pol-1",
    title: "Annual Leave and Time-Off Policy",
    category: "Leave",
    audience: "All Staff",
    updatedAt: "2026-03-12",
    size: "248 KB",
    href: "/policies-benefits",
  },
  {
    id: "pol-2",
    title: "Health and Dental Benefits Summary",
    category: "Benefits",
    audience: "All Staff",
    updatedAt: "2026-04-01",
    size: "312 KB",
    href: "/policies-benefits",
  },
  {
    id: "pol-3",
    title: "Information Security and Device Use",
    category: "Security",
    audience: "All Staff",
    updatedAt: "2026-02-20",
    size: "410 KB",
    href: "/policies-benefits",
  },
  {
    id: "pol-4",
    title: "Manager Performance Calibration Guide",
    category: "Workplace",
    audience: "Managers",
    updatedAt: "2026-01-30",
    size: "196 KB",
    href: "/policies-benefits",
  },
  {
    id: "pol-5",
    title: "Payroll and Reimbursement Schedule",
    category: "Payroll",
    audience: "All Staff",
    updatedAt: "2026-04-10",
    size: "154 KB",
    href: "/policies-benefits",
  },
  {
    id: "pol-6",
    title: "New Hire Benefits Primer",
    category: "Benefits",
    audience: "New Hires",
    updatedAt: "2026-03-05",
    size: "205 KB",
    href: "/policies-benefits",
  },
];

export const employeeProfiles: EmployeeProfile[] = [
  {
    id: "emp-1",
    name: "Amaka Okoye",
    title: "People Operations Manager",
    department: "People Ops",
    location: "Lagos HQ",
    email: "amaka.okoye@alexnnenna-portal.com",
    extension: "203",
  },
  {
    id: "emp-2",
    name: "Daniel Idris",
    title: "Senior Product Engineer",
    department: "Engineering",
    location: "Remote - Abuja",
    email: "daniel.idris@alexnnenna-portal.com",
    extension: "317",
  },
  {
    id: "emp-3",
    name: "Mariam Bello",
    title: "Finance Analyst",
    department: "Finance",
    location: "Lagos HQ",
    email: "mariam.bello@alexnnenna-portal.com",
    extension: "225",
  },
  {
    id: "emp-4",
    name: "Kehinde Adebayo",
    title: "Operations Lead",
    department: "Operations",
    location: "Ibadan Office",
    email: "kehinde.adebayo@alexnnenna-portal.com",
    extension: "412",
  },
  {
    id: "emp-5",
    name: "Lilian Obasi",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote - Enugu",
    email: "lilian.obasi@alexnnenna-portal.com",
    extension: "189",
  },
  {
    id: "emp-6",
    name: "Tayo Adekunle",
    title: "HR Generalist",
    department: "People Ops",
    location: "Lagos HQ",
    email: "tayo.adekunle@alexnnenna-portal.com",
    extension: "207",
  },
];

export const portalForms: PortalForm[] = [
  {
    id: "form-1",
    title: "Leave Request",
    description: "Submit annual, sick, or compassionate leave requests.",
    category: "Time Off",
    eta: "2 business days",
    href: "/forms",
  },
  {
    id: "form-2",
    title: "Expense Reimbursement",
    description: "Claim approved business and travel expenses.",
    category: "Finance",
    eta: "5 business days",
    href: "/forms",
  },
  {
    id: "form-3",
    title: "Quarterly Performance Check-in",
    description: "Capture accomplishments, blockers, and next-quarter goals.",
    category: "Performance",
    eta: "Manager review in 3 days",
    href: "/forms",
  },
  {
    id: "form-4",
    title: "Employee Data Update",
    description: "Update personal details, bank information, or dependents.",
    category: "People Operations",
    eta: "1 business day",
    href: "/forms",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Wellness Program 2026: What to Expect This Quarter",
    summary:
      "A practical walkthrough of screening dates, fitness reimbursement rules, and team challenge timelines.",
    publishedAt: "2026-04-19",
    tag: "Announcement",
    featured: true,
  },
  {
    id: "news-2",
    title: "Hybrid Stipend Policy Update Explained",
    summary:
      "People Ops published examples to clarify who qualifies for the expanded home-office stipend.",
    publishedAt: "2026-04-15",
    tag: "Policy Update",
  },
  {
    id: "news-3",
    title: "Leadership Essentials Cohort Opens in LMS",
    summary:
      "Managers and emerging leaders can now register for the updated learning track and office hours.",
    publishedAt: "2026-04-11",
    tag: "Culture",
  },
  {
    id: "news-4",
    title: "Employee Stories: Building Healthier Work Routines",
    summary:
      "Teams shared practical examples of flexible work habits that improved collaboration and wellbeing.",
    publishedAt: "2026-04-08",
    tag: "Culture",
  },
  {
    id: "news-5",
    title: "Policy Office Hours Scheduled for April",
    summary:
      "Drop-in sessions are now available for staff who want guidance on hybrid schedule and stipend questions.",
    publishedAt: "2026-04-05",
    tag: "Announcement",
  },
];

export const eventItems: EventItem[] = [
  {
    id: "event-1",
    title: "People & Culture Town Hall",
    date: "2026-05-15",
    time: "1:00 PM",
    location: "Main Auditorium",
    host: "People Ops",
    category: "All Hands",
  },
  {
    id: "event-2",
    title: "Wellness Program Kickoff Session",
    date: "2026-05-08",
    time: "10:00 AM",
    location: "Training Room 3 + Stream",
    host: "People Ops",
    category: "Training",
  },
  {
    id: "event-3",
    title: "Hybrid Policy Q&A Clinic",
    date: "2026-05-02",
    time: "2:30 PM",
    location: "Virtual",
    host: "Policy Office",
    category: "Compliance",
  },
  {
    id: "event-4",
    title: "Leadership Essentials Orientation",
    date: "2026-04-29",
    time: "4:00 PM",
    location: "Learning Hub",
    host: "Learning & Development",
    category: "Training",
  },
];

export const portalSupport = {
  email: "peopleops@alexnnenna-portal.com",
  location: "People Operations Desk, Lagos HQ",
  phone: "+44 7790467648",
};

export const heroContent = {
  headline: "Bridging Academic Excellence & Strategic Business Solutions.",
  subheadline:
    "Led by Dr. Alexander Attah, we provide research-driven consulting to strengthen governance, resolve conflict, and develop human capacity across global institutions.",
  primaryCTA: "Schedule a Consultation",
  secondaryCTA: "View Research Portfolio",
};

export const trustBar = {
  heading: "Affiliated Institutions",
  institutions: [
    {
      name: "Mountain Top University",
      abbreviation: "MTU",
      role: "Director, Centre for Advancement & Internationalisation",
    },
    {
      name: "University of Ibadan",
      abbreviation: "UI",
      role: "PhD & MA (Distinction) — Peace and Conflict Studies",
    },
  ],
};

export const aboutContent = {
  title: "The Scholar & The Strategist",
  bio: `I am a Senior Lecturer in Peace, Security and Humanitarian Studies with over a decade of experience in teaching, research, and university leadership in Nigeria's higher education system. I hold a PhD and a Master's degree (Distinction) in Peace and Conflict Studies from the University of Ibadan. Currently serving as Director, Centre for Advancement and Internationalisation at Mountain Top University, I leverage deep academic insights to provide actionable business and institutional solutions.`,
  credentials: [
    {
      label: "Education",
      value: "PhD & MA (Distinction) in Peace and Conflict Studies, UI",
    },
    {
      label: "Current Role",
      value: "Director, Centre for Advancement & Internationalisation, MTU",
    },
    {
      label: "Experience",
      value: "10+ Years in Higher Education & Governance",
    },
  ],
  milestones: [
    {
      year: "2012",
      title: "MA (Distinction), University of Ibadan",
      description:
        "Completed Master's degree in Peace and Conflict Studies with Distinction at Nigeria's premier university.",
    },
    {
      year: "2017",
      title: "PhD, University of Ibadan",
      description:
        "Earned doctorate in Peace and Conflict Studies, advancing research in governance and security.",
    },
    {
      year: "2018",
      title: "Senior Lecturer, Mountain Top University",
      description:
        "Appointed Senior Lecturer in Peace, Security and Humanitarian Studies.",
    },
    {
      year: "2020",
      title: "Director of Internationalisation, MTU",
      description:
        "Named Director, Centre for Advancement and Internationalisation, leading global partnership strategies.",
    },
    {
      year: "2023",
      title: "Founded Alexnnenna Solutions",
      description:
        "Established consulting firm to bridge academic research with institutional and corporate solutions.",
    },
  ],
};

export const services = [
  {
    title: "Human Capacity Development",
    description:
      "Specialized leadership training, executive mentoring, and public sector workshops designed to enhance institutional performance.",
    icon: "Users",
    tags: ["Leadership Training", "Executive Mentoring", "Workshops"],
    details: [
      "Custom leadership development programmes for executives and mid-level managers",
      "Public sector capacity-building workshops aligned with global best practices",
      "Mentoring frameworks that drive measurable institutional performance gains",
      "Team development and organizational culture transformation strategies",
    ],
  },
  {
    title: "Conflict Resolution",
    description:
      "Expert corporate mediation, peacebuilding strategies, and security consulting based on a decade of humanitarian research.",
    icon: "ShieldCheck",
    tags: ["Corporate Mediation", "Peacebuilding", "Security Consulting"],
    details: [
      "Corporate and institutional mediation using evidence-based conflict resolution frameworks",
      "Community peacebuilding and stakeholder engagement strategies",
      "Security risk assessment and mitigation consulting",
      "Training programmes in negotiation, dialogue facilitation, and dispute resolution",
    ],
  },
  {
    title: "Institutional Governance",
    description:
      "Strategic policy research, democratic institution strengthening, and academic partnership development for global visibility.",
    icon: "Building2",
    tags: ["Policy Research", "Partnerships", "Democratic Governance"],
    details: [
      "Policy research and advisory services for government and non-governmental organisations",
      "International academic partnership development and MOU facilitation",
      "Institutional audit and governance framework reviews",
      "Strategic planning for universities and public institutions seeking global accreditation",
    ],
  },
];

export const publications = [
  {
    title:
      "Democratic Governance and Public Sector Reform in Sub-Saharan Africa",
    journal: "African Journal of Political Science and International Relations",
    year: "2023",
    type: "peer-reviewed" as const,
    abstract:
      "This paper examines the intersection of democratic governance models and public sector reform initiatives across Sub-Saharan Africa, proposing a framework for sustainable institutional development.",
  },
  {
    title:
      "Peacebuilding Strategies in Post-Conflict Societies: A Nigerian Perspective",
    journal: "Journal of Peace Research",
    year: "2022",
    type: "peer-reviewed" as const,
    abstract:
      "An analysis of peacebuilding approaches in post-conflict Nigerian communities, highlighting the role of community-driven reconciliation and institutional capacity building.",
  },
  {
    title:
      "Human Capacity Development and Institutional Performance in Nigerian Universities",
    journal: "Higher Education Quarterly",
    year: "2022",
    type: "peer-reviewed" as const,
    abstract:
      "A study of the correlation between strategic human capacity development programmes and measurable improvements in Nigerian university performance metrics.",
  },
  {
    title:
      "Security Sector Governance: Frameworks for Accountability and Transparency",
    journal: "Security Dialogue",
    year: "2021",
    type: "peer-reviewed" as const,
    abstract:
      "Proposing governance frameworks that enhance accountability and transparency within security sector institutions in developing democracies.",
  },
  {
    title:
      "The Role of Higher Education in Conflict Prevention and Resolution",
    journal: "International Journal of Educational Development",
    year: "2020",
    type: "peer-reviewed" as const,
    abstract:
      "An exploration of how higher education institutions can serve as catalysts for conflict prevention through curriculum reform and community engagement.",
  },
];

export const speakingEngagements = [
  {
    title: "Governance and Institutional Resilience in Africa",
    event: "West African Universities Conference",
    year: "2023",
    location: "Accra, Ghana",
  },
  {
    title: "Peace, Security, and Sustainable Development Goals",
    event: "International Peace Research Association Conference",
    year: "2022",
    location: "Belfast, Northern Ireland",
  },
  {
    title: "Human Capital and National Development: The Nigerian Experience",
    event: "Mountain Top University International Conference",
    year: "2022",
    location: "Lagos, Nigeria",
  },
  {
    title: "Mediation and Conflict Resolution in Corporate Environments",
    event: "Lagos Business School Leadership Forum",
    year: "2021",
    location: "Lagos, Nigeria",
  },
];

export const portfolioContent = {
  academicLeadership: [
    "Director, Centre for Advancement and Internationalisation (MTU)",
    "Chairman, University Publicity Committee",
    "Member, Security and Scholarship Committees",
    "International Conference Coordinator",
  ],
  researchPillars: [
    {
      area: "Governance Systems",
      description:
        "Analysis of democratic institutions and public sector development strategies.",
    },
    {
      area: "Conflict Resolution",
      description:
        "Advancing peacebuilding scholarship and corporate mediation frameworks.",
    },
    {
      area: "Leadership Performance",
      description:
        "Benchmarking and enhancing organizational leadership through policy-relevant research.",
    },
  ],
};

export const contactContent = {
  heading: "Let's Strengthen Your Institution",
  subheading:
    "Available for strategic consulting, speaking engagements, and research collaborations.",
  email: "Alexnnennasolutionnigltd@gmail.com",
  phone: "+44 7790467648",
  location: "50 Pawson's RD, Croydon. Surrey, England",
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dr-alexander-attah-aa7b6b29a/",
    },
  ],
};

export const aboutContent2 = {
  company: {
    name: "ALEXNNENNA SOLUTIONS NIG. LTD",
    tagline: "Strategic Excellence in Governance and Institutional Development",
    mission: "To provide research-driven, actionable solutions that strengthen institutional frameworks, foster democratic stability, and enhance human capacity across the public and private sectors.",
    vision: "To be a global leader in policy-relevant consulting, bridging the gap between high-level academic research and sustainable organizational growth.",
    coreValues: [
      {
        title: "Evidence-Based Strategy",
        description: "Utilizing rigorous academic research to inform real-world business and policy decisions."
      },
      {
        title: "Institutional Integrity",
        description: "Strengthening the core of organizations through ethical governance and transparent leadership."
      },
      {
        title: "Sustainable Peace",
        description: "Applying advanced conflict resolution frameworks to create stable, productive environments."
      }
    ]
  },

  founder: {
    name: "Dr. Alexander Attah",
    title: "Founder & Lead Consultant",
    bio: "ALEXNNENNA SOLUTIONS was pioneered by Dr. Alexander Attah, a distinguished scholar and strategist with over a decade of experience in Nigeria’s higher education and governance systems. As a Senior Lecturer in Peace, Security and Humanitarian Studies, Dr. Attah has dedicated his career to advancing peacebuilding scholarship and mentoring emerging leaders.",
    academicPedigree: "He holds a PhD and a Master’s degree (Distinction) in Peace and Conflict Studies from the University of Ibadan. Currently serving as the Director of the Centre for Advancement and Internationalisation at Mountain Top University, his leadership continues to drive global academic partnerships and institutional visibility.",
    signature: "Dr. Alexander Attah, PhD",
    image: "/alex image.jpg", 
  },

  coLeader: {
    name: "Mrs. Nnenna Attah",
    title: "Co-Leader, People and Culture Vision",
    bio: "Mrs. Nnenna Attah plays a vital role in shaping the people-centered vision of ALEXNNENNA SOLUTIONS. Working closely with Dr. Alexander Attah, she champions compassionate leadership, team wellbeing, and a culture of service excellence across the organization.",
    profile: "As the wife of Dr. Alexander Attah and a strategic partner in the organization's growth journey, she brings strong values-driven influence to leadership conversations and supports the long-term mission of institutional impact.",
    signature: "Mrs. Nnenna Attah",
    image: "/Mrs Nnnena Attah.jpeg",
  },
};