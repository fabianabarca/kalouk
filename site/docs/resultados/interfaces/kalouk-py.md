# Kalouk PY

::: info ¿Qué es?

Un paquete de Python para interactuar con los servicios y herramientas de Kalouk, especialmente para la gestión de contenidos y evaluaciones del curso.

:::

Kalouk PY es un paquete de Python que permite interactuar con los servicios y herramientas de Kalouk. Está diseñado para facilitar la integración de funcionalidades de Kalouk en aplicaciones Python, proporcionando una interfaz sencilla y eficiente para estudiantes y docentes.

Disponible en <span class="i-simple-icons-pypi"></span> [PyPI](https://pypi.org/project/kalouk/).

Kalouk PY es complementario y tiene traslapes de funcionalidad con Kalouk CLI.

## Instalación

```bash
pip install kalouk
```

## Características principales

- **Gestión de conjuntos de datos**: creación y envío de conjuntos de datos (_datasets_) con metadatos estándar
- **Integración con APIs**: comunicación directa con Kalouk WEB, Kalouk MCP y otros servicios externos
- **Metadatos Schema.org**: cumplimiento con estándares web de datos estructurados

## Uso básico

```python
from kalouk import Dataset

# Crear un nuevo dataset
dataset = Dataset()

# Configurar metadatos usando propiedades de Schema.org Dataset
dataset.set_metadata("name", "Análisis de Distribución Normal")
dataset.set_metadata("description", "Dataset para práctica de distribuciones normales")
dataset.set_metadata("creator", "Juan Pérez")
dataset.set_metadata("dateCreated", "2025-01-01")
dataset.set_metadata("license", "https://creativecommons.org/licenses/by/4.0/")

# Enviar a la API de Kalouk
response = dataset.send_to_kalouk()
print(f"Status: {response.status_code}")
```

## Casos de uso educativos

### Para estudiantes

**Entrega de análisis de datos**

```python
from kalouk import Assignment, Dataset
import pandas as pd
import numpy as np

# Cargar datos del ejercicio
data = pd.read_csv('lab-data.csv')

# Realizar análisis
mean_value = np.mean(data['values'])
std_dev = np.std(data['values'])

# Crear dataset con resultados
assignment = Assignment(student_id="12345", course="MPSS")
assignment.add_result("mean", mean_value)
assignment.add_result("std_deviation", std_dev)
assignment.add_analysis_code("analysis.py")

# Enviar entrega
assignment.submit()
```

**Validación de resultados**

```python
from kalouk import Validator

# Validar resultados antes de entregar
validator = Validator()
results = {
    "probability": 0.85,
    "confidence_interval": [0.75, 0.95],
    "sample_size": 100
}

validation = validator.check_probability_analysis(results)
if validation.is_valid:
    print("✅ Análisis correcto")
else:
    print(f"❌ Errores encontrados: {validation.errors}")
```

**Acceso a datos del curso**

```python
from kalouk import CourseData

# Obtener datos de práctica
course = CourseData(course_id="mpss-2025")
practice_data = course.get_practice_dataset("exponential_distribution")

# Usar en análisis
import matplotlib.pyplot as plt
plt.hist(practice_data.values, bins=30)
plt.title(f"Distribución: {practice_data.metadata['distribution_type']}")
plt.show()
```

### Para docentes

**Generación de ejercicios personalizados**

```python
from kalouk import ExerciseGenerator
import random

# Generar ejercicios únicos por estudiante
generator = ExerciseGenerator()

for student in course.get_students():
    # Parámetros aleatorios pero pedagógicamente válidos
    lambda_param = random.uniform(0.5, 3.0)
    sample_size = random.randint(50, 200)

    # Crear ejercicio personalizado
    exercise = generator.create_exponential_exercise(
        student_id=student.id,
        lambda_param=lambda_param,
        sample_size=sample_size,
        difficulty="intermediate"
    )

    # Enviar al sistema
    exercise.assign_to_student()
```

**Evaluación automática**

```python
from kalouk import AutoGrader

# Configurar evaluador automático
grader = AutoGrader(course="MPSS", assignment="lab-3")

# Procesar todas las entregas
submissions = grader.get_pending_submissions()

for submission in submissions:
    # Evaluar código y resultados
    grade = grader.evaluate(submission)

    # Generar retroalimentación
    feedback = grader.generate_feedback(submission, grade)

    # Guardar calificación
    grader.save_grade(submission.student_id, grade, feedback)
```

**Análisis de rendimiento del curso**

```python
from kalouk import CourseAnalytics
import seaborn as sns

# Analizar rendimiento general
analytics = CourseAnalytics(course_id="mpss-2025")

# Obtener estadísticas de participación
engagement_data = analytics.get_engagement_metrics()
grade_distribution = analytics.get_grade_distribution()

# Visualizar resultados
sns.boxplot(data=grade_distribution, x='assignment', y='score')
plt.title('Distribución de Calificaciones por Tarea')
plt.xticks(rotation=45)
plt.show()

# Identificar estudiantes en riesgo
at_risk = analytics.identify_at_risk_students(threshold=0.6)
print(f"Estudiantes que necesitan apoyo: {len(at_risk)}")
```

## Módulos principales

### `kalouk.Dataset`

Manejo de conjuntos de datos con metadatos estándar:

```python
dataset = Dataset()
dataset.load_from_csv("data.csv")
dataset.set_metadata("keywords", ["probability", "statistics"])
dataset.validate_schema()
```

### `kalouk.Assignment`

Gestión de entregas y evaluaciones:

```python
assignment = Assignment(assignment_id="hw-3")
assignment.add_file("analysis.py")
assignment.add_file("report.pdf")
assignment.set_due_date("2024-03-15")
```

### `kalouk.CourseData`

Acceso a recursos del curso:

```python
course = CourseData()
syllabus = course.get_syllabus()
lecture_notes = course.get_lecture_notes(week=5)
practice_problems = course.get_practice_problems(topic="random_processes")
```

## Configuración

### Archivo de configuración

Crear `.kalouk/config.json` en el directorio home:

```json
{
  "api": {
    "base_url": "https://web.kalouk.xyz",
    "timeout": 30
  },
  "course": {
    "id": "mpss-2024",
    "semester": "I-2024"
  },
  "student": {
    "id": "B12345",
    "name": "Juan Pérez"
  }
}
```

### Variables de entorno

```python
import os
os.environ['KALOUK_API_TOKEN'] = 'your-token-here'
os.environ['KALOUK_COURSE_ID'] = 'mpss-2024'
```

## Ejemplos avanzados

### Pipeline de análisis completo

```python
from kalouk import Pipeline

# Crear pipeline reutilizable
pipeline = Pipeline("statistical-analysis")

# Agregar pasos
pipeline.add_step("load_data", source="course_dataset")
pipeline.add_step("clean_data", method="remove_outliers")
pipeline.add_step("analyze", tests=["normality", "variance"])
pipeline.add_step("visualize", plots=["histogram", "qq_plot"])
pipeline.add_step("report", format="pdf")

# Ejecutar pipeline
results = pipeline.run(data_id="lab-5-data")
```

::: danger Implementación en progreso

No todas las funcionalidades descritas están implementadas, sino solamente planificadas.

:::
