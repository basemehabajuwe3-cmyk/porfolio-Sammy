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
    title: 'Formation Développeur Web Full Stack',
    titleEn: 'Full Stack Web Development Training',
    company: 'Codecamp PrimeTek Academy',
    period: '2 juillet 2026 — Aujourd’hui',
    periodEn: 'July 2, 2026 — Present',
    description:
      'Formation progressive en développement web : après les fondamentaux et le développement frontend, j’ai commencé le module backend. Le programme avance par modules et projets pratiques.',
    descriptionEn:
      'Progressive web development training: after completing the foundations and frontend modules, I have started the backend module. The curriculum combines structured modules with hands-on projects.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
      'GitHub',
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Node.js',
      'NPM',
      'Express.js',
    ],
    mission: [
      'Module 1 — Fondamentaux du Web (2 juillet – 12 août) : HTML, CSS, JavaScript, DOM, stockage navigateur et Git/GitHub — terminé.',
      'Module 2 — Développement Frontend (13 août – 21 octobre) : React, Next.js, Vue, Nuxt, Tailwind CSS, tests et accessibilité — terminé.',
      'Module 3 — Développement Backend (depuis le 22 octobre) : Node.js, NPM et Express.js. Le routage et les middlewares Express sont au programme cette semaine.',
    ],
    missionEn: [
      'Module 1 — Web Foundations (July 2–August 12): HTML, CSS, JavaScript, the DOM, browser storage, and Git/GitHub — completed.',
      'Module 2 — Frontend Development (August 13–October 21): React, Next.js, Vue, Nuxt, Tailwind CSS, testing, and accessibility — completed.',
      'Module 3 — Backend Development (since October 22): Node.js, NPM, and Express.js. Express routing and middleware are on this week’s schedule.',
    ],
  },
  {
    title: 'Lead Frontend Developer',
    company: 'Studio Nova',
    period: '25 Septembre 2025 — Aujourd’hui',
    description:
      'Je conçois et maintiens des interfaces performantes pour des produits SaaS et sites vitrine destinés à des PME et startups locales.',
    periodEn: '25 Septembre 2025— Present',
    descriptionEn: 'I design and maintain high-performance interfaces for SaaS products and marketing websites serving local small businesses and startups.',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Freelance',
    period: '2 juillet 2026 — Aujourd’hui',
    description:
      'J’ai livré des applications web complètes avec intégration API, authentification, dashboards et optimisation UX/UI.',
    descriptionEn: 'I delivered full web applications with API integrations, authentication, dashboards, and UX/UI improvements.',
    stack: ['Node.js', 'PostgreSQL', 'Supabase', 'Next.js'],
  },
  {
    title: 'UI/UX & Product Designer',
    company: 'Projet indépendant',
    period: '20 Octobre 2026 — Aujourd’hui',
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
    period: '2019 — Aujourd’hui',
    description:
      'Journaliste de formation, spécialisé dans les technologies et l\'innovation.',
    descriptionEn: 'Trained journalist specializing in technology and innovation.',
    mission: [
      'Production de journaux et d’émissions sur la gouvernance, le genre et l’environnement',
      'Collaboration avec des médias en ligne et rédaction d’articles sur les nouvelles technologies et l’innovation',
      'Coaching et mentorat de jeunes journalistes et de jeunes porteurs de projets',
    ],
    missionEn: [
      'Produced news programs and broadcasts on governance, gender, and the environment',
      'Contributed to online media and wrote articles on new technologies and innovation',
      'Coached and mentored young journalists and aspiring entrepreneurs',
    ],
  },
];
