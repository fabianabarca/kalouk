# Guía de aplicación de Kalouk

::: info Metas e indicadores

En esta página (ver [objetivos](/proyecto/objetivos.md)):

- `Ob5|Me2` Creación de una propuesta de **guía pedagógica** para la incorporación del sistema en los cursos universitarios

:::

A continuación hay una serie de pasos recomendados para hacer un diseño estructurado del uso de Kalouk en un curso universitario con componentes de matemáticas y programación y énfasis en el análisis de datos.

## Paso 1: Crear un Espacio Kalouk

::: tip Premisa
La estrategia pedagógica para el uso de Kalouk gira alrededor de la creación de un **Espacio Kalouk**, la base para crear experiencias educativas interactivas con las herramientas desarrolladas.
:::

Un **Espacio Kalouk** tiene tres componentes:

- **Servicios**: sistemas que facilitan el uso de datos y la interacción entre las partes.
- **Interfaces**: puntos de contacto con los usuarios, tanto docentes como estudiantes.
- **Contexto**: teoría y cualquier otro tipo de contenido que sustentan el espacio educativo.

Su relación, incluyendo los componentes del [ecosistema Kalouk](/resultados/kalouk), está descrita en el siguiente diagrama:

<img src="/espacio_light.svg" alt="Espacio Kalouk" class="block dark:hidden" />
<img src="/espacio_dark.svg" alt="Espacio Kalouk" class="hidden dark:block" />

A continuación hay una ampliación de cada componente.

### Servicios

| Componente    | Descripción                                           |
| ------------- | ----------------------------------------------------- |
| Kalouk WEB    | Servidor principal que gestiona datos y comunicación. |
| Kalouk MCP    | Interacción con agentes de inteligencia artificial    |
| Base de datos | Almacenamiento de resultados de evaluaciones y otros  |

#### Decisiones de diseño

<div class="mt-3">
    <input type="checkbox" id="scales" />
    <label for="scales">¿Cuáles tipos de datos son necesarios?</label>
</div>
<div class="mt-3">
    <input type="checkbox" id="horns" />
    <label for="horns">Horns</label>
</div>

### Interfaces

| Componente | Descripción                                                       |
| ---------- | ----------------------------------------------------------------- |
| Kalouk CLI | Interfaz de línea de comandos para interactuar con los servicios. |
| Kalouk JS  | Conjunto de paquetes de JavaScript para incorporar en sitios web. |
| Kalouk PY  | Paquete de Python para interactuar con los servicios.             |
| Kalouk XYZ | Sitio web con las presentaciones del curso.                       |
| Kalouk PWA | Aplicación móvil con .                                            |
| Slidev     | Aplicación móvil con .                                            |
| VitePress  | Aplicación móvil con .                                            |

### Contexto

| Componente | Descripción                                                        |
| ---------- | ------------------------------------------------------------------ |
| Documentos | Teoría, programa del curso y cualquier otra información relevante. |
| Datos      | Estadísticas, .                                                    |

## Paso 2: Establecer objetivos de las experiencias educativas interactivas

::: tip Premisa
La estrategia pedagógica para el uso de Kalouk gira alrededor de la creación de un **Espacio Kalouk**, la base para crear experiencias educativas interactivas con las herramientas desarrolladas.
:::

<script setup>
import Dice from '../../docs/.vitepress/theme/components/Dice.vue'
</script>

<Dice />

## Paso 3:

::: tip Premisa
La estrategia pedagógica para el uso de Kalouk gira alrededor de la creación de un **Espacio Kalouk**, la base para crear experiencias educativas interactivas con las herramientas desarrolladas.
:::
