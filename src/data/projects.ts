export interface Project {
  title: string;
  description: string;
  descriptionEn: string;
  contribution?: string;
  contributionEn?: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Quizzy',
    description:
      'Quizzy est une application de quiz interactive et chronométrée réalisée en équipe de 12 contributeurs. Le joueur choisit son pseudo, une catégorie et une difficulté, puis répond aux questions avant la fin du chronomètre. L’application affiche le score et le détail des réponses, conserve l’historique des parties et propose un éditeur de questions ainsi que des réglages. Les données sont stockées dans le navigateur, sans serveur ni base de données.',
    descriptionEn:
      'Quizzy is a timed interactive quiz app built by a team of 12 contributors. Players choose a nickname, category, and difficulty, then answer questions before the timer runs out. The app displays scores and answer reviews, keeps a game history, and includes a question editor and settings. Data is stored in the browser, with no server or database.',
    contribution:
      'Responsable du classement : affichage des 10 meilleurs scores, triés par score puis par rapidité en cas d’égalité. Chaque entrée présente le rang, le pseudo, le score, la catégorie et la date ; le classement reste sauvegardé dans le navigateur.',
    contributionEn:
      'Responsible for the leaderboard: displaying the top 10 scores, sorted by score and then by completion time in case of a tie. Each entry shows the rank, nickname, score, category, and date; the leaderboard persists in the browser.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'sessionStorage'],
    githubLink: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26',
    image: '/images/Quiz.jpg',
  },
  {
    title: 'TaskFlow',
    description:
      'TaskFlow est une application de gestion de projets et de tâches réalisée individuellement avec React. Elle permet de créer et organiser des projets, gérer leurs tâches et leurs échéances, faire évoluer leur statut, puis retrouver rapidement le travail grâce à la recherche, aux filtres et au tri. Un tableau de bord synthétise l’avancement avec des statistiques calculées à partir des données. Les échanges avec les données passent par une API REST simulée avec JSON Server.',
    descriptionEn:
      'TaskFlow is an individually built React project and task management app. It lets users create and organize projects, manage tasks and deadlines, update task statuses, and find work using search, filters, and sorting. A dashboard summarizes progress with statistics calculated from the data. Data is accessed through a REST API simulated with JSON Server.',
    technologies: ['React', 'Vite', 'React Router', 'JSON Server', 'API REST'],
    githubLink: 'https://github.com/basemehabajuwe3-cmyk/taskflow-react',
    image: '/images/Taskflow1.jpg',
  },
  {
    title: 'SmartResto',
    description:
      'SmartResto est une application de gestion de restaurant développée en équipe de 10 personnes avec Nuxt.js. Elle couvre les opérations du restaurant, de la gestion des commandes et du stock à la facturation et aux rapports de vente. Le projet utilise une API REST simulée avec JSON Server et chaque membre est responsable d’un module.',
    descriptionEn:
      'SmartResto is a restaurant management app developed by a team of 10 using Nuxt.js. It covers restaurant operations, from order and inventory management to billing and sales reports. The project uses a REST API simulated with JSON Server, with each team member responsible for a module.',
    contribution:
      'Mission confiée : gérer les fournisseurs et les approvisionnements. Le module prévoit la création et le suivi des fournisseurs, la préparation des commandes d’achat et leur réception, qui met à jour le stock et enregistre les mouvements correspondants.',
    contributionEn:
      'Assigned mission: manage suppliers and procurement. The module covers supplier records, purchase orders, and receiving deliveries, which updates inventory and records the corresponding stock movements.',
    technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JSON Server', 'Vitest'],
    githubLink: 'https://github.com/traorenfamory095-star/smartresto',
    image: '/images/Smartresto.jpg',
  },
];
