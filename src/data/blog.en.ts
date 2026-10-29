import type { BlogPost } from './blog';

export const englishBlogPosts: BlogPost[] = [
  {
    slug: 'designing-accessible-web-forms',
    title: 'Designing accessible web forms',
    excerpt:
      'Clear labels, understandable errors, and keyboard navigation make forms easier for everyone to use.',
    category: 'Accessibility',
    publishedAt: '2026-10-26',
    tags: ['Accessibility', 'HTML', 'UX'],
    introduction:
      'A form is often the starting point for a sign-up, request, or purchase. A few design choices can make it easier to use, including with a keyboard or screen reader.',
    sections: [
      {
        heading: 'Give every field a label',
        paragraphs: [
          'Placeholder text is not a substitute for a label: it disappears as people type and may not clearly identify the information being requested.',
          'Associate a label with each field using for and id. The field name stays visible and understandable to assistive technologies.',
        ],
      },
      {
        heading: 'Make errors easy to fix',
        paragraphs: [
          'Clearly identify the field and explain how to correct the input. Do not rely on color alone to communicate an error.',
          'Use aria-invalid to indicate an invalid field. Connect it to a nearby error message with aria-describedby.',
        ],
      },
      {
        heading: 'Test the keyboard experience',
        paragraphs: [
          'Navigate the form with Tab and Shift + Tab. Check that focus remains visible and follows the content in a logical order.',
          'Clear labels, logical navigation, and useful messages improve the experience for everyone.',
        ],
      },
    ],
  },
  {
    slug: 'improving-web-page-performance',
    title: 'Improving a web page’s performance',
    excerpt:
      'Measure first, then remove unnecessary resources and optimize images before trying more complex optimizations.',
    category: 'Performance',
    publishedAt: '2026-10-26',
    tags: ['Performance', 'Web', 'Images'],
    introduction:
      'A fast page helps visitors reach content sooner and works better on slow connections. To make meaningful progress, start by finding what is actually slowing the page down.',
    sections: [
      {
        heading: 'Measure before making changes',
        paragraphs: [
          'A browser audit or Lighthouse report can reveal large resources and elements that delay rendering.',
          'Repeat measurements under comparable conditions. One result alone may not distinguish a real improvement from network variation.',
        ],
      },
      {
        heading: 'Optimize images and media',
        paragraphs: [
          'Match image dimensions to their display size, choose an appropriate format, and set width and height to reduce layout shifts.',
          'Lazy loading is useful for images further down the page, but the main image visible immediately should not be delayed.',
        ],
      },
      {
        heading: 'Load only what is needed',
        paragraphs: [
          'Remove scripts and libraries the site does not need. Static components or deferred JavaScript can keep the initial render from being blocked.',
          'After each change, measure again and test the main user journey to ensure the site still works.',
        ],
      },
    ],
  },
  {
    slug: 'organizing-interface-components',
    title: 'Organizing interface components',
    excerpt:
      'Reusable components make products easier to evolve when each component has a clear responsibility and well-chosen props.',
    category: 'Development',
    publishedAt: '2026-10-26',
    tags: ['Components', 'Architecture', 'TypeScript'],
    introduction:
      'Breaking an interface into components can make code easier to understand and maintain. It is most useful when it clarifies each part’s role, not simply when a file gets long.',
    sections: [
      {
        heading: 'Start with a clear responsibility',
        paragraphs: [
          'A component should represent a recognizable part of the interface, such as a card, button, or navigation.',
          'If its props control many unrelated behaviors, that may be a sign that its responsibilities should be split.',
        ],
      },
      {
        heading: 'Choose explicit props',
        paragraphs: [
          'Precise types document the expected data and help catch composition errors earlier.',
          'Name props for their role in the interface. They are easier to review than generic parameters or hard-coded values.',
        ],
      },
      {
        heading: 'Reuse components when it adds consistency',
        paragraphs: [
          'Two similar-looking elements do not always need a shared component. A useful abstraction avoids duplication while remaining easy to understand.',
          'When the same pattern appears in several places, centralizing its markup and styles makes updates easier and preserves consistency.',
        ],
      },
    ],
  },
  {
    slug: 'from-journalism-to-digital',
    title: 'From journalism to digital: telling stories and sharing ideas',
    excerpt:
      'My journalism background introduced me to current affairs, new technologies, and innovation while building skills I now use in digital work.',
    category: 'Background',
    publishedAt: '2026-10-26',
    tags: ['Journalism', 'Technology', 'Communication'],
    introduction:
      'Journalism taught me to explore subjects, find useful information, and make it understandable. That approach also shapes the way I work in digital.',
    sections: [
      {
        heading: 'Exploring different subjects',
        paragraphs: [
          'Throughout my career, I have contributed to news programs and broadcasts covering governance, gender, and the environment. These subjects gave me the opportunity to explore different realities and think about how to present them.',
          'I have also worked with online media and written articles about new technologies and innovation.',
        ],
      },
      {
        heading: 'Learning to communicate an idea',
        paragraphs: [
          'Writing for an audience means choosing what matters, structuring a message, and using accessible language. Clarity and consideration for the reader are essential.',
          'These habits also help me build web interfaces: understanding needs, organizing content, and helping people find what they are looking for.',
        ],
      },
      {
        heading: 'Connecting journalism and digital work',
        paragraphs: [
          'Journalism and web development use different skills, but both aim to communicate information or an idea in a useful way.',
          'Curiosity, research, and communication shape how I approach digital projects alongside my technical skills.',
        ],
      },
    ],
  },
];
