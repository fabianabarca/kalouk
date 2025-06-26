<div class="mb-6">
  <img src="/ucr_light.svg" alt="UCR" class="block dark:hidden mx-auto" />
  <img src="/ucr_dark.svg" alt="UCR" class="hidden dark:block mx-auto" />
</div>

<br>

# Proyecto de docencia

<div class="text-3xl mt-5">
Estrategias docentes para sesiones virtuales interactivas con el desarrollo de un nuevo sistema web: una experiencia en el curso Modelos Probabilísticos de Señales y Sistemas
</div>

_Informe final | julio de 2025_

## Información general

| Ítem                           | Descripción                         |
| ------------------------------ | ----------------------------------- |
| Código de proyecto             | **PD-IE-472-2022**                  |
| Unidad académica               | **Escuela de Ingeniería Eléctrica** |
| Vigencia inicial               | **1 abril 2022 - 31 marzo 2024**    |
| Estado                         | **Prórroga al 7 julio 2025**        |
| Período informe final          | **1 abril 2024 - 7 julio 2025**     |
| Gestora Vicerrectoría Docencia | **Marielos Montero Dien**           |
| Coordinadora Comisión Docencia | **Mercedes Chacón Vázquez**         |

## Participantes

<span class="text-lg font-bold">Fabián Abarca Calderón</span> <br>
_Investigador principal_ <br>
Escuela de Ingeniería Eléctrica <br>
Universidad de Costa Rica <br>
fabian.abarca@ucr.ac.cr

### Estudiantes asistentes

- Sirlany Mora García, <span class="text-sm">ECCI</span>
- Wilmer Jesús Araya Rivas, <span class="text-sm">ECCI</span>
- Yasty Sánchez Piedrahita, <span class="text-sm">ECCI</span>

<span class="text-sm">ECCI - Escuela de Ciencias de la Computación e Informática, UCR</span>

## Beneficiarios

> Información de la cantidad total de estudiantes y docentes que se vieron beneficiados con la ejecución del proyecto.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="text-center w-full mx-auto mb-4">
    <div class="text-4xl font-bold">
    21
    </div>
    <div class="text-italic">
    Estudiantes del curso de probabilidad que participaron en las clases de demostración
    </div>
  </div>
  <div class="text-center w-full mx-auto mb-4">
    <div class="text-4xl font-bold">
    3
    </div>
    <div class="text-italic">
    Profesores que participaron en una sesión especial de demostración de los resultados
    </div>
  </div>
</div>

:information_source: **Más información**

- 📝 [Resultados de la evaluación pedagógica](/resultados/evaluacion/pedagogica.md)
- 📣 [Divulgación del proyecto](/resultados/divulgacion.md)

## Actividades desarrolladas

> Actividades desarrolladas en la ejecución del proyecto de docencia para la consecución de los objetivos propuestos.

Por la naturaleza de su planteamiento, la principal componente de este proyecto es de desarrollo tecnológico, por lo que las actividades se enfocaron en la creación del sistema web que da soporte a las actividades interactivas. El diseño también incluye la estrategia pedagógica para la implementación de las actividades interactivas en el curso Modelos Probabilísticos de Señales y Sistemas.

La sección de [objetivos](/proyecto/objetivos.md) describe todos los pasos realizados.

:information_source: **Más información**

- ✏️ [Diseño](/diseno/index.md)
- 🔧 [Desarrollo](/desarrollo/index.md)

## Logros y resultados

> Descripción de los logros o resultados alcanzados con la ejecución del proyecto, considerando el cumplimiento de los objetivos y metas propuestas y también otros elementos que emergieron del proceso y resultaron relevantes o impactaron la ejecución del proyecto.

Los siguientes son los componentes tecnológicos y pedagógicos desarrollados para el proyecto.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk</div>
    </div>
    <div class="cell-content">Un ecosistema de componentes web para actividades interactivas con contenidos de matemáticas y programación.</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk">Ver más</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk WEB</div>
    </div>
    <div class="cell-content">Un servidor web versátil para generación de datos sintéticos usados en recolección y análisis en el curso, por medio de los modelos de comunicación REST API, WebSockets, SSE y webhooks.</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk-web">Ver más</a> 🌐 <a href="https://web.kalouk.xyz/">web.kalouk.xyz</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk JS</div>
    </div>
    <div class="cell-content">Un conjunto de componentes web con Vue (JavaScript) para actividades interactivas en sitios web, tanto en sesiones virtuales asincrónicas (contenido teórico) como sincrónicas (presentaciones).</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk-js">Ver más</a> 🌐 <a href="https://www.npmjs.com/org/kalouk">npm</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk MCP</div>
    </div>
    <div class="cell-content">Un servidor web con el protocolo de contexto de modelos (MCP) para proveer datos e información de contexto sobre la teoría del curso a agentes de inteligencia artificial.</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk-mcp">Ver más</a> 🌐 <a href="https://mcp.kalouk.xyz/chat">mcp.kalouk.xyz/chat</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk CLI</div>
    </div>
    <div class="cell-content">Una interfaz de línea de comandos (CLI) para interactuar de forma programática con los otros componentes de Kalouk, como Kalouk WEB y Kalouk MCP.</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk-cli">Ver más</a> 🌐 <a href="https://www.npmjs.com/package/@kalouk/cli">@kalouk/cli</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Kalouk XYZ</div>
    </div>
    <div class="cell-content">Un sitio web para alojar presentaciones interactivas de Slidev para sesiones sincrónicas, utilizando las integraciones desarrolladas con Kalouk.</div>
    <div class="cell-footer">📖 <a href="../resultados/kalouk-xyz">Ver más</a> 🌐 <a href="https://kalouk.xyz/">kalouk.xyz</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">improbabilidades.com</div>
    </div>
    <div class="cell-content">Un sitio web para alojar el contenido teórico del curso, a modo de libro digital, utilizando las integraciones desarrolladas con Kalouk.</div>
    <div class="cell-footer">📖 <a href="../resultados/improbabilidades">Ver más</a> 🌐 <a href="http://improbabilidades.com/">improbabilidades.com</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Guía pedagógica</div>
    </div>
    <div class="cell-content">Recomendaciones para el desarrollo de material teórico y presentaciones interactivas utilizando las herramientas de Kalouk.</div>
    <div class="cell-footer">📖 <a href="../resultados/contenidos/guia">Ver más</a></div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Proyectos de programación</div>
    </div>   
    <div class="cell-content">Ejercicios de recolección y análisis de datos para el aprendizaje de herramientas de programación de Python en escenarios realistas y más complejos.</div>
    <div class="cell-footer">📖 <a href="../resultados/contenidos/proyectos">Ver más</a></div>  
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">PyX</div>
    </div>
    <div class="cell-content">Tutoriales básicos de programación en Python aplicados a la ciencia e ingeniería de datos, que son la base para los ejercicios de programación del curso y en Kalouk.</div>
    <div class="cell-footer">📖 <a href="../resultados/contenidos/pyx">Ver más</a> 🌐 <a href="https://github.com/improbabilidades/PyX">PyX</a></div>
  </div>
</div>

Adicionalmente, fue propuesto:

- Un instrumento de evaluación pedagógica para medir el impacto del proyecto en la enseñanza y el aprendizaje de los estudiantes
- Un instrumento para la evaluación técnica del desarrollo de software

:information_source: **Más información**

- ☑️ [Resultados](/resultados/index.md)

## Dificultades

> Reporte de las dificultades enfrentadas y la estrategia para revertirlas en beneficio de los logros del proyecto de docencia.

Este proyecto necesitó dos prórrogas para su finalización por las dificultades enfrentadas.

Las dificultades radicaron en dos dimensiones: **tecnológica**, ya que el desarrollo de los componentes web fue retador y requirió más tiempo del inicialmente previsto, incluyendo un cambio completo de tecnologías hacia el final del proyecto, y **pedagógica**, ya que la implementación de las actividades interactivas en el curso Modelos Probabilísticos de Señales y Sistemas estuvo retrasada por la ausencia de las herramientas desarrolladas y no permitió un tiempo adecuado para su diseño.

A pesar de lo anterior, el proyecto logró trazar un camino prometedor, al criterio del autor, para la implementación de actividades interactivas en cursos de matemáticas y programación, con herramientas modernos de desarrollo web y de procesamiento de datos, con el potencial de crecer como software de código abierto desarrollado por y para la comunidad educativa.

:information_source: **Más información**

- ⚠️ [Recomendaciones / dificultades](/conclusiones/recomendaciones.md)

## Procesos emergentes

> Reporte de procesos emergentes como enlace con TFG, presentaciones en congresos, conferencias o seminarios, en el caso de haberse dado.

Para el segundo ciclo del 2025 hay dos temas planteados de Proyecto Eléctrico (curso integrador de bachillerato en ingeniería eléctrica):

- Diseño y desarrollo de actividades interactivas con datos con las herramientas de Kalouk para la teoría del curso Modelos Probabilísticos de Señales y Sistemas
- Implementación de un agente de inteligencia artificial con un servidor MCP para el curso Modelos Probabilísticos de Señales y Sistemas

Y un tema planteado de trabajo final de graduación (TFG):

- Diseño de la estrategia de operación y mantenimiento del ecosistema Kalouk

Con los resultados obtenidos es posible y deseable la formulación de enlaces con otras iniciativas docentes y la participación en conferencias y seminarios en el futuro próximo.

## Publicaciones o divulgaciones

> Reporte de publicaciones o divulgaciones realizadas a partir de la ejecución del proyecto y que evidencian los principales aportes a la docencia universitaria.

Hay tres artículos en desarrollo, a partir del proceso y los resultados del proyecto:

- Kalouk: ecosistema de contenidos web y su estrategia para sesiones virtuales con contenidos de matemática y programación
- _Measuring students' engagement in online synchronous teaching: a manual and semi-automatic methodology using the learning platform Kalouk_
- _Context Server for LLM Interfaces in Virtual Learning Environments Using Kalouk and the Model Context Protocol_

:information_source: **Más información**

- 📣 [Divulgación](/resultados/divulgacion.md)

## Observaciones y recomendaciones

> Enumerar observaciones o recomendaciones relacionadas con el impacto y resultados del proyecto que pueden ser acogidas para la formulación de una Iniciativa Docente.

:information_source: **Más información**

- 💡 [Recomendaciones](/conclusiones/recomendaciones.md)

## Reporte de personas participantes

> Reporte de la apreciación general de todas las personas involucradas en el proyecto de docencia (responsable, colaboradoras y participantes) en torno al impacto del proyecto.

:information_source: **Más información**

- 💡 [Recomendaciones](/conclusiones/recomendaciones.md)

## Estrategias de divulgación

> Detallar las estrategias que se utilizarán para la divulgación de los resultados obtenidos en el Proyecto de Docencia.

- Como proyecto de software libre, los resultados del proyecto están disponibles en línea, en el sitio web del proyecto y en los repositorios de código.
- Como proyecto académico, los resultados del proyecto se divulgarán en la comunidad universitaria, a través de presentaciones y artículos académicos.
- Como proyecto de docencia, los resultados del proyecto serán utilizados de forma permanente e incremental en el curso Modelos Probabilísticos de Señales y Sistemas, a través de las actividades interactivas desarrolladas y la guía pedagógica.

:information_source: **Más información**

- 📣 [Divulgación](/resultados/divulgacion.md)

## Resumen de cumplimiento de objetivos

> Completar la tabla final del cumplimiento de los objetivos.

|     | Objetivo específico | Metas | Indicadores |
| --- | ------------------- | ----- | ----------- |
| 1   | Requisitos          | 100%  | 100%        |
| 2   | Tecnologías         | 100%  | 100%        |
| 3   | Arquitectura        | 100%  | 100%        |
| 4   | Programación        | 100%  | 100%        |
| 5   | Contenidos          | 100%  | 100%        |
| 6   | Evaluación          | 100%  | 100%        |
| 7   | Divulgación         | 100%  | 100%        |

La descripción de avance en relación con el 📆 cronograma y las 📝 observaciones están en la sección de [objetivos](/proyecto/objetivos.md).

## Informe económico

> Completar la tabla de informe económico final.

El proyecto solamente utilizó la ayuda económica de la Vicerrectoría de Docencia para el subsidio de horas asistente. No hay gastos en otras partidas.

| Ítem                       |                                 |
| -------------------------- | ------------------------------- |
| Período del informe        | **1 abril 2022 / 7 julio 2025** |
| Monto total asignado       | **0 CRC**                       |
| Nombre de la partida       | **N/A**                         |
| Monto asignado por partida | **0 CRC**                       |
| Total ejecutado            | **0 CRC**                       |
| Monto sin ejecutar         | **0 CRC**                       |
| Observaciones              | **Sin observaciones**           |
