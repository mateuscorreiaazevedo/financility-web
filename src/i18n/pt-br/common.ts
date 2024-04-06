export default {
  metadata: {
    login: 'Financility - Entrar',
    root: 'Financility - Carteira digital',
    descriptions: {
      root: 'Aplicativo de controle financeiro desenvolvido em Next.js 14 por Mateus Correia Azevedo.',
    },
  },
  toggles: {
    theme: {
      title: 'Tema',
      label: {
        light: 'Claro',
        dark: 'Escuro',
        system: 'Sistema',
      },
    },
    locale: {
      title: 'Idioma',
      label: {
        'pt-br': 'Português/BR',
        en: 'Inglês/US',
      },
    },
  },
  footer: {
    right:
      '&copy; {date}: Todos os direitos reservados. Desenvolvido por Mateus Azevedo',

    contact: {
      title: 'Contato',
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
          label: 'Portfólio',
          href: 'https://mateusdev.com.br',
        },
        github: {
          label: 'Github',
          href: 'https://github.com/mateuscorreiaazevedo',
        },
      },
    },
    navigation: {
      title: 'Navegação',
      options: {
        login: {
          label: 'Acessar conta',
          href: '/login',
        },
        register: {
          label: 'Registre-se',
          href: '/register',
        },
      },
    },
  },
}
