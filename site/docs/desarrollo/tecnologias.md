# Tecnologías

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob2|Me1` Especificación de las **tecnologías** a utilizar

:::

## Selección tecnológica

| Tecnología | Dominio        | Descripción                                        |
| ---------- | -------------- | -------------------------------------------------- |
| **Python** | _Programación_ | Lenguaje de programación de alto nivel.            |
| **Django** | _Backend_      | Plataforma de desarrollo web basado en Python.     |
| **Vue**    | _Frontend_     | Plataforma de desarrollo web basado en JavaScript. |
| **Slidev** | _Frontend_     | Plataforma de presentaciones basado en Vue.        |
| **Nuxt**   | _Frontend_     | Plataforma de desarrollo web basado en Vue.        |

## <span class="i-simple-icons-task"></span> Slidev

Slidev es una plataforma moderna de presentaciones construida sobre Vue que combina la simplicidad de Markdown (lenguaje de edición de texto) con el poder de las tecnologías web. A diferencia de las herramientas tradicionales de presentaciones, Slidev permite crear diapositivas interactivas usando código, ecuaciones matemáticas, diagramas y componentes web dinámicos. Para el ecosistema de este proyecto, Slidev representa una pieza fundamental al ofrecer un entorno nativo para presentaciones educativas que puede ser integrado perfectamente con contenido matemático, visualizaciones de datos y elementos interactivos de programación, según los objetivos planteados y como fue analizado en los [requisitos del sistema](/diseno/requisitos.md).

La flexibilidad de Slidev permite crear _layouts_ (diagramaciones) especializados para diferentes tipos de contenido educativo, desde ecuaciones complejas hasta demostraciones de código en vivo. Su arquitectura basada en Vue facilita la **extensión** con componentes personalizados, mientras que su integración con herramientas como UnoCSS, Vite y Mermaid asegura un **flujo de trabajo** eficiente y presentaciones de alta calidad visual.

Por ejemplo, el siguiente código de **Markdown**:

```markdown
---
layout: equation
---

# Distribución exponencial

::equation::

$$
f_X(x) =
\begin{cases}
\lambda e^{-\lambda x} & x \geq 0 \\
0 & x < 0
\end{cases}
$$

::bottom::

donde $f_X(x)$ es la función de densidad y $\lambda > 0$ es el parámetro, conocido como _tasa_ o _escala inversa_.
```

genera la siguiente diapositiva, diseñada para este proyecto:

![Diapositiva de ecuación](/equation.png)

**Características clave para el proyecto**

- <span class="i-simple-icons-unocss"></span> UnoCSS: sistema de CSS utilitario para estilos consistentes
- <span class="i-simple-icons-markdown"></span> Markdown: sintaxis simple para contenido estructurado
- <span class="i-simple-icons-vite"></span> Vite: herramienta de construcción rápida y moderna
- <span class="i-simple-icons-mermaid"></span> Mermaid: diagramas y gráficos declarativos

::: tip Sustitución de Reveal.js

La sustitución de Reveal.js por Slidev fue un paso determinante en el proyecto, que permitió ampliar los horizontes de aplicación y

:::

## <span class="i-simple-icons-python"></span> Python

Dentro de este curso de estadística y probabilidad, Python es utilizado para cálculo numérico, computación científica y análisis y visualización de datos. Actualmente el curso tiene una serie de tutoriales para aprender el uso básico del lenguaje y la mayoría de la evaluación está basada en asignaciones de programación.

Algunas librerías de Python de interés para el sistema propuesto y para el curso son:

- <span class="i-simple-icons-numpy"></span> **NumPy**: el paquete fundamental de Python para la computación científica.
- <span class="i-simple-icons-scipy"></span> **SciPy**: un ecosistema de software para matemáticas, ciencia e ingeniería, y que incluye módulos de estadística con muchas herramientas para el curso.
- <span class="i-simple-icons-pandas"></span> **Pandas**: una herramienta de análisis y manipulación de datos.

## <span class="i-simple-icons-django"></span> Django

Una razón para elegir Django para desarrollo web es que se trata del mismo lenguaje Python, lo que hace más sencilla la integración con las librerías anteriores. Además, Django facilita la implementación de, por ejemplo, bases de datos y el registro de usuarios, que son necesarios para el sistema propuesto.

## <span class="i-simple-icons-javascript"></span> JavaScript / <span class="i-simple-icons-typescript"></span> TypeScript

JavaScript es el lenguaje fundamental de la web, y TypeScript la evolución que proporciona mayor robustez y mantenibilidad del código. La elección de este ecosistema tecnológico es estratégica para el proyecto, ya que permite aprovechar la vasta cantidad de librerías especializadas para visualización de datos, matemáticas y desarrollo educativo que han sido desarrolladas por la comunidad web.

## <span class="i-simple-icons-vuedotjs"></span> Vue

Vue es un _framework_ progresivo de JavaScript para la construcción de interfaces de usuario interactivas. Como una de las principales tecnologías de desarrollo web frontend junto con React, Angular y Svelte, Vue proporciona un ecosistema robusto de herramientas modernas que permiten crear aplicaciones web dinámicas y reactivas (es decir, que _reaccionan_ a la interacción). Su arquitectura basada en componentes y su curva de aprendizaje gradual lo convierten en una opción ideal para desarrollar interfaces educativas complejas pero accesibles.

## <span class="i-simple-icons-nuxt"></span> Nuxt

Nuxt es un meta-_framework_ construido sobre Vue que proporciona una estructura completa para el desarrollo de aplicaciones web modernas. Ofrece características avanzadas como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), optimización automática del rendimiento y un sistema de módulos extensible. Para el ecosistema de este proyecto, Nuxt facilita la creación de aplicaciones web educativas con excelente rendimiento y experiencia de usuario, especialmente importante para plataformas de aprendizaje que requieren carga rápida y navegación fluida.
