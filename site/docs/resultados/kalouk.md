# Kalouk

<img src="/K.svg" alt="UCR" width="200px" class="block mx-auto" />

<div class="text-xl">
Kalouk es un ecosistema de herramientas computacionales y componentes web para la creación de contenidos interactivos con elementos de matemáticas y programación aplicados al análisis de datos.
</div>

Bajo el nombre Kalouk fueron desarrollados los componentes más importantes del proyecto, para darles identidad y coherencia temática.

::: tip ¿Qué significa Kalouk?

El nombre "Kalouk" proviene de la lengua bribri y significa "agarrar" o "tomar", simbolizando la posibilidad de interactuar con los contenidos y de "atrapar" los conceptos.

:::

Algunos componentes de Kalouk caen dentro de la categoría de **software como servicio** (SaaS, _Software-as-a-Service_), y, en general, dentro de dos subcategorías:

- _Sistemas de presentaciones en línea_
- _Plataformas de aprendizaje digital_

Kalouk no es un sistema monolítico como otros sistemas similares (Kahoot!, Nearpod, etc.) mostrados en la tabla de comparación con sistemas existentes similares en los [requisitos de diseño](../diseno/requisitos). En cambio, Kalouk está integrado con otros ambientes y sistemas que favorecen la **interoperabilidad**, la **modularidad** y la **extensibilidad** para la cooperación en escenarios más realistas de análisis de datos, según fue descrito en la transformación del diseño en un [ecosistema](/diseno/ecosistema.md).

Esto confiere al proyecto una flexibilidad mayor, apta para incorporar contenidos interactivos aprovechando el universo del desarrollo web y del desarrollo colaborativo de software de código abierto.

La arquitectura básica del sistema está en el siguiente diagrama.

<!-- prettier-ignore -->
<Mermaid :code="`
flowchart TD
    subgraph Backend [Procesamiento de datos]
        WEB[Kalouk WEB]
        MCP[Kalouk MCP]
    end
    subgraph Frontend [Interacción con usuarios]
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

Para entender mejor los componentes de Kalouk por medio de una clasificación en **interfaces**, **servicios** y **contexto**, es apropiado iniciar por la [guía de aplicación](/resultados/guia.md) de Kalouk al diseño pedagógico de un curso.

## Identidad visual

### Paleta de colores

Pra Kalouk fue elegida la paleta de colores de [Catppuccin](https://catppuccin.com/), una popular combinación de colores pastel para temas claros y oscuros.

Por ejemplo, el sitio improbabilidades.com en tema claro luce así:

![Captura de pantalla de improbabilidades.com](/improbabilidades.png)

### Logo

El logo es una letra "k" en distintos colores de la paleta:

<img src="/K_icon.png" alt="Logo de Kalouk" width="150" />

### Tema personalizado de Kalouk para Slidev

Como uno de los principales resultados, fue creado un tema de Kalouk para las presentaciones en Slidev con los colores y distintas formas de diagramación específicas de las necesidades del proyecto.

El tema está disponible para uso público aquí: https://www.npmjs.com/package/slidev-theme-kalouk. Más información en la sección de [Slidev](/resultados/interfaces/slidev.md).
