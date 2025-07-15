# Kalouk PY

::: info ¿Qué es?

Un paquete de Python para interactuar con los servicios y herramientas de Kalouk, especialmente para la gestión de contenidos y evaluaciones del curso.

:::

Kalouk PY es un paquete de Python que permite interactuar con los servicios y herramientas de Kalouk. Está diseñado para facilitar la integración de funcionalidades de Kalouk en aplicaciones Python, proporcionando una interfaz sencilla y eficiente.

Disponible en <span class="i-simple-icons-pypi"></span> [PyPI](https://pypi.org/project/kalouk/).

```python
from kalouk import Dataset

# Create a new dataset
dataset = Dataset()

# Set metadata using Schema.org Dataset properties
dataset.set_metadata("name", "My Dataset")
dataset.set_metadata("description", "A sample dataset")
dataset.set_metadata("creator", "John Doe")
dataset.set_metadata("dateCreated", "2025-01-01")
dataset.set_metadata("license", "https://creativecommons.org/licenses/by/4.0/")

# Send to Kalouk's API
response = dataset.send_to_kalouk()
print(f"Status: {response.status_code}")
```
