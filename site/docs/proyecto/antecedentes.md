# Antecedentes del proyecto

::: info Puntos clave

- IE0405 - Modelos Probabilísticos de Señales y Sistemas es un **curso introductorio de probabilidad y estadística** en la carrera de Ingeniería Eléctrica.
- Para la enseñanza y la evaluación de sus conceptos, el curso utiliza **herramientas de programación** dedicadas al **análisis y modelado de datos**.
- Una nueva **clasificación de tipos de interacción** es propuesta para analizar las herramientas tecnológicas que pueden mediar en cada una de estas interacciones.
- El proyecto surge de la **exploración de alternativas para presentar contenidos e interactividad** durante las sesiones virtuales sincrónicas y la dificultad de encontrar una herramienta comercialmente disponible adecuada.

:::

## Motivación

En el contexto de pandemia y virtualización del 2020 y 2021, el curso utilizó plataformas para conferencias de voz y video, como Zoom, y plataformas para interactividad con las y los estudiantes, como Kahoot! y Nearpod. Sin embargo, estas herramientas no cubrieron todas las necesidades del curso y además no explotan todas las **posibilidades pedagógicas de las tecnologías web** ni de las **herramientas computacionales para el análisis de datos** (Stančin, 2019).

Este proyecto planteó el desarrollo de un **ecosistema de componentes web** para presentaciones virtuales sincrónicas o contenido teórico asincrónico **interactivo** con el objetivo de crear una plataforma complementaria de apoyo para la docencia del curso.

Para plantear el diseño, el proyecto consideró varias definiciones de interactividad.

## Tipos de interactividad

Para entender mejor dónde están ubicadas las funcionalidades de las plataformas existentes y dónde está ubicado el sistema desarrollado, es necesario crear una clasificación de las actividades de interacción en las sesiones virtuales sincrónicas.

El objetivo de esta clasificación es analizar las herramientas tecnológicas que pueden **mediar en cada tipo de interacción** y, asimismo, identificar la **propuesta de valor del sistema** desarrollado en el proyecto, en tanto que sea capaz de implementar actividades de interacción dentro de todos los cinco tipos identificados.

Las herramientas tecnológicas más populares disponibles actualmente, como Zoom, Kahoot!, Nearpod, Socrative, etc., no ofrecen estas posibilidades o bien tienen un costo económico prohibitivo.

### Antecedentes

Existen distintas clasificaciones de interactividad en la educación, entre ellas hay una importante clasificación general (Martin, 2012) que establece las relaciones: interacción docente-aprendiz, interacción aprendiz-aprendiz, interacción aprendiz-interfaz y la interacción aprendiz-contenido.

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart TD
    D([Docente])
    A([Aprendiz])
    C[Contenido]
    I[Interfaz]
    D <--> A
    A <--> A
    A <--> I
    A <--> C
`" />

También, una forma reciente de conceptualizar la clase virtual es como un "sistema ciber-físico" (CPS, _cyber-physical system_) (Olszewska, 2021) donde coexisten procesos físicos, computacionales y humanos en distintos patrones y modalidades, mediado por "capas" que incluyen: software multimedia (texto, imágenes, videos, etc.), ambientes virtuales de aprendizaje (como Mediación Virtual) y las herramientas de comunicación virtual (videoconferencia, pantalla compartida, etc.). Además, según (Scott, 2007), el aprendizaje en línea es o debe ser "cibernético" en tanto que es dependiente del uso de tecnologías de comunicación y herramientas inteligentes para la **comunicación y retroalimentación** entre las partes.

Otra teoría que generaliza la clasificación de interacciones es propuesta por Scolari en "Las Leyes de la Interfaz" (Scolari, 2018) donde plantea una interfaz como un concepto que engloba todo tipo de procesos tecnológicos y sociales, incluyendo el espacio educativo, ya sea presencial o virtual. Específicamente, una interfaz es "una red de actores humanos y tecnológicos que interactúan y mantienen diferentes tipos de relaciones entre sí". La identificación de actores, relaciones y procesos, según la clasificación de Scolari, será útil para contextualizar las funciones del sistema aquí propuesto.

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart LR
    A([Actores])
    P[Procesos]
    A <--relaciones--> P
`" />

El rediseño de interfaces, explica Scolari, se basa "en la incorporación de nuevos actores a una interfaz y/o en el desarrollo de nuevas relaciones entre ellos". Este sistema propuesto, al habilitar un actor tecnológico que permite nuevas relaciones docente / estudiantes / sistema tiene el potencial de facilitar **una educación más dialógica y horizontal**.

## Propuesta de clasificación de interacción

La siguiente clasificación particular (de elaboración propia) es hecha según la dirección de los **flujos de información** y está compuesta de tres elementos (también llamados "actores" o "nodos"): _docente_, _estudiantes_ y _sistema_, donde "sistema" es entendido como una instancia o simulación del objeto de estudio, que generalmente será algún tipo de **contenido interactivo** como, por ejemplo, la ejecución y visualización de programas de análisis de datos en Python.

Las configuraciones o relaciones posibles entre estos "nodos" en un **ambiente virtual** son:

1. **Presentación**
1. **Diálogo**
1. **Demostración**
1. **Experimentación**
1. **Colaboración**

### Presentación

> Esquema tradicional donde la información fluye del docente hacia los estudiantes, y puede incluir la ayuda de material multimedia.

_Flujo **unidireccional** de información_

<!-- prettier-ignore -->
<Mermaid :code="`
graph LR
    subgraph Presentación
        D([Docente])
    end
    E([Estudiantes])
    Presentación -- observación --> E
`" />

<dl>
<dt>✏️ <strong>Ejemplo</strong></dt>
<dd>Clase magistral con ayuda de una presentación de diapositivas utilizando <strong>pantalla compartida</strong> (<em>screencasting</em>).</dd>
</dl>

### Diálogo

> Información hacia y desde la o el docente y las y los estudiantes.

_Flujo **bidireccional** de información_

<Mermaid :code="`
graph LR
    subgraph Diálogo
        direction LR
        D([Docente])
        E([Estudiantes])
    end
    D <--> E
`" />

<dl>
<dt>✏️ <strong>Ejemplo</strong></dt>
<dd>Conversación oral o escrita en la plataforma utilizando <strong>videoconferencia</strong> o <strong>chat</strong>.</dd>
</dl>

### Demostración

> Información hacia y desde la o el docente y el sistema, donde las y los estudiantes son observadores.

_Flujo **bidireccional** de información_

<Mermaid :code="`
graph LR
    subgraph Demostración
        D([Docente])
        S[Sistema]
    end
    E([Estudiantes])
    D <--> S
    Demostración -- observación --> E
`" />

<dl>
<dt>✏️ <strong>Ejemplo</strong></dt>
<dd>Exploración del docente de una <strong>herramienta interactiva de programación</strong> utilizando <strong>pantalla compartida</strong> (<em>screencasting</em>)</dd>
</dl>

### Experimentación

> Información hacia y desde el sistema y las y los estudiantes y la o el docente es observador.

_Flujo **bidireccional** de información_

<Mermaid :code="`
graph LR
    subgraph Experimentación
        E([Estudiantes])
        S[Sistema]
    end
    D([Docente])
    E <--> S
    D -- supervisión --> Experimentación
`" />

<dl>
<dt>✏️ <strong>Ejemplo</strong></dt>
<dd>Las y los estudiantes realizan un ejercicio de programación utilizando una <strong>herramienta interactiva de programación</strong>.</dd>
</dl>

### Colaboración

> Información hacia y desde la o el docente, las y los estudiantes y el sistema.

_Flujo **multidireccional** de información_

<Mermaid :code="`
graph LR
    subgraph Colaboración
        direction LR
        E([Estudiantes])
        S[Sistema]
        D([Docente])
    end
    E <--> S
    S <--> D
    D <--> E
`" />

<dl>
<dt>✏️ <strong>Ejemplo</strong></dt>
<dd>Docente y estudiantes realizan un ejercicio de programación utilizando una <strong>herramienta interactiva de programación</strong>.</dd>
</dl>

## Comparación con otros sistemas

Ninguna de las opciones de plataformas comerciales disponibles ofrece la posibilidad de mediar en todos los tipos de interacción descritos anteriormente, ni la posibilidad de mostrar ecuaciones o gráficas vectoriales (fundamentales para el curso). Además, en general no son herramientas gratuitas ni libres.

Según las expectativas de diseño, el sistema puede sustituir funcionalmente a Kahoot!, la pantalla compartida de Zoom (pero no la videoconferencia), los sondeos de Zoom, Nearpod, Socrative y otros similares, además de incorporar la posibilidad a los estudiantes de experimentar con simulaciones de datos directamente, algo que no ofrece ninguna otra herramienta.

:information_source: **Más información**

- 📥 [Requisitos](/diseno/requisitos.md)

## Referencias

<Citation citekey="stancin2019overview" />
<Citation citekey="martin2012examining" />
<Citation citekey="olszewska2021virtual" />
<Citation citekey="scott2007cybernetic" />
<Citation citekey="scolari2018leyes" />
