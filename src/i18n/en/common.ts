export default {
  metadata: {
    login: 'Financility - Login',
    root: 'Financility - Digital wallet',
    descriptions: {
      root: 'App of finance control development in Next.js 14 by Mateus Correia Azevedo.',
    },
  },
  toggles: {
    theme: {
      title: 'Theme',
      label: {
        light: 'Light',
        dark: 'Dark',
        system: 'System',
      },
    },
    locale: {
      title: 'Language',
      label: {
        'pt-br': 'Portuguese/BR',
        en: 'English/US',
      },
    },
  },
  footer: {
    right: '&copy; {date}: All rights reserved. Developed by Mateus Azevedo',
    contact: {
      title: 'Contact',
      options: {
        insta: {
          label: 'Instagram',
          href: 'https://instagram.com/mateuscorreiaazevedo',
        },
        linkedin: {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/mateuscorreiaazevedo',
        },
        portfolio: {
          label: 'My site',
          href: 'https://mateusdev.com.br',
        },
        github: {
          label: 'Github',
          href: 'https://github.com/mateuscorreiaazevedo',
        },
      },
    },
    navigation: {
      title: 'navigation',
      options: {
        login: {
          label: 'Access your account',
          href: '/login',
        },
        register: {
          label: 'Register',
          href: '/register',
        },
      },
    },
  },
}
