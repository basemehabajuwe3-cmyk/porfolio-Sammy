export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Quizzy',
    description: 'Application de quiz interactive conçue pour apprendre rapidement, suivre la progression et offrir une expérience mobile réactive.',
    technologies: ['React', 'Vite', 'TypeScript'],
    githubLink: 'https://github.com/sammyahabajuwe/quizzy',
    demoLink: 'https://quizzy-demo.vercel.app',
    image: '/images/quizzy.svg',
  },
  {
    title: 'TaskFlow',
    description: 'Dashboard Kanban pour organiser les tâches, prioriser les livrables et améliorer la collaboration entre équipes.',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    githubLink: 'https://github.com/sammyahabajuwe/taskflow',
    demoLink: 'https://taskflow-demo.vercel.app',
    image: '/images/taskflow.svg',
  },
  {
    title: 'SmartResto',
    description: 'Système de commande et de gestion de restaurant optimisant le suivi des commandes, caisse et suivi de service.',
    technologies: ['Nuxt', 'API REST', 'Supabase'],
    githubLink: 'https://github.com/sammyahabajuwe/smartresto',
    image: '/images/smartresto.svg',
  },
];
