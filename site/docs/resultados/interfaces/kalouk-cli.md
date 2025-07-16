# Kalouk CLI

::: info ¿Qué es?

Una **interfaz de línea de comandos** (CLI) para interactuar de forma programática con los servicios de Kalouk, como Kalouk WEB y Kalouk MCP.

:::

Disponible en <span class="i-simple-icons-npm"></span> [@kalouk/cli](https://www.npmjs.com/package/@kalouk/cli).

Kalouk CLI es una herramienta de línea de comandos diseñada para facilitar la administración, configuración y uso de los servicios del ecosistema Kalouk desde la terminal, lo cual es común en entornos de programación.

## Instalación

```bash
# Instalación global
npm install -g @kalouk/cli

# Verificar instalación
kalouk --version
```

## Comandos principales

```bash
kalouk --help
```

::: danger Implementación parcial

Las funcionalidades descritas a continuación son planificadas y no están todavía todas implementadas.

:::

### Interfaz de consultas `quin`

El módulo `quin` (_query interface_) permite realizar consultas a la base de datos de Kalouk y acceder a recursos del curso.

```bash
kalouk quin --help

# Ejemplos de uso
kalouk quin students                   # Ver estudiantes del curso
kalouk quin assignments --active       # Ver tareas activas
kalouk quin data --distribution normal # Obtener datos de distribución normal
```

### Configuración de canalización de datos `pipe`

El módulo `pipe` permite configurar la canalización de datos (_data pipeline_) para automatizar flujos de trabajo educativos.

```bash
kalouk pipe --help

# Ejemplos de configuración
kalouk pipe create --name "lab-week-3" --type dataset
kalouk pipe schedule --task "generate-weekly-data" --cron "0 9 * * 1"
kalouk pipe status
```

## Casos de uso educativos de Kalouk CLI

### Para docentes

**Preparación de clases**

```bash
# Generar datos sintéticos para la clase de hoy
kalouk quin data --distribution exponential --params "lambda=2" --size 100 --output class-data.csv

# Configurar pipeline para ejercicios semanales
kalouk pipe create weekly-exercises --template markov-chains
```

### Para estudiantes

**Análisis de datos**

```bash
# Descargar dataset del proyecto final
kalouk quin project --id final-2024 --download

# Verificar formato de entrega
kalouk resource validate --file my-analysis.py --assignment final-project
```

### Para administradores del curso

**Monitoreo y estadísticas**

```bash
# Ver estadísticas de participación
kalouk quin analytics --period week --metric engagement

# Backup de datos del curso
kalouk pipe backup --destination ./course-backup-2024
```

## Ejemplos prácticos

### Generación de datos para laboratorio

```bash
# Crear datos para práctica de regresión lineal
kalouk quin data \
  --type regression \
  --variables 2 \
  --noise 0.1 \
  --size 200 \
  --output lab-regression.json

# Generar múltiples datasets para equipos
kalouk pipe batch \
  --template team-datasets \
  --count 8 \
  --output-dir ./team-data/
```

### Automatización de tareas recurrentes

```bash
# Configurar generación semanal de ejercicios
kalouk pipe schedule \
  --name "weekly-problems" \
  --template probability-problems \
  --cron "0 8 * * 1" \
  --notify-students

# Recordatorios automáticos de entregas
kalouk pipe reminder \
  --assignment-due 24h \
  --message "template-reminder.txt"
```

## Configuración

### Archivo de configuración

Crear `.kaloukrc` en el directorio `home`:

```json
{
  "server": {
    "url": "https://web.kalouk.xyz",
    "timeout": 30000
  },
  "auth": {
    "token": "your-api-token"
  },
  "defaults": {
    "output_format": "json",
    "data_size": 100
  }
}
```

### Variables de entorno

Para usar el CLI con la configuración adecuada y las credenciales de Kalouk:

```bash
export KALOUK_API_URL="https://web.kalouk.xyz"
export KALOUK_TOKEN="your-api-token"
export KALOUK_COURSE_ID="mpss-2025"
```
