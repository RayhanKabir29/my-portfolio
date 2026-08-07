export type ProjectStatus = 'Delivered' | 'Complete' | 'Ongoing' | 'Paused';

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  framework: 'React' | 'Next.js';
  status: ProjectStatus;
  repoUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Nagorik Sheba Admin',
    description:
      'Administrative dashboard for the Nagorik Sheba citizen-services platform, handling user management, approvals, and operational reporting.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Delivered',
    repoUrl: 'https://github.com/innofast-tech/nagorik-sheba-admin',
    category: 'GovTech',
  },
  {
    id: 2,
    name: 'Nagorik Sheba Entrepreneur',
    description:
      'Entrepreneur-facing portal for the Nagorik Sheba ecosystem, enabling local service providers to register, manage offerings, and track requests.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Delivered',
    repoUrl: 'https://github.com/innofast-tech/nagorik-sheba-entrepreneur',
    category: 'GovTech',
  },
  {
    id: 23,
    name: 'Public Library eLibrary',
    description:
      'Bangladesh government eLibrary platform where users can create accounts, pay membership fees through Nagad MFS, borrow and return books, while publishers submit tender quotations and libraries manage inter-library transactions through a separate admin panel covering books, borrowing, membership, tenders, reports, and operations.',
    technologies: ['Next.js', 'TypeScript', 'REST API', 'Nagad MFS', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Delivered',
    repoUrl: 'https://elibrary.dpl.gov.bd/',
    category: 'GovTech',
  },
  {
    id: 3,
    name: 'Nano Loan Organiser',
    description:
      'Loan-organiser application for managing microfinance workflows, borrower onboarding, and loan disbursement tracking.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/nano-loans-organiser',
    category: 'FinTech',
  },
  {
    id: 4,
    name: 'Nano Loan Bank',
    description:
      'Bank-side portal for the nano-loan platform, handling partner bank integrations, fund allocation, and repayment monitoring.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/nano-loans-bank',
    category: 'FinTech',
  },
  {
    id: 5,
    name: 'Nano Loan Organization',
    description:
      'Organization management console for the nano-loan suite, covering field officers, loan cycles, and portfolio analytics.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/nano-loans-organization',
    category: 'FinTech',
  },
  {
    id: 6,
    name: 'Nano Loan PWA',
    description:
      'Progressive web app for nano-loan borrowers, providing an installable, offline-friendly experience for applying and tracking loans.',
    technologies: ['Next.js', 'TypeScript', 'PWA', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/nano-loans-pwa',
    category: 'FinTech',
  },
  {
    id: 7,
    name: 'July Forever Admin',
    description:
      'Admin backend for the July Forever initiative, managing content, registrations, and campaign coordination.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/julyforever-admin-frontend',
    category: 'Social',
  },
  {
    id: 8,
    name: 'July Forever Front End',
    description:
      'Public-facing website for the July Forever initiative with event information, registration, and story highlights.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/julyforever-frontend',
    category: 'Social',
  },
  {
    id: 9,
    name: 'Youth Summit Front End',
    description:
      'Conference website for the Youth Summit, featuring speaker lineups, session schedules, and attendee registration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/youth-summit-frontend',
    category: 'Events',
  },
  {
    id: 10,
    name: 'Youth Summit Admin',
    description:
      'Administrative console for the Youth Summit, handling registrations, schedules, and attendee communications.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/youth-summit-admin',
    category: 'Events',
  },
  {
    id: 11,
    name: 'NRB Connect',
    description:
      'Community platform connecting Non-Resident Bangladeshis with local networks, news, and engagement opportunities.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/nrb-connect-public',
    category: 'Community',
  },
  {
    id: 12,
    name: 'Tele Medicine Doctor Panel',
    description:
      'Doctor-facing portal for a telemedicine platform, supporting appointment scheduling, patient history, and remote consultations.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/telemedicine-doctor-panel',
    category: 'HealthTech',
  },
  {
    id: 13,
    name: 'Telemedicine Admin',
    description:
      'Administrative panel for the telemedicine platform, managing doctors, patients, and platform-wide operations.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/telemedicine-admin-panel',
    category: 'HealthTech',
  },
  {
    id: 14,
    name: 'Hajj Admin',
    description:
      'Administrative system for Hajj pilgrimage operations, managing pilgrim groups, travel packages, and logistics.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Delivered',
    repoUrl: 'https://github.com/innofast-tech/hajj-admin',
    category: 'Travel',
  },
  {
    id: 15,
    name: 'SOS Panel for Hajj',
    description:
      'Emergency response panel for the Hajj pilgrimage, enabling real-time SOS request handling and pilgrim assistance.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Delivered',
    repoUrl: 'https://github.com/innofast-tech/hajj-sos-panel',
    category: 'Travel',
  },
  {
    id: 16,
    name: 'Election Campaign',
    description:
      'Campaign management platform for election activities, supporting outreach, volunteer coordination, and voter engagement.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Paused',
    repoUrl: 'https://github.com/innofast-tech/election-campaign',
    category: 'Civic',
  },
  {
    id: 17,
    name: 'Amar Shodai Web',
    description:
      'Public website for the Amar Shodai brand, showcasing products and services with a modern, responsive storefront.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/amar-shoday-web',
    category: 'Commerce',
  },
  {
    id: 18,
    name: 'Amar Shodai Admin',
    description:
      'Admin console for the Amar Shodai platform, handling inventory, orders, and content management.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/amar-shoday-admin',
    category: 'Commerce',
  },
  {
    id: 19,
    name: 'Exam Front End',
    description:
      'Online examination platform for taking tests, viewing results, and tracking performance with a clean student experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    framework: 'Next.js',
    status: 'Complete',
    repoUrl: 'https://github.com/innofast-tech/exam-frontend',
    category: 'EdTech',
  },
  {
    id: 20,
    name: 'Diagnostic Portal',
    description:
      'Management system for diagnostic centers, handling test orders, reporting, and patient records.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Ongoing',
    repoUrl: 'https://github.com/innofast-tech/diagonstic-management',
    category: 'HealthTech',
  },
  {
    id: 21,
    name: 'Admin Portal for Hospital',
    description:
      'Hospital administration portal for managing departments, staff, and patient workflows across a healthcare facility.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Ongoing',
    repoUrl: 'https://github.com/innofast-tech/hospital-management',
    category: 'HealthTech',
  },
  {
    id: 22,
    name: 'Doctor Panel',
    description:
      'Doctor-facing panel for hospital management, supporting patient consultations, records, and clinical workflows.',
    technologies: ['React', 'JavaScript', 'REST API', 'Tailwind CSS'],
    framework: 'React',
    status: 'Ongoing',
    repoUrl: 'https://github.com/innofast-tech/hospital-management-doctor-panel',
    category: 'HealthTech',
  },
];

export const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string; dot: string }
> = {
  Delivered: {
    label: 'Delivered',
    className:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  Complete: {
    label: 'Complete',
    className:
      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500',
  },
  Ongoing: {
    label: 'Ongoing',
    className:
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    dot: 'bg-amber-500',
  },
  Paused: {
    label: 'Paused',
    className:
      'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    dot: 'bg-rose-500',
  },
};

export const categoryColors: Record<string, string> = {
  GovTech: 'text-sky-600 dark:text-sky-400',
  FinTech: 'text-emerald-600 dark:text-emerald-400',
  Social: 'text-violet-600 dark:text-violet-400',
  Events: 'text-orange-600 dark:text-orange-400',
  Community: 'text-teal-600 dark:text-teal-400',
  HealthTech: 'text-rose-600 dark:text-rose-400',
  Travel: 'text-amber-600 dark:text-amber-400',
  Civic: 'text-cyan-600 dark:text-cyan-400',
  Commerce: 'text-fuchsia-600 dark:text-fuchsia-400',
  EdTech: 'text-indigo-600 dark:text-indigo-400',
};
