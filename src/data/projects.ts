export interface Project {
  title: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Quizzy',
    description: 'Quizzy — un quiz interactif chronométré, avec classement, historique, réglages et éditeur de questions. Tout est stocké dans le navigateur : aucun serveur, aucune base de données.',
    descriptionEn: 'Quizzy — an interactive timed quiz, with a leaderboard, history, settings, and a question editor. Everything is stored in the browser: no server, no database.',
    technologies: ['React', 'Vite', 'TypeScript'],
    githubLink: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26.git',
    demoLink: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26.git-demo.vercel.app',
    image: '/images/quizzy.svg',
  },
  {
    title: 'TaskFlow',
    description: 'Dashboard Kanban pour organiser les tâches, prioriser les livrables et améliorer la collaboration entre équipes.',
    descriptionEn: 'A Kanban dashboard for organizing tasks, prioritizing deliverables, and improving team collaboration.',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
    githubLink: 'https://github.com/basemehabajuwe3-cmyk/taskflow-react.git',
    demoLink: 'https://github.com/basemehabajuwe3-cmyk/taskflow-react.git-demo.vercel.app',
    image: '/images/taskflow.svg',
  },
  {
    title: 'SmartResto',
    description: 'Système de commande et de gestion de restaurant optimisant le suivi des commandes, caisse et suivi de service.',
    descriptionEn: 'A restaurant ordering and management system that streamlines order tracking, checkout, and service operations.',
    technologies: ['Nuxt', 'API REST', 'Supabase'],
    githubLink: 'https://github.com/traorenfamory095-star/smartresto.git',
    image: '/images/smartresto.svg',
  },
];
