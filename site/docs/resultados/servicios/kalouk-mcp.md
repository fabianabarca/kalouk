# Kalouk MCP

Servidor de contexto de Kalouk.

Un primer ejemplo de uso es el siguiente:

- Kalouk API devuelve los siguientes datos en el _endpoint_ `informacion/`:

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

- Con el cliente Claude de Anthropic se hace una pregunta sobre Kalouk. Claude interpreta que puede usar la herramienta `get_kalouk_info` para obtener información sobre Kalouk. La siguiente es la respuesta de Claude:

![Imagen de ejemplo de uso de Kalouk](/kalouk_mcp.png)
