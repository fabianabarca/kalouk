import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "es-ES",
  cleanUrls: true,
  base: "/",

  vite: {
    plugins: [UnoCSS() as any],
    optimizeDeps: {
      include: ["mermaid"],
    },
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
    ["link", { rel: "icon", href: "/K.ico" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/K_icon.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Proyecto", link: "/proyecto" },
      { text: "Diseño", link: "/diseno" },
      { text: "Desarrollo", link: "/desarrollo" },
      { text: "Resultados", link: "/resultados" },
      { text: "Conclusiones", link: "/conclusiones" },
    ],

    sidebar: [
      {
        text: "Proyecto",
        collapsed: true,
        items: [
          { text: "Información general", link: "/proyecto/" },
          { text: "Resumen", link: "/proyecto/resumen" },
          { text: "Antecedentes", link: "/proyecto/antecedentes" },
          {
            text: "Consideraciones pedagógicas",
            link: "/proyecto/consideraciones",
          },
          { text: "Objetivos", link: "/proyecto/objetivos" },
          { text: "Metodología", link: "/proyecto/metodologia" },
        ],
      },
      {
        text: "Diseño",
        collapsed: true,
        items: [
          { text: "Principios", link: "/diseno/" },
          { text: "Requisitos", link: "/diseno/requisitos" },
          { text: "Ecosistema", link: "/diseno/ecosistema" },
          { text: "Docencia", link: "/diseno/docencia" },
          {
            text: "Evaluación",
            collapsed: true,
            items: [
              { text: "Descripción", link: "/diseno/evaluacion" },
              { text: "Pedagógica", link: "/diseno/evaluacion/pedagogica" },
              { text: "Técnica", link: "/diseno/evaluacion/tecnica" },
            ],
          },
        ],
      },
      {
        text: "Desarrollo",
        collapsed: true,
        items: [
          { text: "Descripción", link: "/desarrollo/" },
          {
            text: "Metodología",
            link: "/desarrollo/metodologia",
          },
          { text: "Tecnologías", link: "/desarrollo/tecnologias" },
        ],
      },
      {
        text: "Resultados",
        collapsed: true,
        items: [
          { text: "Resumen", link: "/resultados/" },
          { text: "Kalouk", link: "/resultados/kalouk" },
          { text: "Guía de aplicación", link: "/resultados/guia" },
          {
            text: "Servicios",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/resultados/servicios/" },
              { text: "Kalouk WEB", link: "/resultados/servicios/kalouk-web" },
              { text: "Kalouk MCP", link: "/resultados/servicios/kalouk-mcp" },
            ],
          },
          {
            text: "Interfaces",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/resultados/interfaces/" },
              { text: "Kalouk CLI", link: "/resultados/interfaces/kalouk-cli" },
              { text: "Kalouk JS", link: "/resultados/interfaces/kalouk-js" },
              { text: "Kalouk PY", link: "/resultados/interfaces/kalouk-py" },
              { text: "Kalouk XYZ", link: "/resultados/interfaces/kalouk-xyz" },
              { text: "Kalouk PWA", link: "/resultados/interfaces/kalouk-pwa" },
              { text: "Slidev", link: "/resultados/interfaces/slidev" },
              { text: "VitePress", link: "/resultados/interfaces/vitepress" },
            ],
          },
          {
            text: "Contexto",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/resultados/contexto/" },
              { text: "Kalouk PyX", link: "/resultados/contexto/kalouk-pyx" },
              {
                text: "improbabilidades.com",
                link: "/resultados/contexto/improbabilidades",
              },
              { text: "Proyectos", link: "/resultados/contexto/proyectos" },
            ],
          },
          {
            text: "Evaluación",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/resultados/evaluacion" },
              { text: "Pedagógica", link: "/resultados/evaluacion/pedagogica" },
              { text: "Técnica", link: "/resultados/evaluacion/tecnica" },
            ],
          },
          { text: "Divulgación", link: "/resultados/divulgacion" },
        ],
      },
      {
        text: "Conclusiones",
        collapsed: true,
        items: [
          { text: "Conclusiones", link: "/conclusiones/" },
          { text: "Análisis", link: "/conclusiones/analisis" },
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
        translations: {
          button: {
            buttonText: "Buscar",
            buttonAriaLabel: "Buscar",
          },
          modal: {
            noResultsText: "No se encontraron resultados",
            resetButtonTitle: "Limpiar búsqueda",
            footer: {
              navigateText: "Para navegar",
              selectText: "Para seleccionar",
              closeText: "Para cerrar",
            },
          },
        },
      },
    },
  },
});
