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
    description:
      'Quizzy est une application de quiz interactive et chronométrée avec classement, historique, paramètres et éditeur de questions. L’expérience est pensée pour être rapide, claire et entièrement autonome côté navigateur.',
    descriptionEn:
      'Quizzy is a timed interactive quiz app with a leaderboard, history, settings, and question editor. The experience is designed to be fast, clear, and fully browser-based.',
    technologies: ['React', 'Vite', 'TypeScript', 'LocalStorage'],
    githubLink: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26',
    image: '/images/quizzy.svg',
  },
  {
    title: 'TaskFlow',
    description:
      'TaskFlow est un tableau de bord de gestion de tâches conçu pour organiser les projets, prioriser les livrables et suivre l’avancement au quotidien. Il permet de regrouper les tâches par projet, d’ajouter des échéances et d’avoir une vue claire de l’état d’avancement.',
    descriptionEn:
      'TaskFlow is a task management dashboard for organizing projects, prioritizing deliverables, and tracking progress on a daily basis. It helps teams group work by project, manage deadlines, and maintain a clear view of progress.',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'API REST'],
    githubLink: 'https://github.com/basemehabajuwe3-cmyk/taskflow-react',
    image: '/images/taskflow.svg',
  },
  {
    title: 'SmartResto',
    description:
      'SmartResto est un système de commande et de gestion de restaurant qui centralise les commandes, les paiements et le suivi du service pour optimiser le quotidien de l’équipe.',
    descriptionEn:
      'SmartResto is a restaurant ordering and management system that centralizes orders, payments, and service tracking to streamline the team’s daily operations.',
    technologies: ['Nuxt', 'Supabase', 'API REST', 'UI/UX'],
    githubLink: 'https://github.com/traorenfamory095-star/smartresto',
    image: '/images/smartresto.svg',
  },
];
