# Kalouk

<img src="/K.svg" alt="UCR" width="200px" class="block mx-auto" />

<div class="text-xl">
Kalouk es un ecosistema de herramientas computacionales y componentes web para la creación de contenidos interactivos con elementos de matemáticas y programación aplicados al análisis de datos.
</div>

::: tip ¿Qué significa Kalouk?

El nombre "Kalouk" proviene de la lengua bribri y significa "agarrar" o "tomar", simbolizando la posibilidad de interactuar con los contenidos y de "atrapar" los conceptos.

:::

Bajo el nombre Kalouk fueron desarrollados los componentes más importantes del proyecto, para darles identidad y coherencia temática.

Kalouk no es un sistema monolítico como otros sistemas similares (Kahoot!, Nearpod, etc.) mostrados en la tabla de comparación con sistemas existentes similares en los [requisitos de diseño](../diseno/requisitos). En cambio, Kalouk está integrado con otros ambientes y sistemas que favorecen la interoperabilidad y la cooperación en escenarios más realistas de análisis de datos.

Esto confiere al sistema una flexibilidad mayor, apta para incorporar contenidos interactivos aprovechando el universo del desarrollo web y el software de código abierto.

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart TD
    subgraph Backend
        WEB[Kalouk WEB]
        MCP[Kalouk MCP]
    end
    subgraph Frontend
        CLI[Kalouk CLI]
        JS[Kalouk JS]
        PY[Kalouk PY]
        XYZ[Kalouk XYZ]
        PYX[Kalouk PyX]
        IMP[improbabilidades]
    end
    Backend <--> Frontend
    JS <--> XYZ
    JS <--> IMP
    PY <--> PYX
`" />

Para entender mejor los componentes de Kalouk, es apropiado iniciar por la guía de aplicación de Kalouk al diseño pedagógico de un curso, en la siguiente sección.
