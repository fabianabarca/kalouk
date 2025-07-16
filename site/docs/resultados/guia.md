# Guía de aplicación de Kalouk

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob5|Me2` Creación de una propuesta de **guía pedagógica** para la incorporación del sistema en los cursos universitarios

:::

A continuación hay una serie de pasos recomendados para hacer un diseño estructurado del uso de Kalouk en un curso universitario con componentes de matemáticas y programación y énfasis en el análisis de datos.

## Espacio Kalouk

::: warning Premisa
La estrategia pedagógica para el uso de Kalouk gira alrededor de la creación de un **Espacio Kalouk**, la base para crear experiencias educativas interactivas con las herramientas desarrolladas.
:::

Un **Espacio Kalouk** tiene tres componentes:

- **Servicios**: sistemas que facilitan el uso de datos y la interacción entre las partes.
- **Interfaces**: puntos de contacto con los usuarios, tanto docentes como estudiantes.
- **Contexto**: teoría y cualquier otro tipo de contenido que sustenta el espacio educativo.

Su relación, incluyendo los componentes del [ecosistema Kalouk](/resultados/kalouk), está descrita en el siguiente diagrama:

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart TD
    subgraph K [Espacio Kalouk]
        subgraph S [Servicios]
            WEB@{ shape: process, label: 'WEB'}
            MCP@{ shape: process, label: 'MCP'}
            DB@{ shape: database, label: 'Base de datos'}
        end
        COM@{ shape: event, label: 'Modelos de comunicación'}
        subgraph I [Interfaces]
            subgraph W [Cliente web]
                SITE@{ shape: display, label: 'Sitio web'}
                SLI@{ shape: display, label: 'Slidev'}
                VP@{ shape: display, label: 'VitePress'}
            end
            subgraph M [Móvil]
                PWA@{ shape: display, label: 'PWA'}
            end
            subgraph P [Programática]
                CLI@{ shape: in-out, label: 'CLI'}
                JS@{ shape: in-out, label: 'JS'}
                PY@{ shape: in-out, label: 'PY'}
            end
        end
        subgraph C [Contexto]
            DOCS@{ shape: docs, label: 'Documentos'}
            DATA@{ shape: docs, label: 'Datos estáticos'}
        end
    end
    S <--> COM
    COM <--> I
    S <--> C
`" />

La estrategia, por tanto, consiste en tomar varias decisiones de diseño en relación con el **contexto**, primero, los **servicios**, después, y las **interfaces**, finalmente.

::: info Detalles de los componentes

Hay más detalles en las siguientes páginas de todos los componentes mencionados en los pasos a continuación.

:::

## Paso 1: Definición del contexto

::: tip Preguntas clave

- ¿Cuáles son los contenidos teóricos que dan sustento a mi curso?
- ¿Dispongo de estos contenidos en "formatos amigables"?
- ¿Hay contenidos multimedia esenciales para mi curso?
- ¿Cuáles conocimientos complementarios (por ejemplo, en programación) son necesarios?

:::

| Componente | Descripción                                                        |
| ---------- | ------------------------------------------------------------------ |
| Documentos | Teoría, programa del curso y cualquier otra información relevante. |
| Datos      | Estadísticas, recursos multimedia, archivos históricos y otros.    |
| Kalouk PyX | Tutoriales de programación en Python.                              |

### Recomendaciones

#### Transformar todos los contenidos a Markdown:

Los textos en el proyecto Kalouk están disponibles como Markdown. Una forma de converger a este formato desde otros similares (Word, PowerPoint, PDF, transcripciones de YouTube, etc.) es por medio del paquete `markitdown` de Python (disponible en [GitHub](https://github.com/microsoft/markitdown)).

¿Por qué Markdown? Como explica la documentación de `markitdown`:

> Markdown es extremadamente similar al texto plano, con un marcado o formato mínimo, pero proporciona una forma de representar la estructura importante del documento. Los modelos de lenguaje grandes (LLMs) principales, como GPT-4o de OpenAI, "hablan" Markdown de forma nativa y a menudo incorporan Markdown en sus respuestas sin que se les solicite. Esto sugiere que han sido entrenados con grandes cantidades de texto formateado en Markdown y lo comprenden bien.

#### Utilizar o crear tutoriales de programación

Para usar Python y JavaScript efectivamente dentro del ecosistema Kalouk, es importante complementar estos conocimientos a los estudiantes, de quienes no se puede asumir un dominio avanzado, necesariamente.

Kalouk PyX ofrece esta "puerta de entrada" desde el nivel más básico.

## Paso 2: Definición de los servicios

::: tip Preguntas clave

- ¿Dónde voy a almacenar la información de mi curso?
- ¿Quiero agentes de inteligencia artificial interactuando con mis estudiantes?
- ¿Qué modelos de comunicación (API, webhooks, WebSockets, SSE) quiero para los ejercicios de programación y análisis de datos?

:::

| Componente    | Descripción                                           |
| ------------- | ----------------------------------------------------- |
| Kalouk WEB    | Servidor principal que gestiona datos y comunicación. |
| Kalouk MCP    | Interacción con agentes de inteligencia artificial.   |
| Base de datos | Almacenamiento de resultados de evaluaciones y otros. |

### Recomendaciones

#### Aplicación básica

- Empezar solo con Kalouk WEB: implementar únicamente el servidor principal para gestionar datos básicos y comunicación simple.
- Base de datos local: utilizar SQLite para almacenamiento simple sin configuración compleja.
- APIs REST básicas: comenzar con comunicación HTTP estándar antes de implementar WebSockets.

#### Aplicación avanzada

- Implementar Kalouk MCP: agregar capacidades de inteligencia artificial para asistencia automatizada a estudiantes.
- Base de datos robusta: utilizar PostgreSQL o MySQL para manejo de grandes volúmenes de datos.
- Comunicación en tiempo real: implementar WebSockets para ejercicios colaborativos y retroalimentación instantánea.

#### Consideraciones de infraestructura

- Hosting: comenzar con servicios en la nube como Vercel, Netlify o Railway para implementación sencilla.
- Escalabilidad: planificar para el crecimiento futuro del curso y número de estudiantes.
- Seguridad: implementar autenticación y autorización desde el inicio, especialmente para datos de evaluaciones.

## Paso 3: Definición de las interfaces

::: tip Preguntas clave

- ¿Quiero interactuar con los estudiantes en la web?
- ¿Quiero interactuar con los estudiantes de forma programática?
- ¿Qué recursos computacionales tienen los estudiantes?
- ¿El sistema será utilizado en sesiones virtuales, presenciales o ambas?

:::

| Componente | Descripción                                                       |
| ---------- | ----------------------------------------------------------------- |
| Kalouk CLI | Interfaz de línea de comandos para interactuar con los servicios. |
| Kalouk JS  | Conjunto de paquetes de JavaScript para incorporar en sitios web. |
| Kalouk PY  | Paquete de Python para interactuar con los servicios.             |
| Kalouk XYZ | Sitio web con las presentaciones del curso.                       |
| Kalouk PWA | Aplicación móvil con los contenidos del curso.                    |
| Slidev     | Presentaciones web para sesiones sincrónicas.                     |
| VitePress  | Documentación de contenido teórico para sesiones asincrónicas.    |

### Recomendaciones

#### Sesiones presenciales

- Priorizar Slidev: crear presentaciones interactivas que permitan demonstraciones en vivo de programación.
- Kalouk JS en proyector: utilizar componentes web para mostrar visualizaciones de datos en tiempo real.
- Kalouk CLI para demostraciones: mostrar flujos de trabajo de análisis de datos desde la línea de comandos.

#### Sesiones virtuales

- Kalouk XYZ como hub central: crear un sitio web que sirva como punto de encuentro para todas las actividades.
- VitePress para contenido asíncrono: documentar teoría y ejercicios para estudio independiente.
- Kalouk PWA para accesibilidad: asegurar que estudiantes con dispositivos limitados puedan participar.

#### Cursos híbridos

- Implementar todas las interfaces gradualmente: comenzar con web (Kalouk XYZ + Slidev), luego agregar programáticas (PY, JS, CLI).
- Kalouk PY para tareas: permitir que estudiantes entreguen análisis de datos programáticamente.
- VitePress para referencia: mantener documentación actualizada que sirva tanto en clase como para estudio.

#### Consideraciones técnicas

- Compatibilidad de dispositivos: probar interfaces en diferentes navegadores y dispositivos móviles.
- Conectividad: diseñar interfaces que funcionen con conexiones lentas (especialmente PWA).
- Accesibilidad: seguir estándares WCAG para usuarios con discapacidades.
- Capacitación: planificar tiempo para enseñar a estudiantes el uso de interfaces programáticas.
