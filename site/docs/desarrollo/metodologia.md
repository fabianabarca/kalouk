# Metodología de desarrollo

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob2|Me3` Preparación de la **documentación** del proyecto
- `Ob2|Me2` Comparación y selección de **metodologías** de desarrollo de software

:::

**Resumen**

| Herramienta               | Selección              |
| ------------------------- | ---------------------- |
| Metodología de desarrollo | **FDD**                |
| Repositorio remoto        | **GitHub**             |
| Gestión de proyectos      | **GitHub Projects**    |
| Entorno de desarrollo     | **Visual Studio Code** |
| Documentación             | **VitePress**          |
| Servidor de pruebas       | **DigitalOcean**       |

Hay más detalles sobre la selección de las herramientas y la metodología de desarrollo en las siguientes secciones.

## Documentación del proyecto

Esta página web representa la documentación del proyecto. Está desarrollada con [VitePress](https://vitepress.dev/), un generador de sitios web estáticos basado en componentes Vue, los mismos utilizados en el sistema (ver [tecnologías](/desarrollo/tecnologias.md)).

## Metodologías de desarrollo de software

Existen varios tipos de desarrollo de software de uso común:

- Metodología de desarrollo ágil (_Agile_)
- Metodología de desarrollo en cascada (_Waterfall_)
- Desarrollo _lean_
- Modelo de prototipo
- Desarrollo rápido de aplicaciones (RAD, _Rapid Application Development_)
- Modelo de sistemas dinámicos
- Desarrollo basado en funcionalidades (FDD, _Feature Driven Development_)
- Desarrollo _scrum_

Sin entrar en los detalles de cada una, las principales diferencias radican en la **iteración** del desarrollo del producto, en la **interacción** entre las **partes involucradas** y en la **estructuración** del proyecto. Más específicamente:

- **Iteración**: varía la existencia o no de procesos iterativos, el tipo y la frecuencia de las iteraciones del producto y los tiempos dedicados a cada proceso.
- **Interacción entre las partes**: varía el tipo y la frecuencia de la comunicación entre las partes involucradas -desarrolladores, líderes, dueños del producto, clientes y otros- con el fin de evaluar los prototipos o el producto final.
- **Estructuración**: varía el conocimiento de los requerimientos previos del producto, lo que causa que algunos métodos sean, por un lado, menos estructurados y basados en la iteración para entender mejor el producto y, por otro lado, más estructurados, que no requieren tantas iteraciones ni interacciones para validar su progreso.

Como ejemplo, en un extremo está la metodología lineal o "en cascada" clásica (_waterfall_), que es altamente estructurada y los requerimientos están bien especificados desde el principio. Tiene mínimas _iteraciones_ hasta llegar a un producto completo y no existe mucha _interacción_ entre las partes -típicamente los clientes no participan sino en el principio y en el final del desarrollo-.

En el otro extremo están las metodologías "ágiles", que son poco estructuradas y hay mucha incertidumbre sobre los requerimientos. Hay iteraciones muy frecuentes y existe comunicación constante con los clientes o un representante de ellos, quienes prueban versiones tempranas de desarrollo.

::: info Características del sistema

En nuestro caso tenemos un producto cuyas características son bien conocidas _a priori_ pero que requiere constante evaluación de las nuevas características implementadas. Nuestros "clientes" (estudiantes), sin embargo, no serán parte del desarrollo sino hasta etapas más avanzadas. En ese sentido, nuestro proyecto es de **alta iteración, baja interacción y alta estructuración**, con un equipo pequeño de desarrollo.

:::

#### Selección de la metodología: FDD

Para estas características sería apropiada una metodología híbrida, como el **desarrollo basado en funcionalidades** (**FDD**, _Feature Driven Development_), que se considera una metodología "ágil", pero más estructurada que otras, ya que proporciona una guía más detallada para el desarrollo del software.

FDD tiene cinco etapas:

1. Desarrollar un modelo global
2. Construir una lista de funcionalidades o características
3. Planificar por funcionalidad
4. Diseñar por funcionalidad
5. Construir por funcionalidad

Aparte de las características descritas arriba, otros criterios de selección de la metodología y de las herramientas para nuestro proyecto fueron, en parte, su popularidad (en términos de recursos disponibles, que facilita la solución de problemas y dudas) y la familiaridad con el uso (según la experiencia de las personas involucradas en el desarrollo, lo que reduce el tiempo de aprendizaje).

::: tip ¿Qué es FDD?

Una metodología ágil de desarrollo de software centrada en entregar funcionalidades incrementales, por medio del trabajo en iteraciones cortas y enfocadas en entregas de funcionalidades específicas. La metodología promueve el desarrollo de una lista de características prioritarias para el proyecto, lo que nos permite crear una hoja de ruta clara.

:::

En nuestro caso, estas funcionalidades están basadas en la lista de características del primer objetivo específico.

## Otras herramientas

### _Repositorio remoto_ <span class="i-simple-icons-github"></span> GitHub

Una plataforma basada en web para el control de versiones y la colaboración que es ampliamente utilizada en el desarrollo de software. Nos permite compartir código, hacer seguimiento de cambios y colaborar en distintas "ramas" del proyecto.

### _Gestión de proyectos_ <span class="i-simple-icons-githubactions"></span> GitHub Projects

Una herramienta de gestión de proyectos que permite el desarrollo _Agile_, incluyendo metodologías _Scrum_, _Kanban_ y FDD. Esto nos ayudará a planificar, hacer seguimiento y gestionar el trabajo, además de dar visibilidad en tiempo real sobre el progreso y los problemas.

### _Entorno de desarrollo_ <span class="i-simple-icons-visualstudiocode"></span> Visual Studio Code

Un editor de código con una variedad de características y extensiones para el desarrollo de sitios web. Admite múltiples lenguajes de programación, tiene herramientas de depuración integradas y proporciona características como autocompletado y refactorización de código. Además, nos va a permitir utilizar herramientas de asistencia con inteligencia artificial.

### _Documentación_ <span class="i-simple-icons-vitepress"></span> VitePress

Un generador de sitios estáticos basado en Vue.js que permite crear documentación técnica de manera sencilla y rápida. Es fácil de usar y tiene una buena integración con GitHub, lo que facilita la publicación de la documentación en el repositorio.

### _Servidor de pruebas_ <span class="i-simple-icons-digitalocean"></span> DigitalOcean

Un proveedor de servicios en la nube que ofrece servidores virtuales (_droplets_) para alojar aplicaciones web. Nos permite desplegar y probar el sitio web en un entorno real antes de su lanzamiento.
