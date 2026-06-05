import {
  Activity,
  BadgeCheck,
  Bell,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Fingerprint,
  GitBranch,
  Globe2,
  Hash,
  HeartPulse,
  IdCard,
  LockKeyhole,
  MessageSquareText,
  Network,
  PhoneCall,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TabletSmartphone,
  UserCheck,
  UsersRound
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navItems = [
  { label: 'Product', href: '/product/how-it-works' },
  { label: 'Platform', href: '/platform/operations-assurance' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
] as const;

export const trustBadges = [
  'NHS App-ready journey model',
  'ISO 27001 control posture',
  'DPIA and UK GDPR aligned',
  'DCB0129 safety-case workflow',
  '99.9% uptime target'
] as const;

export interface IconCopy {
  title: string;
  copy: string;
  icon: LucideIcon;
}

export interface RequestPassportField {
  label: string;
  value: string;
  detail: string;
  status: string;
  tone: 'verified' | 'complete' | 'low' | 'medium' | 'routed' | 'notified' | 'assigned' | 'recorded';
  icon: LucideIcon;
}

export interface IntegrationGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface AssuranceGraphNode {
  label: string;
  detail: string;
  tone: 'lineage' | 'identity' | 'policy' | 'route' | 'outcome';
}

export interface AuditTrailEvent {
  time: string;
  title: string;
  detail: string;
  status: string;
}

export interface AssurancePackItem {
  title: string;
  detail: string;
}

export interface RoleSurfaceDetail {
  title: string;
  audience: string;
  summary: string;
  icon: LucideIcon;
  metric: string;
  metricLabel: string;
  status: string;
  statusDetail: string;
  worklist: string[];
  actions: string[];
  proof: string[];
}

export interface RequestLifecycleStage {
  title: string;
  copy: string;
  state: string;
  artifact: string;
  proof: string;
  icon: LucideIcon;
}

export const channels: IconCopy[] = [
  {
    title: 'Web',
    copy: 'Online requests with structured capture and consent-aware recovery.',
    icon: Network
  },
  {
    title: 'NHS App',
    copy: 'Embedded jump-off journeys that preserve patient shell context.',
    icon: ShieldCheck
  },
  {
    title: 'Phone',
    copy: 'Call and IVR capture routed through the same safety and evidence model.',
    icon: PhoneCall
  }
];

export const integrationChain: IntegrationGroup[] = [
  {
    title: 'Patient access',
    icon: TabletSmartphone,
    items: ['NHS App', 'Web / mobile', 'Phone']
  },
  {
    title: 'Engagement channels',
    icon: MessageSquareText,
    items: ['Messaging', 'SMS', 'Email', 'Live chat']
  },
  {
    title: 'Vecells front door',
    icon: Sparkles,
    items: ['Intake', 'Validation', 'Triage', 'Routing', 'Scheduling']
  },
  {
    title: 'FHIR boundary',
    icon: Globe2,
    items: ['FHIR API', 'Secure exchange', 'Mapped representations', 'Consent proof']
  },
  {
    title: 'Core systems',
    icon: LockKeyhole,
    items: ['GP systems', 'Records', 'Identity', 'Directories']
  },
  {
    title: 'Ecosystem services',
    icon: Radio,
    items: ['Pharmacy services', 'Labs and imaging', 'Notifications', 'Care networks']
  },
  {
    title: 'Hub and workforce',
    icon: UsersRound,
    items: ['Hub desks', 'Clinical teams', 'Pharmacies', 'Community']
  },
  {
    title: 'Adapters and APIs',
    icon: Network,
    items: ['API contracts', 'Webhooks', 'Events', 'SDKs']
  }
];

export const flowSteps: IconCopy[] = [
  {
    title: 'Capture',
    copy: 'Collect demand from web, phone, and NHS App without splitting queues.',
    icon: ClipboardCheck
  },
  {
    title: 'Normalise',
    copy: 'Build one durable request shell with identity, evidence, and context.',
    icon: GitBranch
  },
  {
    title: 'Safeguard',
    copy: 'Run versioned safety checks before routine work can proceed.',
    icon: ShieldCheck
  },
  {
    title: 'Triage',
    copy: 'Prioritise, assign, and review with a stable clinical workspace.',
    icon: Stethoscope
  },
  {
    title: 'Route',
    copy: 'Send the request to the right endpoint with audit-ready rationale.',
    icon: Network
  },
  {
    title: 'Prove',
    copy: 'Close with outcome, audit trail, and assurance evidence intact.',
    icon: Fingerprint
  }
];

export const requestLifecycleStages: RequestLifecycleStage[] = [
  {
    title: 'Intake',
    copy: 'Request captured once across any channel with identity and consent context attached.',
    state: 'New request',
    artifact: 'Chest infection submitted 09:15',
    proof: 'One public request ID',
    icon: ClipboardCheck
  },
  {
    title: 'Safety screen',
    copy: 'Automated and governed safety checks run before routine handling continues.',
    state: 'Safety score low',
    artifact: 'No immediate red flags',
    proof: 'Rule set recorded',
    icon: ShieldCheck
  },
  {
    title: 'Human triage',
    copy: 'A reviewer sees the right evidence, assigns priority, and keeps ownership fenced.',
    state: 'Routine',
    artifact: 'Medication query reviewed',
    proof: 'Owner and queue visible',
    icon: Stethoscope
  },
  {
    title: 'Endpoint decision',
    copy: 'The request is routed to the best available endpoint with rationale preserved.',
    state: 'Route selected',
    artifact: 'Clinician messaging',
    proof: 'Decision reason retained',
    icon: Network
  },
  {
    title: 'Action execution',
    copy: 'Advice, message, booking, callback, hub, or pharmacy work settles through one action path.',
    state: 'Action sent',
    artifact: 'Self-care plan and safety-netting',
    proof: 'Command outcome tracked',
    icon: Send
  },
  {
    title: 'Patient update',
    copy: 'The patient sees clear progress, expected next step, and safe recovery guidance.',
    state: 'Message delivered',
    artifact: 'Today 10:02',
    proof: 'Patient-visible state current',
    icon: Bell
  },
  {
    title: 'Closure & audit',
    copy: 'Outcome, ownership, evidence graph, and audit trail close together.',
    state: 'Closed',
    artifact: 'Outcome recorded',
    proof: 'Audit complete',
    icon: Fingerprint
  }
];

export const requestPassportFields: RequestPassportField[] = [
  {
    label: 'Request ID',
    value: 'VC-7G45-9K2H',
    detail: 'Created 12 May 2025, 09:15',
    status: 'Lineage open',
    tone: 'recorded',
    icon: Hash
  },
  {
    label: 'Identity state',
    value: 'NHS login verified',
    detail: 'Consent captured and current',
    status: 'Verified',
    tone: 'verified',
    icon: IdCard
  },
  {
    label: 'Evidence snapshot',
    value: 'Symptoms + history',
    detail: 'Attachments and observations frozen',
    status: 'Complete',
    tone: 'complete',
    icon: FileCheck2
  },
  {
    label: 'Safety posture',
    value: 'No red flags',
    detail: 'Risk rules checked before routing',
    status: 'Low risk',
    tone: 'low',
    icon: ShieldCheck
  },
  {
    label: 'Triage decision',
    value: 'Medication query',
    detail: 'Clinical admin review selected',
    status: 'Medium priority',
    tone: 'medium',
    icon: Stethoscope
  },
  {
    label: 'Endpoint',
    value: 'Clinician messaging',
    detail: 'Async reply path and fallback kept',
    status: 'Routed',
    tone: 'routed',
    icon: Send
  },
  {
    label: 'Patient status',
    value: 'Progress update sent',
    detail: 'Patient sees next safe step',
    status: 'Notified',
    tone: 'notified',
    icon: Bell
  },
  {
    label: 'Operational owner',
    value: 'Care navigator team',
    detail: 'Ownership and SLA stay visible',
    status: 'Assigned',
    tone: 'assigned',
    icon: UserCheck
  },
  {
    label: 'Audit proof',
    value: 'Event log recorded',
    detail: 'Outcome and action trail preserved',
    status: 'Recorded',
    tone: 'recorded',
    icon: Fingerprint
  }
];

export const endpointRoutes: IconCopy[] = [
  {
    title: 'Self-care and safety-netting',
    copy: 'Evidence-backed advice with clear escalation instructions.',
    icon: HeartPulse
  },
  {
    title: 'Admin resolution',
    copy: 'Non-clinical requests routed to accountable admin action.',
    icon: UsersRound
  },
  {
    title: 'Clinician messaging',
    copy: 'Asynchronous conversation with delivery and reply state.',
    icon: MessageSquareText
  },
  {
    title: 'Callback',
    copy: 'Booked call attempts with retry, voicemail, and repair policy.',
    icon: PhoneCall
  },
  {
    title: 'Booking',
    copy: 'Appointment offers that revalidate availability before confirmation.',
    icon: CalendarClock
  },
  {
    title: 'Hub coordination',
    copy: 'PCN and community routing with scope-aware handoff.',
    icon: Activity
  },
  {
    title: 'Pharmacy First',
    copy: 'Consent-led community pharmacy referral where appropriate.',
    icon: BadgeCheck
  }
];

export const surfaces: IconCopy[] = [
  {
    title: 'Patient Portal',
    copy: 'Guided requests, updates, messages, appointments, and secure status.',
    icon: HeartPulse
  },
  {
    title: 'Clinical Workspace',
    copy: 'Queue, evidence, decision, and action surfaces in one staff shell.',
    icon: Stethoscope
  },
  {
    title: 'Operations Console',
    copy: 'Real-time oversight of queues, capacity, dependencies, and delivery health.',
    icon: Activity
  },
  {
    title: 'Hub Desk',
    copy: 'Multidisciplinary intake and local orchestration across practices.',
    icon: UsersRound
  },
  {
    title: 'Pharmacy Console',
    copy: 'Referral review, evidence, consent, and handover coordination.',
    icon: FileCheck2
  },
  {
    title: 'Support Desk',
    copy: 'Patient enquiries, delivery repair, and masked support workflows.',
    icon: MessageSquareText
  },
  {
    title: 'Governance & Admin',
    copy: 'Policy, roles, audit, configuration, release control, and monitoring.',
    icon: LockKeyhole
  }
];

export const roleSurfaceDetails: RoleSurfaceDetail[] = [
  {
    title: 'Patient Portal',
    audience: 'Patients and carers',
    summary: 'A quiet home for active requests, appointments, messages, records, and the next safe action.',
    icon: HeartPulse,
    metric: '1',
    metricLabel: 'active request',
    status: 'In progress',
    statusDetail: 'Next update due within 2 hours',
    worklist: ['Medication query', 'Safety check completed', 'Message expected today'],
    actions: ['Track request', 'View appointment', 'Read message'],
    proof: ['Identity scope verified', 'Patient-visible summary current', 'Next action safely available']
  },
  {
    title: 'Clinical Workspace',
    audience: 'Clinicians and reviewers',
    summary: 'A compact queue and task canvas for evidence review, triage, decisioning, and safe handoff.',
    icon: Stethoscope,
    metric: '23',
    metricLabel: 'queue items',
    status: 'Decision ready',
    statusDetail: 'Current task has a clear dominant action',
    worklist: ['New request: chest infection', 'Reply returned: sore throat', 'Prescription query'],
    actions: ['Message patient', 'Book appointment', 'Send to pharmacy'],
    proof: ['Ownership current', 'Evidence snapshot aligned', 'Completion waits for settlement']
  },
  {
    title: 'Operations Console',
    audience: 'Operational leaders',
    summary: 'A control-room board for demand, capacity, dependencies, intervention, and assurance.',
    icon: Activity,
    metric: '94%',
    metricLabel: 'delivery health',
    status: 'On track',
    statusDetail: 'North Hub pressure is rising',
    worklist: ['North Hub high pressure', 'GP systems healthy', 'Pharmacy dependency degraded'],
    actions: ['Review intervention', 'Rebalance capacity', 'Open assurance'],
    proof: ['Freshness declared', 'Board context preserved', 'Intervention outcome recorded']
  },
  {
    title: 'Hub Desk',
    audience: 'PCN and hub teams',
    summary: 'A coordination shell for cross-site routing, patient choice, hub slots, and return-to-practice visibility.',
    icon: UsersRound,
    metric: '8',
    metricLabel: 'hub options',
    status: 'Offer review',
    statusDetail: 'Selected slot needs confirmation',
    worklist: ['Respiratory hub referral', 'Evening slot option', 'Callback fallback ready'],
    actions: ['Confirm offer', 'Send patient options', 'Return to practice'],
    proof: ['Scope-aware handoff', 'Offer state current', 'Practice visibility retained']
  },
  {
    title: 'Pharmacy Console',
    audience: 'Pharmacy teams',
    summary: 'A mission frame for consent, eligibility, referral review, handoff, and pharmacy outcome evidence.',
    icon: FileCheck2,
    metric: '4',
    metricLabel: 'referrals ready',
    status: 'Consent checked',
    statusDetail: 'Current referral can be dispatched',
    worklist: ['Pharmacy First referral', 'Eligibility confirmed', 'Outcome awaiting return'],
    actions: ['Dispatch referral', 'Record outcome', 'Return for review'],
    proof: ['Consent proof present', 'Dispatch status current', 'Outcome can reopen safely']
  },
  {
    title: 'Support Desk',
    audience: 'Support and admin teams',
    summary: 'A masked support view for patient enquiries, delivery repair, replay, and safe return to the right shell.',
    icon: MessageSquareText,
    metric: '12',
    metricLabel: 'open enquiries',
    status: 'Repair active',
    statusDetail: 'Delivery issue is being resolved',
    worklist: ['Message delivery issue', 'Appointment query', 'Identity repair'],
    actions: ['Restore context', 'Send update', 'Escalate safely'],
    proof: ['Minimum necessary view', 'Replay returns to live posture', 'Support action logged']
  },
  {
    title: 'Governance & Admin',
    audience: 'Governance and platform teams',
    summary: 'A controlled shell for roles, policies, release posture, configuration, evidence, and approvals.',
    icon: LockKeyhole,
    metric: '3',
    metricLabel: 'changes staged',
    status: 'Approval ready',
    statusDetail: 'Policy diff has complete evidence',
    worklist: ['Role policy update', 'Release wave watch', 'Assurance pack export'],
    actions: ['Review diff', 'Approve release', 'Export evidence'],
    proof: ['Scope checksum matches', 'Publication parity exact', 'Approval trail retained']
  }
];

export const assuranceItems: IconCopy[] = [
  {
    title: 'Lifecycle ownership',
    copy: 'Every request carries an accountable owner and explicit closure record.',
    icon: UsersRound
  },
  {
    title: 'Immutable audit',
    copy: 'Actions settle into an audit trail rather than route-local history.',
    icon: Fingerprint
  },
  {
    title: 'Release controls',
    copy: 'Published routes, policy bundles, and UI contracts remain versioned.',
    icon: GitBranch
  },
  {
    title: 'Role-based visibility',
    copy: 'People see the right information for their scope and purpose of use.',
    icon: LockKeyhole
  },
  {
    title: 'Accessibility first',
    copy: 'Patient and staff surfaces preserve target sizes, focus, and reduced motion.',
    icon: CheckCircle2
  },
  {
    title: 'Human-approved AI',
    copy: 'Assistance is optional, evidence-backed, explainable, and logged.',
    icon: Sparkles
  }
];

export const assuranceGraphNodes: AssuranceGraphNode[] = [
  {
    label: 'Lineage',
    detail: 'Request shell, channel, and public ID stay joined.',
    tone: 'lineage'
  },
  {
    label: 'Identity',
    detail: 'Verified person, access scope, and consent state.',
    tone: 'identity'
  },
  {
    label: 'Policy',
    detail: 'Safety rules, release posture, and role scope.',
    tone: 'policy'
  },
  {
    label: 'Route',
    detail: 'Endpoint decision, rationale, and downstream handoff.',
    tone: 'route'
  },
  {
    label: 'Outcome',
    detail: 'Closure state, patient update, and quality signal.',
    tone: 'outcome'
  }
];

export const auditTrailEvents: AuditTrailEvent[] = [
  {
    time: '09:15',
    title: 'Request received',
    detail: 'Web request accepted into one lineage.',
    status: 'Recorded'
  },
  {
    time: '09:18',
    title: 'Safety checked',
    detail: 'No red flags found on current evidence.',
    status: 'Low risk'
  },
  {
    time: '09:24',
    title: 'Routed to Pharmacy First',
    detail: 'Consent and eligibility confirmed before handoff.',
    status: 'Accepted'
  },
  {
    time: '13:21',
    title: 'Outcome closed',
    detail: 'Patient update and audit proof settled.',
    status: 'Complete'
  }
];

export const assurancePackItems: AssurancePackItem[] = [
  {
    title: 'Decision summary',
    detail: 'What changed, why it changed, and who approved it.'
  },
  {
    title: 'Evidence graph',
    detail: 'Linked proof for identity, safety, route, and outcome.'
  },
  {
    title: 'Audit trail',
    detail: 'Time-stamped actions, scopes, and settlements.'
  },
  {
    title: 'Outcome record',
    detail: 'Patient-facing status and operational closure state.'
  }
];

export const assuranceCompletenessChecks = [
  'Standards rows linked',
  'Control status current',
  'Continuity proof present',
  'Recovery proof retained'
] as const;

export const operatingMetrics = [
  { label: 'Open requests', value: '2,341', detail: '8% vs last 7 days' },
  { label: 'Queue pressure', value: 'Moderate', detail: 'Rising in two hubs' },
  { label: 'Capacity mismatch', value: '126', detail: 'At risk today' },
  { label: 'Delivery health', value: '94%', detail: 'On track' },
  { label: 'Audit quality', value: '98th', detail: 'Percentile' }
] as const;

export const challenges = [
  {
    title: 'Fragmented entry',
    copy: 'Multiple front doors create duplicate requests, lost context, and inconsistent experiences.'
  },
  {
    title: 'Premature routing',
    copy: 'Requests are sent too early to the wrong place, driving rework, escalation, and delay.'
  },
  {
    title: 'Weak operational proof',
    copy: 'Limited visibility and auditability make it hard to assure safety, performance, and outcomes.'
  }
] as const;

export const legalPages = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Terms', href: '/terms' },
  { label: 'Security', href: '/security' },
  { label: 'Accessibility', href: '/accessibility' }
] as const;

export const officialReferences = [
  {
    label: 'NHS login API catalogue',
    href: 'https://digital.nhs.uk/developer/api-catalogue/nhs-login'
  },
  {
    label: 'NHS App web integration',
    href: 'https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app/nhs-app-web-integration'
  },
  {
    label: 'Clinical risk management standards',
    href: 'https://digital.nhs.uk/services/clinical-safety/clinical-risk-management-standards'
  },
  {
    label: 'Data Security and Protection Toolkit',
    href: 'https://www.dsptoolkit.nhs.uk/'
  }
] as const;

export const contactIntents = [
  'Book a walkthrough',
  'Discuss primary-care demand',
  'Review NHS App readiness',
  'Talk about security and assurance',
  'Other'
] as const;
