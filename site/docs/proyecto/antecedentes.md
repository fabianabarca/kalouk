# Antecedentes del proyecto

::: info Puntos clave

- IE0405 - Modelos Probabilísticos de Señales y Sistemas es un curso introductorio de probabilidad y estadística en la carrera de Ingeniería Eléctrica.
- Para la enseñanza y la evaluación de sus conceptos, el curso utiliza herramientas de programación dedicadas al análisis y modelado de datos.
- Una nueva clasificación de tipos de interacción es propuesta para analizar las herramientas tecnológicas que pueden mediar en cada una de estas interacciones.
- El proyecto surge de la exploración de alternativas para presentar contenidos e interactividad durante las sesiones virtuales sincrónicas y la dificultad de encontrar una herramienta comercialmente disponible adecuada.

:::

Existe una gran cantidad de nuevas herramientas computacionales [1] gracias a que es un tema de amplio interés y desarrollo en la actualidad, dentro y fuera de la ingeniería.

En el contexto de pandemia y virtualización del 2020 y 2021, el curso utilizó plataformas para conferencias de voz y video, como Zoom, y plataformas para interactividad con las y los estudiantes, como Nearpod. Sin embargo, estas herramientas no cubren todas las necesidades del curso ni explotan todas las posibilidades pedagógicas de las tecnologías web o las herramientas computacionales para el análisis de datos.

Este proyecto planteó el desarrollo de un ecosistema de componentes web para presentaciones virtuales sincrónicas interactivas con el objetivo de crear una plataforma complementaria de apoyo para la docencia del curso en este nuevo contexto educativo. Todo esto bajo las buenas prácticas de la ingeniería de software, el desarrollo web y de la creación de contenidos pedagógicos en la enseñanza de teoría matemática.

Además, este proyecto documentó la experiencia docente en la creación y aplicación de las estrategias pedagógicas para la implementación del sistema propuesto.

Esta sección de Antecedentes presenta la motivación para el sistema, los tipos de interactividad que se pretenden explotar, las consideraciones pedagógicas para el diseño de contenidos y las tecnologías a utilizar.

## Tipos de interactividad

Para entender mejor dónde están ubicadas las funcionalidades de las plataformas existentes y dónde se ubica el sistema propuesto, es necesario crear una clasificación de las actividades de interacción en las sesiones virtuales sincrónicas.

Existen distintas clasificaciones de interactividad en la educación, entre ellas hay una importante clasificación general [2] que establece las relaciones: interacción instructor-aprendiz, interacción aprendiz-aprendiz, interacción aprendiz-interfaz, interacción aprendiz-contenido.

También, una forma reciente de conceptualizar la clase virtual es como un "sistema ciber-físico" (CPS, _cyber-physical system_) [3] donde coexisten procesos físicos, computacionales y humanos en distintos patrones y modalidades, mediado por "capas" que incluyen: software multimedia (texto, imágenes, videos, etc.), ambientes virtuales de aprendizaje (como Mediación Virtual) y las herramientas de comunicación virtual (videoconferencia, pantalla compartida, etc.). Además, según [4], el aprendizaje en línea es o debe ser "cibernético" en tanto que es dependiente del uso de tecnologías de comunicación y herramientas inteligentes para la comunicación y retroalimentación entre las partes.

Otra teoría que generaliza la clasificación de interacciones es propuesta por Scolari en "Las Leyes de la Interfaz" [5] donde plantea una interfaz como un concepto que engloba todo tipo de procesos tecnológicos y sociales, incluyendo el espacio educativo, ya sea presencial o virtual. Específicamente, una interfaz es "una red de actores humanos y tecnológicos que interactúan y mantienen diferentes tipos de relaciones entre sí". La identificación de actores, relaciones y procesos, según la clasificación de Scolari, será útil para contextualizar las funciones del sistema aquí propuesto.

El rediseño de interfaces, explica Scolari, se basa "en la incorporación de nuevos actores a una interfaz y/o en el desarrollo de nuevas relaciones entre ellos". Este sistema propuesto, al habilitar un actor tecnológico que permite nuevas relaciones docente / estudiantes / sistema tiene el potencial de facilitar una educación más dialógica y horizontal.

### Propuesta de clasificación de interacción

La siguiente clasificación particular (de elaboración propia) es hecha según la dirección de los flujos de información y está compuesta de tres elementos (también llamados "actores" o "nodos"): **docente**, **estudiantes** y **sistema**

donde sistema es entendido como una instancia o simulación del objeto de estudio, que generalmente será algún tipo de contenido interactivo, por ejemplo: la ejecución y visualización de programas de análisis de datos en Python.

Las configuraciones o relaciones posibles entre estos "nodos" en un **ambiente virtual** son, entonces:

Presentación: esquema tradicional donde la información fluye del docente hacia los estudiantes, y puede incluir la ayuda de material multimedia.

Flujo unidireccional de información: Docente ------> Estudiantes

Diálogo: información hacia y desde la o el docente y las y los estudiantes (generalmente utilizando videoconferencia).

Flujo bidireccional de información: Docente <-----> Estudiantes

Demostración: información hacia y desde la o el docente y el sistema, donde las y los estudiantes son observadores (generalmente utilizando pantalla compartida, o _screencasting_).

Flujo bidireccional de información: Docente <-----> Sistema

Experimentación: información hacia y desde el sistema y las y los estudiantes (utilizando alguna interfaz interactiva) y la o el docente es observador.

Flujo bidireccional de información: Sistema <-----> Estudiantes

Colaboración: información hacia y desde la o el docente, las y los estudiantes y el sistema.

Flujo multidireccional de información: Docente <-----> Sistema <-----> Estudiantes

El objetivo de la clasificación descrita anteriormente es analizar las herramientas tecnológicas que pueden mediar en cada tipo de interacción y, asimismo, identificar la propuesta de valor del sistema desarrollado en el proyecto, en tanto que sea capaz de implementar actividades de interacción dentro de todos los cinco tipos identificados.

Las herramientas tecnológicas más populares disponibles actualmente, como Zoom, Kahoot!, Nearpod, Socrative, etc., no ofrecen estas posibilidades o bien tienen un costo económico prohibitivo.

## Justificación

Ninguna de las opciones de plataformas comerciales disponibles ofrece la posibilidad de mediar en todos los tipos de interacción descritos anteriormente, ni la posibilidad de mostrar ecuaciones o gráficas vectoriales (fundamentales para el curso). Además, en general no son herramientas gratuitas ni libres.

En un contexto en el que algún grado de virtualidad en los cursos universitarios parece ser irreversible, es importante desarrollar una herramienta para el curso IE0405 - Modelos Probabilísticos de Señales y Sistemas que facilite la enseñanza y el aprendizaje en la virtualidad.

Según las expectativas de diseño, el sistema puede sustituir funcionalmente a Kahoot!, la pantalla compartida de Zoom (pero no la videoconferencia), los sondeos de Zoom, Nearpod, Socrative y otros similares, además de incorporar la posibilidad a los estudiantes de experimentar con simulaciones de datos directamente, algo que no ofrece ninguna otra herramienta.
