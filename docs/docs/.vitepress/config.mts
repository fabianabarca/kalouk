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
    logo: '/K_icon.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Resumen', link: '/resumen' },
      { text: 'Planteamiento', link: '/planteamiento' },
      { text: 'Desarrollo', link: '/desarrollo' },
      { text: 'Resultados', link: '/resultados' },
      { text: 'Guía', link: '/guia' },
      { text: 'Sobre el proyecto', link: '/sobre' }
    ],

    sidebar: [
      {
        text: 'Parte I',
        items: [
          { text: 'Planteamiento', link: '/planteamiento' },
          { text: 'Justificación', link: '/planteamiento/justificacion' },
          { text: 'Diseño', link: '/planteamiento/diseno' },
          { text: 'Objetivos', link: '/objetivos' }
        ]
      },
      {
        text: 'Parte II',
        items: [
          { text: 'Desarrollo', link: '/desarrollo' },
          { text: 'Pedagogía', link: '/desarrollo/pedagogia' },
          { text: 'Tecnologías', link: '/desarrollo/tecnologias' }
        ]
      },
      {
        text: 'Parte III',
        items: [
          { text: 'Resultados', link: '/resultados' },
          { text: 'Análisis', link: '/resultados/analisis' },
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
