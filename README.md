# Portfolio Sammy Habajuwe

<p align="center">
  <img src="https://img.shields.io/badge/Astro-7.4.2-FF5D01?style=for-the-badge&logo=astro" alt="Astro" />
  <img src="https://img.shields.io/badge/Tailwind-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
</p>

Portfolio personnel bilingue construit avec Astro et Tailwind CSS. Il présente les projets, la bio, les compétences et les moyens de contact de Sammy Habajuwe.

Personal bilingual portfolio built with Astro and Tailwind CSS. It presents Sammy Habajuwe’s projects, bio, skills, and contact details.

---

## FR | Français

### Aperçu

Ce projet sert de portfolio personnel pour mettre en avant :

- les projets réalisés,
- les compétences techniques,
- l’expérience et la valeur ajoutée,
- les moyens de contact pour collaboration ou mission.

### Fonctionnalités

- Page d’accueil moderne et cohérente
- Section À propos avec présentation personnelle
- Portfolio de projets avec cartes détaillées
- Section compétences et stack technique
- Navigation disponible en français et en anglais
- Bouton de bascule entre les thèmes clair et sombre, avec préférence mémorisée
- Page contact avec formulaire configurable via Formspree
- Redirection après envoi du formulaire
- Design responsive et compatible mobile

### Stack technique

- Astro
- Tailwind CSS
- TypeScript
- Formspree

### Prérequis

- Node.js `>=22.23.4`
- npm

### Installation

```bash
npm install
```

### Lancer le projet en local

```bash
npm run dev
```

Le site est normalement disponible sur :

```text
http://localhost:4321
```

### Configuration du formulaire de contact

Le formulaire utilise des endpoints Formspree. Créez un fichier `.env` à la racine du projet :

```env
PUBLIC_FORMSPREE_ENDPOINT_FR=https://formspree.io/f/votreIdentifiantFrancais
PUBLIC_FORMSPREE_ENDPOINT_EN=https://formspree.io/f/votreIdentifiantAnglais
```

Remarques importantes :

- ce sont des identifiants publics de formulaire, pas des clés secrètes ;
- si aucune variable n’est définie, le formulaire ouvre la messagerie de l’utilisateur avec le message prérempli ; l’envoi reste à confirmer dans cette messagerie.

### Build de production

```bash
npm run build
npm run preview
```

Les fichiers générés sont stockés dans le dossier `dist/`.

### Structure du projet

```text
Portfolio-Sammy/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── package.json
├── astro.config.mjs
├── README.md
└── .env.example
```

---

## EN | English

### Overview

This project is a personal portfolio designed to highlight :

- completed projects,
- technical skills,
- professional profile,
- and contact channels for collaborations or work opportunities.

### Features

- Modern and clean landing page
- About section with personal presentation
- Project portfolio with detail cards
- Skills section and technology stack
- French and English language switching
- Light and dark theme toggle with a saved preference
- Contact page with configurable Formspree form
- Redirect page after form submission
- Responsive design for mobile and desktop

### Tech stack

- Astro
- Tailwind CSS
- TypeScript
- Formspree

### Requirements

- Node.js `>=22.23.4`
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The site is usually available at:

```text
http://localhost:4321
```

### Contact form configuration

The contact form uses Formspree endpoints. Create a `.env` file in the project root:

```env
PUBLIC_FORMSPREE_ENDPOINT_FR=https://formspree.io/f/yourFrenchFormId
PUBLIC_FORMSPREE_ENDPOINT_EN=https://formspree.io/f/yourEnglishFormId
```

Important notes:

- these are public form identifiers, not secret keys;
- if no variable is set, the form opens the user's email app with the message prefilled; the user must confirm sending from that app.

### Production build

```bash
npm run build
npm run preview
```

Generated files are stored in the `dist/` directory.

### Project structure

```text
Portfolio-Sammy/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── package.json
├── astro.config.mjs
├── README.md
└── .env.example
```

---

## License

This project is intended for personal use and portfolio showcase purposes.

Ce projet est destiné à un usage personnel et à la mise en valeur d’un portfolio.
