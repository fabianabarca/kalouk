# Kalouk MCP

::: info ¿Qué es?

Un servidor web con el **protocolo de contexto de modelos** ([MCP](https://modelcontextprotocol.io/)) para proveer datos e información de contexto sobre la teoría del curso a agentes de inteligencia artificial.

:::

Kalouk MCP es un servidor especializado que implementa el protocolo de contexto de modelos (MCP, _Model Context Protocol_) desarrollado por [Anthropic](https://www.anthropic.com/). Su función principal es servir como puente entre agentes de inteligencia artificial (IA) y el contexto educativo del ecosistema Kalouk, proporcionando acceso estructurado a contenidos del curso, datos de ejemplo y otros recursos pedagógicos.

## ¿Qué es MCP?

MCP es un estándar abierto que permite a los modelos de IA acceder a datos **contextuales** de forma estructurada. A diferencia de simplemente "alimentar" información a un modelo, MCP establece una comunicación bidireccional donde el agente puede:

- **Solicitar información específica** según las necesidades de la conversación
- **Acceder a datos actualizados** en tiempo real
- **Utilizar herramientas especializadas** para análisis y cálculos
- **Mantener contexto persistente** a lo largo de múltiples interacciones

El siguiente diagrama ilustra esta relación:

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart TD
    subgraph Local
      C[Cliente MCP]
      A[Agente IA]
    end
    subgraph Remoto
      S[Servidor Kalouk MCP]
      Con[Contexto Kalouk]
      T[Herramientas]
    end
    A <--> C
    C <-- Protocolo MCP --> S
    S <--> Con
    S <--> T
`" />

## Características principales

### Acceso contextual inteligente

- **Teoría del curso**: conceptos de probabilidad, estadística y análisis de datos
- **Ejemplos prácticos**: casos de estudio y ejercicios resueltos
- **Datos de referencia**: distribuciones, fórmulas y tablas estadísticas
- **Recursos multimedia**: enlaces a visualizaciones y simulaciones

### Herramientas especializadas

- **Generación de datos**: crear conjuntos de datos sintéticos para ejercicios, en conjunto con Kalouk WEB
- **Validación de respuestas**: verificar soluciones de estudiantes
- **Recomendaciones pedagógicas**: sugerir recursos según el progreso del estudiante

### Integración educativa

- **Personalización**: adaptación del contenido según el nivel del estudiante
- **Seguimiento de progreso**: historial de interacciones y temas consultados, en conjunto con Kalouk WEB
- **Evaluación continua**: retroalimentación inmediata sobre conceptos

## Casos de uso educativos de Kalouk MCP

### Para estudiantes

**Tutor virtual inteligente**

```
Estudiante:

>>> "¿Cómo puedo calcular la media de una distribución exponencial?"

Agente IA:

*consulta Kalouk MCP*
- Accede a la teoría sobre distribuciones exponenciales
- Obtiene la fórmula específica: μ = 1/λ
- Genera un ejemplo numérico con λ = 2
- Proporciona código Python para verificación
```

**Asistente para ejercicios**

```
Estudiante:

>>> "Necesito datos para practicar regresión lineal"

Agente IA:

*utiliza herramientas MCP*
- Genera dataset sintético con relación lineal conocida
- Añade ruido controlado para realismo
- Proporciona tanto datos como solución esperada
- Sugiere pasos de análisis recomendados
```

### Para docentes

**Preparación de contenidos**

```
Docente:

>>> "Genere 5 ejercicios sobre distribución normal"

Agente IA:

*consulta contexto Kalouk*
- Accede a plantillas de ejercicios existentes
- Genera parámetros aleatorios pero sensatos
- Calcula soluciones completas con pasos detallados
- Da formato según estilo del curso y Kalouk
```

**Evaluación automatizada**

```
Docente:

>>> "Revise esta respuesta de estudiante sobre el teorema del límite central"

Agente IA:

*valida con herramientas MCP*
- Compara respuesta con solución de referencia
- Identifica errores conceptuales específicos
- Proporciona retroalimentación constructiva
- Sugiere recursos para atender problemas o debilidades
```

## Ejemplo de implementación

Un primer ejemplo implementado de uso es el siguiente:

- Kalouk MCP server expone información básica en el endpoint `informacion/`:

```json
{
  "name": "Kalouk",
  "developer": "Fabián Abarca",
  "university": "Universidad de Costa Rica",
  "course": "Modelos Probabilísticos de Señales y Sistemas",
  "project": "Estrategias docentes para sesiones virtuales interactivas con el desarrollo de un nuevo sistema web: una experiencia en el curso Modelos Probabilísticos de Señales y Sistemas",
  "description": "Ecosistema de herramientas y componentes web para la enseñanza de probabilidad y el análisis de datos con Python."
}
```

- Con el cliente Claude de Anthropic se hace una pregunta sobre Kalouk: "¿Quién es el desarrollador de Kalouk?". Claude reconoce que puede usar la herramienta `get_kalouk_info` para obtener información contextual:

![Imagen de ejemplo de uso de Kalouk MCP](/kalouk_mcp.png)

## Herramientas disponibles

::: danger Sin implementación completa

En esta etapa de desarrollo, no todas las _herramientas_ a continuación han sido implementadas, pero serán desarrolladas en los proyectos eléctricos (cursos integradores de bachillerato de ingeniería eléctrica) propuestos para el segundo ciclo de 2025.

:::

### Información del curso

- `get_kalouk_info()`: información general del ecosistema
- `get_course_syllabus()`: programa detallado del curso
- `get_topic_content(topic)`: contenido específico de un tema
- `search_concepts(query)`: búsqueda en la base de conocimientos (improbabilidades.com)

### Validación de evaluaciones

- `check_solution(student_answer, problem_id)`: verificación de respuestas
- `explain_concept(concept_name)`: explicaciones conceptuales
- `suggest_next_topics(current_progress)`: recomendaciones de estudio

## Ventajas pedagógicas

En conjunto con Kalouk WEB, la herramienta Kalouk MCP puede ofrecer las siguientes ventajas:

### Para el aprendizaje

- **Disponibilidad 24/7**: asistencia fuera del horario de clases
- **Personalización**: adaptación al ritmo individual de cada estudiante
- **Práctica ilimitada**: generación infinita de ejercicios nuevos
- **Retroalimentación inmediata**: corrección y explicación instantánea

### Para la enseñanza

- **Escalabilidad**: atención simultánea a múltiples estudiantes
- **Consistencia**: respuestas uniformes basadas en el contenido oficial
- **Análisis**: datos sobre dificultades comunes y progreso
