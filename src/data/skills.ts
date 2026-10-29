export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Astro',
      'Next.js',
      'Tailwind',
      'Vue.js',
      'Nuxt.js',
      'Vue Router',
      'Bootstrap',
      'SCSS/SASS',
      'Styled Components',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'PostgreSQL',
      'Supabase',
      'Prisma',
      'Laravel',
      'Blade',
      'Eloquent',
      'GraphQL',
      'Apollo Server',
      'MySQL',
      'MongoDB',
      'Mongoose',
    ],
  },
  {
    title: 'Langages & fondamentaux web',
    items: [
      'PHP',
      'SQL',
      'DOM',
      'Local Storage / API du navigateur',
      'ES6+',
      'Promises',
      'Async-Await',
      'Modules JavaScript',
    ],
  },
  {
    title: 'Outils & workflow',
    items: [
      'Git',
      'GitHub',
      'Figma',
      'Vercel',
      'Docker',
      'CI/CD',
      'NPM',
      'Docker Compose',
      'GitHub Actions',
      'Linux',
      'AWS',
      'GCP',
      'Azure',
      'Jest',
      'React Testing Library',
      'OpenAI API',
    ],
  },
];
