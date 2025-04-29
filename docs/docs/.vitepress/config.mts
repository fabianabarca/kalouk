import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  
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
          { text: 'Antecedentes', link: '/diseno/antecedentes' },
          { text: 'Justificación', link: '/diseno/justificacion' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
