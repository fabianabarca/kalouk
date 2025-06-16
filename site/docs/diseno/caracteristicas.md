<script setup>
import Counter from '../.vitepress/theme/components/Counter.vue'
import CardGrid from '../.vitepress/theme/components/CardGrid.vue'
import Card from '../.vitepress/theme/components/Card.vue'
</script>

# Características del sistema

::: info Puntos clave

- Puntos clave
- Síntesis

:::

- Tabla de **comparación** de sistemas existentes similares
- Lista de **características** deseables
- Diseño de la **apariencia del sitio** y de las presentaciones

El sistema propuesta cae dentro del segmento de plataformas en línea tipo software como servicio (SaaS, _Software-as-a-Service_), y dentro de dos subcategorías:

1. Sistemas de presentaciones en línea
2. Plataformas de aprendizaje digital

Existe una gran cantidad de opciones disponibles, del orden de cientos, sin embargo, en esta comparación solamente serán analizados los más relevantes o similares por sus objetivos.

Según la lista de características deseables para el sistema propuesto (descrito más adelante en la meta 2) es posible hacer una calificación de estos sistemas analizados. Se asignó un punto por el cumplimiento de cada característica.

Libre y de código abierto
Facilidad para mostrar ecuaciones y figuras matemáticas
Integración con herramientas de Python
Integración con herramientas de JavaScript
Visible desde el navegador y no como pantalla compartida, lo que significa menor uso de datos (conveniente para personas con conectividad a internet limitada) y mejor visibilidad (mayor resolución y posibilidad de hacer zoom)

## Comparación con sistemas similares

La siguiente es la lista de características que fueron determinadas como deseables para el sistema, y que fueron comparadas con los sistemas existentes similares (según una investigación en línea en https://www.g2.com/, un sitio para comparar productos de software, realizada en abril de 2023).

1. Capacidad de mostrar **diapositivas en un navegador web**, adaptadas para ese medio y para distintos tamaños de pantallas como monitores, laptops, tabletas o celulares.
1. Capacidad de mostrar **diapositivas con contenido multimedia**, como imágenes, audios, videos y animaciones.
1. Capacidad de mostrar **diapositivas con cualquier contenido usando tecnologías web** (HTML, CSS y JavaScript) para expandir las posibilidades de presentación a la gran diversidad de desarrollos existentes en esa esfera.
1. Capacidad de uso de **plataformas (_frameworks_) de _front end_**, como React, Vue o Angular, para facilitar la creación de contenido interactivo.
1. Capacidad de mostrar **diapositivas con interacción básica** como formularios de selección única o múltiple.
1. Capacidad de mostrar **diapositivas con interacción avanzada**.
1. Capacidad de mostrar **contenido matemático**, como fórmulas y otros símbolos, de forma nativa, es decir, con posibilidad de edición y _renderización_ directa en el sistema.
1. Capacidad de integrar **herramientas de visualización de datos y resultados de simulaciones con software de computación científica**, tales como gráficas estáticas e interactivas de diversos tipos: de barras, de líneas, circulares, de puntos, tablas, interactivas, modelos tridimensionales, animaciones, etc.
1. Capacidad de mostrar **código fuente de forma nativa** para discusiones sobre programación.
1. Capacidad de **editar y ejecutar código** en la misma plataforma.
1. Capacidad de hacer **sesiones remotas sincrónicas o asincrónicas**, con participación de personas desde cualquier dispositivo con un navegador web. En el caso sincrónico, una persona presentadora es capaz de controlar las diapositivas para todos los participantes.
1. Capacidad nativa de **registro de participantes** en una base de datos para almacenamiento de la información de su participación y estadísticas generales de uso.
1. Capacidad de **editar el aspecto** (tema) de las presentaciones para seguir la identidad visual del proyecto.
1. Capacidad de **edición de diapositivas con interfaz de usuario**, no con código.
1. Disponible como **software libre**.

La comparación es la siguiente:

| Plataforma        | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | Total |
| ----------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----- |
| Sli.dev           | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 0   | 1   | 1   | 1   | 14    |
| Reveal.js         | 1   | 1   | 1   | 0   | 1   | 1   | 1   | 1   | 1   | 0   | 1   | 0   | 1   | 0   | 1   | 11    |
| Slides            | 1   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 0   | 1   | 0   | 7     |
| Nearpod           | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| Kahoot!           | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| Socrative         | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| RELAYTO           | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| Mentimeter        | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| mmhmm             | 1   | 1   | 1   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 7     |
| Synthesia         | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Vyond             | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Visme             | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Beautiful.ai      | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Powtoon           | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Colossyan Creator | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   | 6     |
| Genially          | 1   | 1   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 6     |
| PowerPoint        | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 6     |
| Zoom              | 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 0   | 0   | 5     |
| Beamer de LaTeX   | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 4     |
| Slidebean         | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 5     |
| Prezi             | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 4     |
| Canva             | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 4     |

Desde esta perspectiva, se puede observar que la elección de Slidev como plataforma de desarrollo es la más adecuada en función de la lista de características deseadas. Sin embargo, dicha elección no constituye una "calificación perfecta", ya que su edición no es sencilla y requiere conocimientos especializados de programación. Además, la plataforma carece de un sistema "back-end" para el registro de participantes, por lo que es necesario desarrollarlo mediante el uso de Django, tal como se especifica en el segundo objetivo específico.

::: danger Cambio de herramienta base
Por la mayor parte del tiempo de ejecución del proyecto, la herramienta utilizada fue Reveal.js. Sin embargo, a pesar de muchos esfuerzos, la plataforma no fue capaz de ofrecer la funcionalidad deseada para el sistema, incluyendo la ejecución de código y la edición de diapositivas.
:::

## Especificación de las características de Kalouk

Praesentium cumque inventore possimus nam in dolor provident sed corrupti, assumenda quae dolorum repellat ut explicabo nostrum voluptate. Molestias quod quasi tempora doloremque magnam nam minima laboriosam, repellat quidem ex culpa voluptatibus beatae hic earum, corrupti eos commodi, dolorum doloremque unde aliquam perspiciatis et assumenda labore, ipsum iure minima harum ullam nesciunt accusantium? Tempore doloribus expedita assumenda ratione nam quibusdam, ipsam asperiores possimus fuga eum ipsum in voluptatum voluptates quia, culpa quidem expedita impedit quia corporis odio a tempore?
