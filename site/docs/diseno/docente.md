# Diseño docente

::: info Puntos clave

- Los cursos con base en matemáticas y programación tienen características y necesidades especiales en el proceso de enseñanza-aprendizaje.
- Las simulaciones y la gamificación son metodologías atractivas para las actividades sincrónicas y asincrónicas de un curso con estas características.

:::

## Motivación

En su forma actual, el curso tiene ciertas características que, a juicio del autor, hacen pertinente la inclusión de una herramienta como la propuesta, esto es:

- Teoría basada en matemáticas
- Uso de herramientas de programación
- Uso de herramientas de análisis y visualización de datos

Algunos abordajes reconocidos son referencias para el proyecto, descritos en las siguientes secciones.

En la [guía de aplicación](/resultados/guia.md) son incorporados los elementos aquí discutidos.

## Aprendizaje con simulaciones

El aprendizaje basado en simulaciones -esto es, una representación computacional de una situación de la vida real- se refiere al uso de "software de simulación, herramientas y 'juegos serios' para enriquecer los procesos de enseñanza-aprendizaje" (Campos, 2020).

En ingeniería eléctrica es común utilizar software de simulación como Matlab, Mathematica y otros programas especializados en circuitos eléctricos, electrónica, etc., pero no existen oportunidades frecuentes de hacerlo durante las clases, en parte porque los estudiantes no usan su computadora de forma presencial, y porque los laboratorios de programación son poco frecuentes, y además porque el profesor generalmente monopoliza las demostraciones, de forma que las y los estudiantes son meramente observadores.

::: tip Implementación en el proyecto

El sistema desarrollado ofrece una interfaz web con la teoría de la clase que además ofrece simulaciones en el mismo espacio virtual, gracias a las tecnologías web disponibles, junto con la posibilidad de que cada estudiante modifique parámetros para experimentar con los resultados posibles, ejercitando su comprensión de la materia.

:::

## Gamificación

Crear un espacio lúdico con valor pedagógico es un reto que demanda mucha atención en el diseño. Sin embargo, cuando existen nuevas herramientas de mediación tecnológica entre docente y estudiantes, las posibilidades son más amplias. En este sentido, y de la experiencia propia del autor, una plataforma como Nearpod ofrece varias herramientas de gamificación que han probado ser exitosas en clase, como “Time to Climb” (momento de escalar), que es una serie de preguntas que todas y todos los estudiantes contestan y en que compiten por llegar primero a la cima, acompañado de una animación, música y caricaturas asignadas a cada participante (avatar) que son estimulantes para las y los participantes.

Hay un amplio registro de experiencias positivas con la gamificación. En Majuria et al. (2018) hacen una lista de _affordances_ (las posibilidades de acción de un objeto o sistema) utilizadas en juegos educativos, en cinco grandes categorías:

1. Logros/progreso
1. Inmersión
1. Socialización
1. Elementos no digitales
1. Misceláneos

Algunas de las actividades son:

- Puntajes
- Retos
- Medallas
- Rankings
- Competición
- Avatares (identidades virtuales)
- Narrativas
- Datos de localización
- Dificultad adaptativa

Esta es una guía valiosa para el diseño de actividades virtuales sincrónicas mediadas por el sistema propuesto, en este caso orientado al análisis y modelado de datos.

::: tip Implementación en el sistema

La arquitectura propuesta y los modelos de comunicación implementados (ver sección [ecosistema](/diseno/ecosistema)) facilitan la implementación de algunos de las opciones mencionadas, por ejemplo:

- **Puntaje**: una base de datos actualizada en tiempo real con una comunicación persistente bidireccional.
- **Dificultad adaptativa**: selección de preguntas en pruebas cortas con base en las respuestas previas, utilizando interactividad web.
- **Datos de localización**: ejercicios de análisis de datos basados en los datos personales públicos del estudiante (ubicación geográfica, intereses personales declarados, etc.).

:::

## Referencias

<Citation citekey="campos2020simulation" />
<Citation citekey="majuria2018gamification" />
