export type ProjectSection = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

export type Project = {
  id: number;
  title: string;
  tag: string;
  slogan: string;
  overview: string;
  stack: string[];
  sections: ProjectSection[];
  production?: {
    url: string;
    label: string;
  };
  collaboration?: {
    isCollaborative: boolean;
    partners: {
      companyName: string;
      ceoName: string;
      location: string;
      website: string;
    }[];
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "2MO – Second Medical Opinion Platform",
    tag: "HealthTech",
    slogan: "Streamline medical cases. Deliver expert second opinions faster.",
    overview:
      "2MO is a HealthTech platform that digitizes the full second-medical-opinion journey, from patient intake and secure document collection to doctor assignment, scheduling coordination and invoicing, with traceable workflows and admin visibility.",
    production: {
      url: "https://2mopinion.com",
      label: "Open 2MO Platform",
    },
    collaboration: {
      isCollaborative: true,
      partners: [
        {
          companyName: "GettingApp.io",
          ceoName: "Mazen Dekhil",
          location: "8 A. Goštauto g. Vilnius, Lithuania",
          website: "https://gettingapp.io",
        },
      ],
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "AdonisJS (Node.js)",
      "PostgreSQL",
      "Firebase (Storage)",
      "Shadcn UI",
      "Azure Devops",
      "Socket.io",
    ],
    sections: [
      {
        image: "/projects/2mo/admindash.png",
        title: "Admin Analytics Dashboard",
        description:
          "A real-time operational cockpit that tracks users, doctors, cases, invitations, and revenue, giving admins instant control over platform health.",
        features: [
          "KPI tiles for users, doctors, cases, and paid invoices",
          "Daily charts for new users and medical cases",
          "At-a-glance monitoring of operational workload",
        ],
      },
      {
        image: "/projects/2mo/createmc1.png",
        title: "Guided Case Intake Wizard",
        description:
          "A step-by-step case creation flow that standardizes patient data capture and reduces incomplete submissions, improving review speed and accuracy.",
        features: [
          "Multi-step progress flow (patient info → questions → documents → validation)",
          "Structured personal + contact data capture",
          "Designed to minimize errors and back-and-forth",
        ],
      },
      {
        image: "/projects/2mo/createmc2.png",
        title: "Secure Medical Document Collection",
        description:
          "A structured document checklist that makes it easy for patients to submit the right medical files with required flags, language, and date metadata.",
        features: [
          "Required/optional document requirements per case type",
          "Per-document metadata (language, issuance date)",
          "Upload actions per row + add custom documents when needed",
        ],
      },
      {
        image: "/projects/2mo/operatormcdetails.png",
        title: "Case Operations & Doctor Assignment",
        description:
          "A centralized case operations screen for operators to assign doctors, request missing information, and manage case readiness with full traceability.",
        features: [
          "Doctor assignment workflow for case routing",
          "Request missing / complementary information in one click",
          "Case detail modules (patient details, contract, attached files)",
        ],
      },
      {
        image: "/projects/2mo/invoicee.png",
        title: "Invoicing & Payment-Ready Documents",
        description:
          "Automated, professional invoicing that turns case work into trackable revenue, with line items, totals, tax, due dates, and payment info.",
        features: [
          "Invoice generation tied to medical case and patient identity",
          "Itemized services with quantity, rates, and tax totals",
          "Clean printable PDF layout for finance workflows",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "BenchBee – Talent Bench Management Platform",
    tag: "SaaS",
    slogan: "Turn idle talent into active revenue.",
    overview:
      "BenchBee is a B2B SaaS platform that helps consultancies and staffing firms monetize their bench faster by matching idle candidates with real demand, using structured data, smart filters, and controlled workflows.",
    production: {
      url: "https://app.benchbee.io",
      label: "Open BenchBee App",
    },
    collaboration: {
      isCollaborative: true,
      partners: [
        {
          companyName: "BenchBee Ltd",
          ceoName: "Hassan Hattab",
          location: "United Kingdom",
          website: "https://benchbee.io",
        },
      ],
    },
    stack: [
      "React",
      "TypeScript",
      "Cognito AWS",
      "Lambda",
      "REST APIs",
    ],
    sections: [
      {
        image: "/projects/benchbee/dashboard.png",
        title: "Operational Dashboard",
        description:
          "A real-time command center giving decision-makers instant visibility into candidates, jobs, match requests, and conversion health.",
        features: [
          "Live KPIs for candidates, jobs, and match requests",
          "Match status breakdown (pending, accepted, rejected)",
          "Activity feed and actionable notifications",
        ],
      },
      {
        image: "/projects/benchbee/Search.png",
        title: "Advanced Candidate Search & Matching",
        description:
          "A powerful talent discovery engine that lets recruiters find the right profile in seconds using skill depth, experience, location, and rate filters.",
        features: [
          "Multi-dimensional filters (skills, level, experience, location, rate)",
          "Skill taxonomy with technical, soft, and certified skills",
          "Instant shortlist and match request actions",
        ],
      },
      {
        image: "/projects/benchbee/createjob.png",
        title: "Structured Job Creation",
        description:
          "A frictionless job creation flow that standardizes demand input, ensuring higher-quality matches and faster turnaround.",
        features: [
          "Role, location, and work-mode normalization",
          "Responsible user assignment for accountability",
          "Contact ownership and notification routing",
        ],
      },
      {
        image: "/projects/benchbee/messages.png",
        title: "Match Requests & Deal Conversations",
        description:
          "Built-in messaging tied directly to match requests, keeping negotiations, clarifications, and decisions in one controlled flow.",
        features: [
          "Conversation threads linked to jobs and candidates",
          "Participant invitations and access control",
          "Clear accept / reject lifecycle per match",
        ],
      },
      {
        image: "/projects/benchbee/mycand.png",
        title: "Bench & Candidate Lifecycle Management",
        description:
          "A centralized view to manage internal talent, track availability, and prevent bench leakage through expiry and status controls.",
        features: [
          "Candidate status tracking (active, expired, unmatched)",
          "Quick edit, renew, or remove actions",
          "Skill, location, and availability visibility at a glance",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "SurgiGuideX – Digital Surgical Guide Platform",
    tag: "MedTech / Digital Dentistry",
    slogan: "From scan to surgery. Precision without guesswork.",
    overview:
      "SurgiGuideX is a digital dentistry platform that streamlines guided implant surgery workflows. It centralizes case submission, surgical planning, guide selection, and 3D guide fabrication into a single, clinician-focused experience, reducing errors, saving time, and improving surgical predictability.",
    production: {
      url: "https://surgiguidex.com",
      label: "Open SurgiGuideX Platform",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Video.js",
      "Cloud File Storage",
      "Supabase",
      "Sendgrid",
    ],
    sections: [
      {
        image: "/projects/surgiguidex/homepage.png",
        title: "Precision-Driven Landing Experience",
        description:
          "A conversion-focused homepage that clearly communicates clinical value, builds trust, and guides surgeons directly into the digital workflow.",
        features: [
          "Clear value proposition for guided implant surgery",
          "Educational video explaining guide types and workflow",
          "Strong call-to-action to request a demo or submit cases",
        ],
      },
      {
        image: "/projects/surgiguidex/types.png",
        title: "Surgical Guide Classification System",
        description:
          "An educational and decision-support section that visually explains each surgical guide type, helping clinicians choose the right approach for each case.",
        features: [
          "Tooth-supported, tissue-supported, bone-supported, and stackable guides",
          "Clinical indications explained in simple language",
          "Visual clarity for faster decision-making",
        ],
      },
      {
        image: "/projects/surgiguidex/workflow.png",
        title: "End-to-End Digital Workflow",
        description:
          "A simplified three-step workflow that removes friction between scanning, planning, and guide delivery.",
        features: [
          "Secure CBCT & intraoral scan upload",
          "Collaborative digital surgical planning",
          "Sterile, ready-to-use 3D printed guides",
        ],
      },
      {
        image: "/projects/surgiguidex/cases.png",
        title: "Surgical Case Management Dashboard",
        description:
          "A centralized dashboard allowing clinicians to review, track, and manage all surgical cases with full visibility.",
        features: [
          "Case cards with guide type, arch, and implant count",
          "Quick filtering and visual status recognition",
          "Scales from single implants to full-arch cases",
        ],
      },
      {
        image: "/projects/surgiguidex/details.png",
        title: "Detailed Case Review & Clinical Visualization",
        description:
          "A deep-dive case view combining clinical imagery, procedural summaries, and 3D guide previews for confident execution.",
        features: [
          "High-resolution clinical image carousel",
          "Structured case summary and treatment rationale",
          "3D surgical guide demo and animation preview",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "AI Inbox Triage – Gmail → Slack Actions (Human-in-the-loop)",
    tag: "AI Automation",
    slogan: "Turn inbox chaos into structured Slack actions, with human control.",
    overview:
      "An AI-powered inbox triage workflow that watches a real Gmail inbox, classifies each email (Lead, Client Request, Support, Noise), summarizes it, drafts a reply and pushes everything into Slack with action buttons. Replies can be sent instantly or edited in-thread before sending, with duplicate-send guardrails and a direct link back to the Gmail message/reply.",
    production: {
      url: "https://blazeshift.io",
      label: "Visit BlazeShift",
    },
    collaboration: {
      isCollaborative: false,
      partners: [],
    },
    stack: [
      "n8n (Workflow Automation)",
      "OpenAI (GPT)",
      "Supabase",
      "Slack API (Block Kit + Interactions)",
      "Gmail (API/Trigger)",
      "Webhooks",
    ],
    sections: [
      {
        image: "/projects/inbox-triage/01-slack-triage.png",
        title: "Slack Triage Card (Instant Clarity)",
        description:
          "Every incoming email becomes a structured Slack message: category, confidence, summary and a suggested reply, ready to act on without opening the inbox.",
        features: [
          "Automatic classification: Lead / Client Request / Support / Noise",
          "Short, readable summary for fast scanning",
          "Suggested reply generated in the same payload",
        ],
      },
      {
        image: "/projects/inbox-triage/02-human-in-loop-edit.png",
        title: "Human-in-the-Loop Editing",
        description:
          "One click starts an edit flow in the Slack thread. The user posts a short edited reply, then confirms sending, humans stay in control.",
        features: [
          "Edit Reply action triggers a guided thread flow",
          "User edits inside Slack (no copy/paste)",
          "Locks + checks prevent concurrent edits and mistakes",
        ],
      },
      {
        image: "/projects/inbox-triage/03-sent-confirmation-gmail-link.png",
        title: "Send Confirmation + Gmail Deep Link",
        description:
          "After sending, the system posts a clean confirmation message in Slack, updates status and provides a direct link back to the Gmail conversation/reply.",
        features: [
          "Confirmation message with source (auto vs user-edited)",
          "Duplicate-send prevention (idempotent behavior)",
          "One-click Open reply in Gmail for verification",
        ],
      },
    ],
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectNavigation(id: number): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
