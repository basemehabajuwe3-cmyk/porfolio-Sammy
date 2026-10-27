export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    title: 'Outils & workflow',
    items: ['Git', 'GitHub', 'Figma', 'Vercel', 'Docker', 'CI/CD'],
  },
];
