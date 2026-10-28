# Portfolio de Sammy Habajuwe

Portfolio personnel bilingue (français et anglais) réalisé avec Astro et Tailwind CSS. Il comprend une page d’accueil, une présentation, des projets, un blog statique traduit et des formulaires de contact Formspree compatibles avec Vercel.

Les pages françaises conservent leurs URL existantes. La version anglaise est disponible sous `/en/`.

## Déploiement Vercel et formulaires Formspree

1. Créez deux formulaires dans [Formspree](https://formspree.io/) (un par langue), vérifiez l’adresse de réception et configurez une redirection vers les pages de remerciement du site après l’envoi.
2. Dans les paramètres Vercel du projet, ajoutez ces variables d’environnement avec les URL `https://formspree.io/f/...` fournies par Formspree :
   - `PUBLIC_FORMSPREE_ENDPOINT_FR`
   - `PUBLIC_FORMSPREE_ENDPOINT_EN`
3. Activez-les pour les environnements de déploiement souhaités, puis redéployez le site.
4. Envoyez un message test depuis chaque langue et vérifiez sa réception.

Pour tester localement, renseignez les mêmes variables dans un fichier `.env` non versionné :

```env
PUBLIC_FORMSPREE_ENDPOINT_FR=https://formspree.io/f/votreIdentifiantFrancais
PUBLIC_FORMSPREE_ENDPOINT_EN=https://formspree.io/f/votreIdentifiantAnglais
```

Les URL Formspree sont des identifiants de formulaires publics, pas des clés secrètes. Ne mettez aucune clé privée dans le code. Si une URL n’est pas configurée, le site affiche un lien e-mail de secours plutôt qu’un formulaire qui échoue silencieusement.

## Prérequis

- Node.js `>=22.23.4`
- npm

## Installation et développement

```sh
npm install
npm run dev
```

Le serveur de développement Astro est disponible à l’adresse indiquée dans le terminal (par défaut `http://localhost:4321`). Sans configuration Formspree, la page contact affiche un lien e-mail de secours.

## Vérification et production

```sh
npm run build
npm run preview
```

Les pages statiques générées se trouvent dans `dist/`.
