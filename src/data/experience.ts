export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  titleEn?: string;
  periodEn?: string;
  descriptionEn?: string;
  stack?: string[];
  mission?: string[];
  missionEn?: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Lead Frontend Developer',
    company: 'Studio Nova',
    period: '2023 — Aujourd’hui',
    description:
      'Je conçois et maintiens des interfaces performantes pour des produits SaaS et sites vitrine destinés à des PME et startups locales.',
    periodEn: '2023 — Present',
    descriptionEn: 'I design and maintain high-performance interfaces for SaaS products and marketing websites serving local small businesses and startups.',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Freelance',
    period: '2021 — 2023',
    description:
      'J’ai livré des applications web complètes avec intégration API, authentification, dashboards et optimisation UX/UI.',
    descriptionEn: 'I delivered full web applications with API integrations, authentication, dashboards, and UX/UI improvements.',
    stack: ['Node.js', 'PostgreSQL', 'Supabase', 'Next.js'],
  },
  {
    title: 'UI/UX & Product Designer',
    company: 'Projet indépendant',
    period: '2019 — 2021',
    description:
      'J’ai créé des parcours utilisateurs clairs, des maquettes à partir des besoins métier et des prototypes de validation rapide.',
    titleEn: 'UI/UX & Product Designer',
    descriptionEn: 'I created clear user journeys, business-driven mockups, and rapid validation prototypes.',
    stack: ['Figma', 'Design Systems', 'Prototypage'],
  },
  {
    title: 'Assistant de Recherche et Journaliste',
    titleEn: 'Research Assistant and Journalist',
    company: 'Projet indépendant',
    period: '2019 — 2021',
    description:
      'Journaliste de formation, spécialisé dans les technologies et l\'innovation.',
    descriptionEn: 'Trained journalist specializing in technology and innovation.',
    mission: ['Production de journaux et Emission sur la la bonne gouvernace,Genre,Environnement', 'Collaborateur de presse en ligne', 'Rédaction d’articles sur les nouvelles technologies et l’innovation','Coatching et mentorat pour les jeunes journalistes', 'Coaching de jeunes dans l\'entrepreneuriat et l\'innovation', 'Rédaction de contenu pour des blogs et sites web spécialisés dans la technologie et l\'innovation'],
    missionEn: [
      'Produced news programs and broadcasts on governance, gender, and the environment',
      'Contributed to online news outlets',
      'Wrote articles on new technologies and innovation',
      'Coached and mentored young journalists',
      'Coached young people in entrepreneurship and innovation',
      'Wrote content for blogs and websites focused on technology and innovation',
    ],
  },
];
