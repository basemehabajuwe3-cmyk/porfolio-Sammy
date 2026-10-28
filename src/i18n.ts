export type Locale = 'fr' | 'en';

const routePairs: [string, string][] = [
  ['/', '/en/'],
  ['/projets', '/en/projects'],
  ['/a-propos', '/en/about'],
  ['/contact', '/en/contact'],
  ['/merci', '/en/thank-you'],
  ['/blog', '/en/blog'],
  ['/blog/concevoir-formulaires-accessibles', '/en/blog/designing-accessible-web-forms'],
  ['/blog/ameliorer-performance-page-web', '/en/blog/improving-web-page-performance'],
  ['/blog/organiser-composants-interface', '/en/blog/organizing-interface-components'],
  ['/blog/journalisme-technologies-innovation', '/en/blog/from-journalism-to-digital'],
];

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const route = routePairs.find(([frenchPath, englishPath]) =>
    locale === 'fr'
      ? englishPath.replace(/\/+$/, '') === normalizedPath
      : frenchPath.replace(/\/+$/, '') === normalizedPath,
  );

  if (route) {
    return locale === 'fr' ? route[0] : route[1];
  }

  return locale === 'fr' ? '/' : '/en/';
}

export const navigation = {
  fr: [
    { label: 'Accueil', path: '/' },
    { label: 'Projets', path: '/projets' },
    { label: 'Blog', path: '/blog' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ],
  en: [
    { label: 'Home', path: '/en/' },
    { label: 'Projects', path: '/en/projects' },
    { label: 'Blog', path: '/en/blog' },
    { label: 'About', path: '/en/about' },
    { label: 'Contact', path: '/en/contact' },
  ],
} satisfies Record<Locale, { label: string; path: string }[]>;
