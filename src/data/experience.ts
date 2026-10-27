export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  stack?: string[];
  mission?: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Lead Frontend Developer',
    company: 'Studio Nova',
    period: '2023 — Aujourd’hui',
    description:
      'Je conçois et maintiens des interfaces performantes pour des produits SaaS et sites vitrine destinés à des PME et startups locales.',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Freelance',
    period: '2021 — 2023',
    description:
      'J’ai livré des applications web complètes avec intégration API, authentification, dashboards et optimisation UX/UI.',
    stack: ['Node.js', 'PostgreSQL', 'Supabase', 'Next.js'],
  },
  {
    title: 'UI/UX & Product Designer',
    company: 'Projet indépendant',
    period: '2019 — 2021',
    description:
      'J’ai créé des parcours utilisateurs clairs, des maquettes à partir des besoins métier et des prototypes de validation rapide.',
    stack: ['Figma', 'Design Systems', 'Prototypage'],
  },
  {
    title: 'Assistant de Recherche et Journaliste',
    company: 'Projet indépendant',
    period: '2019 — 2021',
    description:
      'Journaliste de formation, spécialisé dans les technologies et l\'innovation.',
    mission: ['Production de journaux et Emission sur la la bonne gouvernace,Genre,Environnement', 'Collaborateur de presse en ligne', 'Rédaction d’articles sur les nouvelles technologies et l’innovation','Coatching et mentorat pour les jeunes journalistes', 'Coaching de jeunes dans l\'entrepreneuriat et l\'innovation', 'Rédaction de contenu pour des blogs et sites web spécialisés dans la technologie et l\'innovation'],
  },
];
