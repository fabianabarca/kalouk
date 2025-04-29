import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  cleanUrls: true,
  base: '/kalouk/',

  title: "Kalouk",
  description: "Una plataforma de contenidos de matemática y programación",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Resumen', link: '/resumen' },
      { text: 'Diseño', link: '/diseno' },
      { text: 'Desarrollo', link: '/desarrollo' },
      { text: 'Resultados', link: '/resultados' }
    ],

    sidebar: [
      {
        text: 'Diseño',
        items: [
          { text: 'Introducción', link: '/diseno' },
          { text: 'Antecedentes', link: '/diseno/antecedentes' },
          { text: 'Justificación', link: '/diseno/justificacion' }
        ]
      },
      {
        text: 'Desarrollo',
        items: [
          { text: 'Introducción', link: '/desarrollo' },
          { text: 'Tecnologías', link: '/desarrollo/tecnologias' },
          { text: 'Interactividad', link: '/desarrollo/interactividad' }
        ]
      },
      {
        text: 'Resultados',
        items: [
          { text: 'Introducción', link: '/resultados' },
          { text: 'Resultados', link: '/resultados/resultados' },
          { text: 'Conclusiones', link: '/resultados/conclusiones' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fabianabarca/kalouk' }
    ],
    outlineTitle: 'En esta página',
    lastUpdatedText: 'Última actualización',
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',
    returnToTopLabel: 'Volver arriba',
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    search: {
      placeholder: 'Buscar'
    }
  }
})
