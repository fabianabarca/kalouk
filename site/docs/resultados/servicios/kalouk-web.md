# Kalouk WEB

::: info ¿Qué es?

Un **servidor web versátil** para generación de datos sintéticos utilizados en el curso y sus proyectos, accesibles por medio de diferentes modelos de comunicación (REST API, WebSocket, SSE y webhooks).

:::

Kalouk WEB es el núcleo del ecosistema, proporcionando servicios de _backend_ que permiten la generación, manipulación y distribución de datos para actividades educativas.

## Características principales

- **Generación de datos sintéticos**: creación de conjuntos de datos realistas para ejercicios y proyectos
- **Múltiples formatos de salida**: JSON, CSV, XML según las necesidades del ejercicio
- **Comunicación en tiempo real**: soporte para interacciones sincrónicas y asincrónicas
- **Escalabilidad**: diseñado para manejar desde clases pequeñas hasta cursos masivos, sin restricciones típicas de otros sistemas como Nearpod o Mentimeter.
- **Integración educativa**: APIs optimizadas para flujos de trabajo académicos

## Modelos de comunicación

### REST API

::: tip Documentación del API

Un componente esencial de cualquier API es la documentación. La documentación de Kalouk API 0.2.0 está en:

https://web.kalouk.xyz/api/docs

:::

La REST API de Kalouk WEB proporciona _endpoints_ para:

- **Generación de datos**: `/api/generate/` - crear conjuntos de datos con parámetros específicos
- **Gestión de proyectos**: `/api/projects/` - administrar proyectos de estudiantes
- **Análisis estadístico**: `/api/analysis/` - ejecutar análisis predefinidos
- **Recursos del curso**: `/api/resources/` - acceder a materiales y ejercicios

::: danger No implementado

Dado que los _endpoints_ para manipular datos dependen del proyecto específico, varían cada semestre, así que estos son solo ejemplos.

:::

**Ejemplo de uso**

```javascript
// Generar datos de una distribución normal
fetch("https://web.kalouk.xyz/api/generate/normal", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    mean: 0,
    std: 1,
    size: 1000,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### WebSocket

Para aplicaciones que requieren comunicación bidireccional en tiempo real:

- **Simulaciones en vivo**: estudiantes pueden ver cambios de parámetros en tiempo real
- **Ejercicios colaborativos**: múltiples estudiantes trabajando en el mismo conjunto de datos
- **Retroalimentación instantánea**: validación inmediata de respuestas y cálculos

**Ejemplo de conexión**

```javascript
const socket = new WebSocket("wss://web.kalouk.xyz/ws/live-simulation");

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  updateVisualization(data);
};

// Enviar parámetros actualizados
socket.send(
  JSON.stringify({
    action: "update_parameters",
    lambda: 2.5,
  })
);
```

### Server-Sent Events (SSE)

Para flujos de datos unidireccionales del servidor al cliente:

- **Monitoreo de progreso**: seguimiento en tiempo real del procesamiento de datos
- **Notificaciones del curso**: actualizaciones sobre nuevos ejercicios o resultados
- **_Streaming_ de datos**: transmisión continua de datos generados (ver ejemplo del primer ciclo de 2025 más adelante)

**Ejemplo de implementación**

```javascript
const eventSource = new EventSource(
  "https://web.kalouk.xyz/api/stream/progress"
);

eventSource.onmessage = function (event) {
  const progress = JSON.parse(event.data);
  updateProgressBar(progress.percentage);
};
```

El proyecto de programación del primer ciclo del 2025 incluía la recopilación de datos SSE, que envía actualizaciones de cambio de estado en una cadena de Markov, uno de los temas del curso.

![Ejemplo de datos SSE](/sse.png)

### Webhooks

Para integración con sistemas externos:

- **LMS** (sistemas de gestión del aprendizaje): envío automático de calificaciones a plataformas como Moodle (como Mediación Virtual) o Canvas
- **Notificaciones por email**: alertas automáticas sobre entregas o deadlines
- **Sincronización de datos**: actualización automática de bases de datos externas

**Configuración típica**

```javascript
{
  "webhook_url": "https://moodle.universidad.edu/webhook/kalouk",
  "events": ["assignment_submitted", "grade_calculated"],
  "auth": {
    "type": "bearer",
    "token": "your_api_token"
  }
}
```

## Casos de uso educativos de Kalouk WEB

- Laboratorios virtuales
- Generación de **datos experimentales simulados**
- Comparación de **diferentes metodologías** estadísticas
- **Visualización interactiva** de conceptos probabilísticos
- **Proyectos** de curso
- Conjuntos de **datos personalizados** por estudiante o equipo
- Seguimiento del **progreso**
- **Validación automática** de resultados
- Evaluaciones **automatizadas**
- Generación de **ejercicios únicos por estudiante**
- **Corrección automática** de análisis estadísticos
- **Retroalimentación inmediata** sobre metodología
