# Diseño de la evaluación pedagógica

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob6|Me1` Investigación y creación de un instrumento de **evaluación pedagógica** para aplicar a los estudiantes del curso Modelos Probabilísticos de Señales y Sistemas

:::

## Instrumentos de evaluación

En este proyecto hay interés por conocer varios aspectos relevantes del aprendizaje virtual:

- las **experiencias** actuales de los estudiantes
- las **preferencias** de los estudiantes
- la **atención** (_engagement_) de los estudiantes durante las sesiones

En este último aspecto, y según (Dewan, 2019) hay tres formas de determinación de la atención de los estudiantes en una sesión virtual:

- **Manual**: retroalimentación directa de estudiantes y profesores
- **Semi-automático**: medición indirecta de la interacción de los estudiantes con la plataforma
- **Automático**: evaluación de indicadores de atención con sensores y procesamiento avanzado de datos

Algunos de los métodos utilizados están en el siguiente diagrama:

<Mermaid :code="`
graph TD
    A((Detección)) -----> B([Automática])
    A ---> C([Semi-automática])
    A --> D([Manual])
    B ---> E[Basado en visión por computador]
    B --> F[Análisis de datos de sensores]
    C ---> G[Análisis de bitácora automática]
    C ----> H[Rastreo de atención]
    E --> I[Expresión facial]
    E ---> J[Gestos y postura]
    E ----> K[Movimiento de ojos]
    D ---> L[Verificación observacional]
    D --> M[Auto-reporte]
`" />

Por tanto, para el proyecto fueron propuestas dos estrategias: una manual, con formulario, y otra semi-automática. Las opciones automáticas no son consideradas todavía.

## Evaluación manual

::: info Objetivo

El objetivo de esta evaluación manual es conocer sobre las experiencias actuales y las preferencias de los estudiantes en relación con el aprendizaje virtual, utilizando versiones adaptadas de dos instrumentos de evaluación validados académicamente.

:::

Fue utilizado un formulario, disponible como Google Forms: https://forms.gle/QHimWYJmvsqpbSPw7

Los resultados y el análisis están en la sección de [resultados de la evaluación pedagógica](/resultados/evaluacion/pedagogica.md).

::: tip Escala de evaluación

Las preguntas en las siguientes dos secciones utilizan una escala numérico tipo Likert del 1 al 5, donde 1 representa "en desacuerdo" y 5 es "de acuerdo".

:::

### _Experiencias_ de aprendizaje virtual

|     | Pregunta                                                                               |
| --- | -------------------------------------------------------------------------------------- |
| A1  | Hago preguntas a mi profesor/a en línea                                                |
| A2  | Obtengo información sobre la lección (clase) en línea                                  |
| A3  | Leo las notas del curso en línea                                                       |
| A4  | Participo en discusiones en línea con mis compañeros/as                                |
| A5  | Si tengo una pregunta, mi profesor/a responde rápidamente                              |
| A6  | Mi profesor/a me ayuda a identificar áreas problemáticas en mi estudio en línea        |
| A7  | Mi profesor/a me da retroalimentación y comentarios valiosos sobre mis tareas en línea |
| A8  | Mi profesor/a fomenta mi participación en línea                                        |
| A9  | Mi profesor/a me proporciona retroalimentación útil sobre mi trabajo en línea          |
| A10 | Trabajo con otras personas en línea                                                    |
| A11 | Relaciono mi trabajo con el de otros en línea                                          |
| A12 | Comparto información con otros estudiantes en línea                                    |
| A13 | Discuto mis ideas con otros estudiantes en línea                                       |
| A14 | Colaboro con otros estudiantes de la clase en línea                                    |
| A15 | Participo en trabajos grupales como parte de mis actividades en línea                  |
| A16 | Relaciono lo que aprendo con mi vida fuera de las clases                               |
| A17 | Puedo explorar temas que me interesan en línea                                         |
| A18 | Puedo aplicar mis experiencias cotidianas en la clase en línea                         |
| A19 | Puedo vincular mi trabajo de clase con mi vida fuera de las clases                     |
| A20 | Aprendo cosas sobre el mundo fuera de mis clases                                       |
| A21 | Estudio casos reales relacionados con las actividades de la clase en línea             |
| A22 | Utilizo hechos reales en las actividades de clase en línea                             |
| A23 | Trabajo en tareas que tratan sobre información del mundo real                          |
| A24 | Trabajo con ejemplos reales                                                            |
| A25 | Aplico experiencias del mundo real al tema de estudio                                  |
| A26 | Tomo decisiones sobre mi aprendizaje                                                   |
| A27 | Trabajo en los momentos que me resultan convenientes                                   |
| A28 | Tengo control sobre mi aprendizaje                                                     |
| A29 | Desempeño un papel importante en mi aprendizaje                                        |
| A30 | Enfrento el aprendizaje a mi manera                                                    |

### _Preferencias_ de aprendizaje virtual

|     | Pregunta                                                                                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| B1  | La inclusión de habilidades de pensamiento de orden superior (análisis, evaluación y síntesis) en actividades, tareas y/o proyectos en línea es importante para mi aprendizaje |
| B2  | A través de la exploración en actividades, tareas y/o proyectos del curso en línea, puedo buscar conocimiento de forma independiente y gestionar mis objetivos de aprendizaje  |
| B3  | El aprendizaje se vuelve más significativo si se utilizan ejemplos relevantes y del mundo real en las actividades, tareas y/o proyectos en línea                               |
| B4  | Las actividades, tareas y/o proyectos en línea deberían motivarme a pensar más allá de lo que normalmente aprendo                                                              |
| B5  | Aprendo mejor si se me pide, mediante actividades, tareas y/o proyectos en línea, que establezca mis propios objetivos de aprendizaje                                          |
| B6  | Aprendo mejor si participo, a través de actividades, tareas y/o proyectos en línea, en la autorregulación y control de mi aprendizaje                                          |
| B7  | Fomentar la autoconciencia, el autoanálisis y la autorreflexión en actividades, tareas y/o proyectos en línea es muy importante para mi aprendizaje                            |
| B8  | Las actividades, tareas y/o proyectos en línea deberían motivarme a incluir mis propias experiencias previas para resolver un problema                                         |
| B9  | Las actividades, tareas y/o proyectos en línea deberían motivarme a hacer una autoevaluación sobre mi aprendizaje                                                              |
| B10 | Las actividades, tareas y/o proyectos en línea deberían motivarme a presentar mis propias ideas/conceptos                                                                      |
| B11 | Las actividades, tareas y/o proyectos en línea deberían fomentar el análisis activo, la evaluación y la síntesis de múltiples perspectivas expresadas por todos                |
| B12 | Las actividades, tareas y/o proyectos en línea deberían motivar a todos a evaluar el progreso de aprendizaje de los demás                                                      |

## Evaluación semi-automática

::: info Objetivo de la evaluación

La variable objetivo de esta evaluación es la atención (_engagement_), la cual representa un reto para el aprendizaje virtual, por cuanto una clase virtual tradicional está "luchando" en la **economía de la atención**, compitiendo por el recurso escaso de la atención que capturan las aplicaciones móviles u otros elementos.

:::

Tres dimensiones:

- Afectivo
- Comportamental
- Cognitivo

#### Prueba A/B

- Exposición "tradicional" versus las posibilidades del sistema de visualización y programación
- Dos subgrupos con una clase de una hora
- Intercalar temas con un modo (A) y con el otro (B) y aplicar las mediciones

#### Formulario

- Estudiantes responden antes, durante y después
- Medición de tiempos de respuesta
- Hay pruebas cortas, el sistema mide tiempo de respuesta y exactitud

#### Interacción

- El sistema mide "clicks" y otros proxies

::: danger Aplicación

Por limitaciones de tiempo, la aplicación de la evaluación semi-automática no fue realizada todavía, pero será implementada en el futuro con el instrumento propuesto.

:::

## Referencias

<Citation citekey="dewan2019engagement" />
<Citation citekey="ong2023enhancing" />
<Citation citekey="cole2021student" />
