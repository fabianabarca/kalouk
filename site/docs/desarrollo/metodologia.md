# Metodología de desarrollo

::: info Puntos clave

- Puntos clave
- Síntesis

:::

- Comparación y selección de **metodología** de desarrollo de software
- Preparación de la **documentación** del proyecto según estándares usuales de ingeniería de software
- Creación de un **repositorio web** para desarrollo y documentación
- Investigación y creación de un instrumento de evaluación con las **métricas de desempeño** determinadas por las mejores prácticas de desarrollo web y con el objetivo de evaluar aspectos como funcionalidad, usabilidad, interfaz, compatibilidad, desempeño

## Metodologías de desarrollo de software

Existen varios tipos de desarrollo de software de uso común, entre los que se puede mencionar:

- Metodología de desarrollo ágil (Agile)
- Metodología de desarrollo en cascada (Waterfall)
- Desarrollo "lean"
- Modelo de prototipo
- Desarrollo rápido de aplicaciones (RAD, Rapid Application Development)
- Modelo de sistemas dinámicos
- Desarrollo basado en funcionalidades (FDD, Feature Driven Development)
- Desarrollo "scrum"

Sin entrar en los detalles de cada una, las principales diferencias radican en la **iteración** del desarrollo del producto, en la **interacción** entre las **partes involucradas** y en la **estructuración** del proyecto. Más específicamente:

- **Iteración**: varía la existencia o no de procesos iterativos, el tipo y la frecuencia de las iteraciones del producto y los tiempos dedicados a cada proceso.
- **Interacción entre las partes**: varía el tipo y la frecuencia de la comunicación entre las partes involucradas -desarrolladores, líderes, dueños del producto, clientes y otros- con el fin de evaluar los prototipos o el producto final.
- **Estructuración**: varía el conocimiento de los requerimientos previos del producto, lo que causa que algunos métodos sean, por un lado, menos estructurados y basados en la iteración para entender mejor el producto y, por otro lado, más estructurados, que no requieren tantas iteraciones ni interacciones para validar su progreso.

Como ejemplo, en un extremo está la metodología lineal o "en cascada" clásica, que es altamente estructurada -los requerimientos están bien especificados-. Tiene mínimas iteraciones hasta llegar a un producto completo y no existe mucha interacción entre las partes -típicamente los clientes no participan sino en el principio y en el final del desarrollo-.

En el otro extremo están las metodologías "ágiles", que son poco estructuradas -hay mucha incertidumbre sobre los requerimientos-. Hay iteraciones muy frecuentes y existe comunicación constante con los clientes o un representante de ellos, quienes prueban versiones tempranas de desarrollo.

En nuestro caso tenemos un producto cuyas características son bien conocidas _a priori_ pero que requiere constante evaluación de las nuevas características implementadas. Nuestros "clientes" (estudiantes), sin embargo, no serán parte del desarrollo sino hasta etapas más avanzadas. En ese sentido, nuestro proyecto es de **alta iteración, baja interacción y alta estructuración**, con un equipo pequeño de desarrollo.

Para estas características sería apropiada una metodología híbrida, como el desarrollo basado en funcionalidades (**FDD**, _Feature Driven Development_), que se considera una metodología "ágil", pero más estructurada que otras, ya que proporciona una guía más detallada para el desarrollo del software.

FDD tiene cinco etapas:

1. Desarrollar un modelo global
2. Construir una lista de funcionalidades o características
3. Planificar por funcionalidad
4. Diseñar por funcionalidad
5. Construir por funcionalidad

Aparte de las características descritas arriba, otros criterios de selección de la metodología y de las herramientas para nuestro proyecto fueron, en parte, su popularidad (en términos de recursos disponibles, que facilita la solución de problemas y dudas) y la familiaridad con el uso (según la experiencia de las personas involucradas en el desarrollo, lo que reduce el tiempo de aprendizaje).

La elección de metodología y herramientas fue:

#### Metodología: FDD (_Feature Driven Development_)

Una metodología ágil de desarrollo de software centrada en entregar funcionalidades incrementales, por medio del trabajo en iteraciones cortas y enfocadas en entregas de funcionalidades específicas. La metodología promueve el desarrollo de una lista de características prioritarias para el proyecto, lo que nos permite crear una hoja de ruta clara. En nuestro caso, estas funcionalidades están basadas en la lista de características del primer objetivo específico.

#### Herramienta: Jira

Una herramienta de gestión de proyectos que permite el desarrollo Agile, incluyendo metodologías Scrum, Kanban y FDD. Esto nos ayudará a planificar, hacer seguimiento y gestionar el trabajo, además de dar visibilidad en tiempo real sobre el progreso y los problemas.

#### Repositorio: GitHub

Una plataforma basada en web para el control de versiones y la colaboración que es ampliamente utilizada en el desarrollo de software. Nos permite compartir código, hacer seguimiento de cambios y colaborar en distintas "ramas" del proyecto.

::: info Repositorio
El repositorio del proyecto está disponible en [GitHub](https://github.com/fabianabarca/kalouk)
:::

#### Entorno de desarrollo: Visual Studio Code

Un editor de código con una variedad de características y extensiones para el desarrollo de sitios web. Admite múltiples lenguajes de programación, tiene herramientas de depuración integradas y proporciona características como autocompletado y refactorización de código. Además, nos va a permitir utilizar herramientas de asistencia con inteligencia artificial.

#### Documentación: VitePress

Un generador de sitios estáticos basado en Vue.js que permite crear documentación técnica de manera sencilla y rápida. Es fácil de usar y tiene una buena integración con GitHub, lo que facilita la publicación de la documentación en el repositorio.

Otras selecciones tecnológicas que quedan pendientes son la base de datos y el servidor.
