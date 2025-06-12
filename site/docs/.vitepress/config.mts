import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "es-ES",
  cleanUrls: true,
  base: "/kalouk/",

  vite: {
    plugins: [UnoCSS()],
  },

  title: "Kalouk",
  description: "Componentes web para matemáticas y programación",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/K_icon.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Resumen", link: "/resumen" },
      { text: "Proyecto", link: "/proyecto" },
      { text: "Diseño", link: "/diseno" },
      { text: "Desarrollo", link: "/desarrollo" },
      { text: "Contenidos", link: "/contenidos" },
      { text: "Resultados", link: "/resultados" },
      { text: "Conclusiones", link: "/conclusiones" },
    ],

    sidebar: [
      {
        text: "Proyecto",
        collapsed: true,
        items: [
          { text: "Proyecto", link: "/proyecto/" },
          { text: "Antecedentes", link: "/proyecto/antecedentes" },
          { text: "Objetivos", link: "/proyecto/objetivos" },
        ],
      },
      {
        text: "Diseño",
        collapsed: true,
        items: [
          { text: "Diseño", link: "/diseno/" },
          { text: "Características", link: "/diseno/caracteristicas" },
          { text: "Docencia", link: "/diseno/docencia" },
        ],
      },
      {
        text: "Desarrollo",
        collapsed: true,
        items: [
          { text: "Desarrollo", link: "/desarrollo/" },
          { text: "Metodología", link: "/desarrollo/metodologia" },
          { text: "Tecnologías", link: "/desarrollo/tecnologias" },
        ],
      },
      {
        text: "Contenidos",
        collapsed: true,
        items: [
          { text: "Contenidos", link: "/contenidos/" },
          { text: "Metodología", link: "/contenidos/clases" },
          { text: "Tecnologías", link: "/contenidos/guia" },
        ],
      },
      {
        text: "Resultados",
        collapsed: true,
        items: [
          { text: "Resultados", link: "/resultados/" },
          { text: "Metodología", link: "/resultados/evaluacion" },
          { text: "Tecnologías", link: "/resultados/analisis" },
        ],
      },
      {
        text: "Conclusiones",
        collapsed: true,
        items: [
          { text: "Conclusiones", link: "/conclusiones/" },
          { text: "Agradecimientos", link: "/conclusiones/agradecimientos" },
          { text: "Referencias", link: "/conclusiones/referencias" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/fabianabarca/kalouk" },
    ],
    outlineTitle: "En esta página",
    lastUpdatedText: "Última actualización",
    darkModeSwitchLabel: "Apariencia",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
    returnToTopLabel: "Volver arriba",
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },
    search: {
      provider: "local",
      options: {
        placeholder: "Buscar",
      },
    },
  },
});
