export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  tags: string[];
  introduction: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'concevoir-formulaires-accessibles',
    title: 'Concevoir des formulaires web accessibles',
    excerpt:
      'Des libellés explicites, des erreurs compréhensibles et une navigation au clavier rendent les formulaires plus simples pour tout le monde.',
    category: 'Accessibilité',
    publishedAt: '2026-10-26',
    tags: ['Accessibilité', 'HTML', 'UX'],
    introduction:
      'Un formulaire est souvent le point de départ d’une inscription, d’une demande ou d’un achat. Quelques choix de conception permettent de le rendre plus facile à utiliser, y compris avec un clavier ou un lecteur d’écran.',
    sections: [
      {
        heading: 'Associer un libellé à chaque champ',
        paragraphs: [
          'Un texte indicatif placé dans un champ ne remplace pas son libellé : il disparaît à la saisie et n’identifie pas toujours clairement l’information demandée.',
          'Utilisez un élément label associé au champ avec for et id. Le nom du champ reste ainsi visible et compréhensible par les technologies d’assistance.',
        ],
      },
      {
        heading: 'Rendre les erreurs faciles à corriger',
        paragraphs: [
          'Indiquez clairement le champ concerné et expliquez comment corriger la saisie. Évitez de signaler une erreur uniquement avec une couleur.',
          'Pour un champ invalide, aria-invalid peut signaler son état. aria-describedby peut le relier à un message d’erreur affiché à proximité.',
        ],
      },
      {
        heading: 'Vérifier le parcours au clavier',
        paragraphs: [
          'Parcourez le formulaire avec Tab et Maj + Tab, puis vérifiez que le focus reste visible et que l’ordre de navigation suit le contenu.',
          'Des libellés explicites, un ordre logique et des messages utiles améliorent l’expérience de l’ensemble des utilisateurs.',
        ],
      },
    ],
  },
  {
    slug: 'ameliorer-performance-page-web',
    title: 'Améliorer la performance d’une page web',
    excerpt:
      'Commencez par mesurer, puis réduisez les ressources inutiles et optimisez les images avant de chercher des optimisations complexes.',
    category: 'Performance',
    publishedAt: '2026-10-26',
    tags: ['Performance', 'Web', 'Images'],
    introduction:
      'Une page rapide aide les visiteurs à accéder plus vite au contenu et fonctionne mieux sur les connexions lentes. Pour progresser efficacement, commencez par identifier ce qui ralentit réellement la page.',
    sections: [
      {
        heading: 'Mesurer avant de modifier',
        paragraphs: [
          'Un audit avec les outils du navigateur ou Lighthouse donne un premier aperçu des ressources lourdes et des éléments qui retardent l’affichage.',
          'Répétez les mesures dans des conditions comparables. Une seule mesure ne suffit pas toujours à distinguer une amélioration réelle des variations du réseau.',
        ],
      },
      {
        heading: 'Optimiser les images et les médias',
        paragraphs: [
          'Adaptez les dimensions de chaque image à son affichage, choisissez un format adapté et renseignez width et height pour limiter les déplacements de mise en page.',
          'Le chargement différé convient aux images situées plus bas dans la page, mais l’image principale visible immédiatement ne devrait pas être retardée.',
        ],
      },
      {
        heading: 'Charger seulement ce qui est utile',
        paragraphs: [
          'Réduisez les scripts et bibliothèques dont le site n’a pas besoin. Des composants statiques ou du JavaScript différé peuvent éviter de bloquer l’affichage initial.',
          'Après chaque changement, vérifiez à nouveau les mesures et testez le parcours principal pour vous assurer que le site reste fonctionnel.',
        ],
      },
    ],
  },
  {
    slug: 'organiser-composants-interface',
    title: 'Organiser les composants d’une interface',
    excerpt:
      'Des composants réutilisables facilitent les évolutions, à condition de leur donner une responsabilité claire et des propriétés bien choisies.',
    category: 'Développement',
    publishedAt: '2026-10-26',
    tags: ['Composants', 'Architecture', 'TypeScript'],
    introduction:
      'Découper une interface en composants peut rendre le code plus facile à comprendre et à faire évoluer. Le découpage est utile lorsqu’il clarifie le rôle de chaque partie, pas simplement parce qu’un fichier devient long.',
    sections: [
      {
        heading: 'Commencer par une responsabilité claire',
        paragraphs: [
          'Un composant devrait représenter un élément compréhensible de l’interface, comme une carte, un bouton ou une navigation.',
          'Si ses propriétés contrôlent de nombreux comportements sans rapport, c’est souvent le signe qu’il faudrait séparer ses responsabilités.',
        ],
      },
      {
        heading: 'Définir des propriétés explicites',
        paragraphs: [
          'Des types précis documentent les données attendues et permettent de détecter plus tôt les erreurs de composition.',
          'Privilégiez des propriétés nommées selon leur rôle dans l’interface. Elles sont plus faciles à relire que des paramètres génériques ou des valeurs codées en dur.',
        ],
      },
      {
        heading: 'Réutiliser quand cela apporte de la cohérence',
        paragraphs: [
          'Deux éléments proches visuellement ne nécessitent pas toujours un composant commun. Une abstraction utile évite les duplications tout en restant simple à comprendre.',
          'Quand le même motif apparaît à plusieurs endroits, centraliser son balisage et son style peut faciliter les corrections et préserver la cohérence du site.',
        ],
      },
    ],
  },
  {
    slug: 'journalisme-technologies-innovation',
    title: 'Du journalisme au numérique : raconter, comprendre et transmettre',
    excerpt:
      'Mon parcours en journalisme m’a amené à explorer l’actualité, les nouvelles technologies et l’innovation, tout en développant des compétences utiles dans le numérique.',
    category: 'Parcours',
    publishedAt: '2026-10-26',
    tags: ['Journalisme', 'Technologies', 'Communication'],
    introduction:
      'Mon expérience en journalisme m’a appris à m’intéresser aux sujets, à rechercher les informations utiles et à les rendre compréhensibles. Cette démarche accompagne aussi mon travail dans le numérique.',
    sections: [
      {
        heading: 'Explorer des sujets variés',
        paragraphs: [
          'Au fil de mon parcours, j’ai participé à la production de journaux et d’émissions consacrés notamment à la gouvernance, au genre et à l’environnement. Ces sujets m’ont donné l’occasion d’aborder des réalités différentes et de réfléchir à la manière de les présenter.',
          'J’ai également collaboré avec la presse en ligne et rédigé des articles autour des nouvelles technologies et de l’innovation.',
        ],
      },
      {
        heading: 'Apprendre à transmettre une idée',
        paragraphs: [
          'Écrire pour un public demande de choisir les informations importantes, de structurer son propos et d’employer des mots accessibles. La clarté et l’attention au lecteur sont essentielles.',
          'Ces réflexes me servent aussi dans la création d’interfaces web : comprendre le besoin, organiser le contenu et aider les personnes à trouver facilement ce qu’elles cherchent.',
        ],
      },
      {
        heading: 'Faire dialoguer journalisme et numérique',
        paragraphs: [
          'Le journalisme et le développement web mobilisent des compétences différentes, mais ils partagent un même souci : transmettre une information ou une idée de façon utile.',
          'La curiosité, la recherche et la communication nourrissent ainsi ma façon d’aborder les projets numériques, en complément de mes compétences techniques.',
        ],
      },
    ],
  },
];
