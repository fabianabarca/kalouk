# Ecosistema

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob3|Me1` Creación del **mapa del sitio**
- `Ob3|Me2` Creación de la página de inicio del sitio y otras páginas misceláneas
- `Ob3|Me3` Diseño de la **apariencia del sitio** y de las presentaciones

:::

## Transformación

::: tip Ecosistema de componentes web

El proyecto evolucionó para pasar de un **sistema de presentaciones** a un **ecosistema de componentes web** para facilitar la creación de contenidos interactivos aplicados al análisis de datos, utilizados en presentaciones en línea pero también en contenido teórico y ejercicios de programación.

:::

Los principios rectores de esta transformación fueron:

- **Modularidad**: composición del sistema a partir de unidades funcionales menores
- **Interoperabilidad**: capacidad del sistema de interactuar con componentes externos
- **Extensibilidad**: disposición del sistema para ser ampliado y mejorado

Esta transformación es producto de la experiencia acumulada durante el desarrollo del proyecto y, a criterio del autor, abre nuevas posibilidades de crecimiento para el proyecto, incluyendo la colaboración con la comunidad internacional como software libre y de código abierto (FOSS, _Free and Open Source Software_).

:information_source: **Más información**

- ☑️ [Resultados](/resultados/index.md)

## Arquitectura del sistema

> La arquitectura del sistema muestra los componentes más importantes, su funcionalidad y la relación entre las partes.

La arquitectura aquí es presentada de forma genérica, mientras que en la sección [Kalouk](/resultados/kalouk.md) está la implementación específica del proyecto.

::: warning Metas obsoletas

Debido a la transformación del proyecto de una página web a un ecosistema de componentes web, las metas asociadas con el objetivo específico 3 (arquitectura) ya no representan el desarrollo realizado. Por tanto, las metas nuevas y equivalentes son:

- 🚫 _Creación del mapa del sitio_ <br> ✅ **Creación del diagrama tecnológico del sistema**
- 🚫 _Creación de la página de inicio del sitio y otras páginas misceláneas_ <br> ✅ **Creación de los sitios informativos de los componentes del sistema**
- 🚫 _Diseño de la apariencia del sitio y de las presentaciones_ <br> ✅ **Diseño de la identidad visual del sistema**

:::

### Diagrama tecnológico

El diagrama tecnológico a continuación muestra dos grandes áreas: el **servidor**, donde la información es procesada y almacenada, y el **cliente**, donde las personas usuarias interactúan con los datos.

<Mermaid :code="`
flowchart TD
    subgraph Servidor
        direction LR
        BD[(Base de datos)]
        MCP[/Contexto para agentes IA/]
        DS[Datos sintéticos]
        W[Sitios web]
    end
    subgraph Cliente
        direction LR
        subgraph Navegador
            P[Presentaciones interactivas]
            T[Teoría interactiva]
        end
        subgraph Programación
            CLI[Interfaz de línea de comandos]
            IDE[Entorno integrado de desarrollo]
        end
    end
    BD <--> W
    BD <--> MCP
    Servidor <-- modelos de comunicación --> Cliente
`" />

Los componentes genéricos del ecosistema son:

- **Datos sintéticos**: generación de datos sintéticos (artificiales), útiles para los ejercicios de programación de estadística y probabilidad.
- **Base de datos**: almacenamiento del registro de participantes, evaluaciones, contenidos del curso y otros.
- **Contexto para agentes IA**: servidor capaz de ofrecer contexto (información complementaria) a agentes de inteligencia artificial para responder preguntar relacionadas con el curso.
- **Sitios web**: varios sitios que albergan los componentes del sistema.
- **Presentaciones interactivas**: diapositivas para sesiones virtuales sincrónicas (propósito original del proyecto).
- **Teoría interactiva**: contenido del curso aumentado con las mismas herramientas de interactividad utilizadas en las presentaciones, pero para sesiones asincrónicas.
- **Interfaz de línea de comandos**: acceso desde las "terminales" de las computadoras para rápido acceso de estudiantes y docentes a las funcionalidades del sistema.
- **Entorno integrado de desarrollo**: herramientas para incorporar dentro de los editores de código e interactuar de forma programática con el sistema (por ejemplo, un paquete de Python).
- **Modelos de comunicación**: una variedad de métodos de comunicación entre clientes y servidores para habilitar ejercicios de interactividad diferentes:
  - _API_: habilita interacción con la base de datos para recopilar, crear, eliminar o actualizar registros.
  - _Webhooks_: permite la automatización de acciones en el servidor cuando suceden eventos.
  - _WebSocket_: crea un canal bidireccional persistente entre cliente y servidor que habilita interactividad, como en chats o datos en tiempo real.
  - _SSE_: crea un canal unidireccional persistente que permite el envío de eventos del servidor a los clientes.

### Sitios informativos

A raíz de la estructura de los resultados, hay varios sitios web del proyecto.

:information_source: **Más información**

- ☑️ [Resultados](/resultados/index.md)

### Identidad visual

La identidad visual fue diseñada para "Kalouk", el nombre del producto del proyecto.

:information_source: **Más información**

- 🔵 [Kalouk](/resultados/kalouk.md)
