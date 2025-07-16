<template>
  <div class="bar-chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components - including BarController
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

interface Props {
  question: string;
}

const props = defineProps<Props>();
const chartCanvas = ref<HTMLCanvasElement>();
let chartInstance: Chart | null = null;

// Proper CSV parsing function that handles quoted fields with commas
const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      // Handle escaped quotes ("")
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
};

const getQuestionText = async (questionCode: string): Promise<string> => {
  try {
    const response = await fetch("/questions.csv");
    const csvText = await response.text();

    const lines = csvText.trim().split("\n");
    const headers = parseCSVLine(lines[0]);
    const questionIndex = headers.indexOf(questionCode);

    if (questionIndex === -1) {
      return questionCode; // Fallback to question code if not found
    }

    // Get the question text from the second row
    if (lines.length > 1) {
      const questionTexts = parseCSVLine(lines[1]);
      return questionTexts[questionIndex] || questionCode;
    }

    return questionCode;
  } catch (error) {
    console.error("Error loading questions CSV:", error);
    return questionCode; // Fallback to question code
  }
};

const createChart = async () => {
  if (!chartCanvas.value) return;

  try {
    // Get question text
    const questionText = await getQuestionText(props.question);

    // Fetch CSV data
    const response = await fetch("/answers.csv");
    const csvText = await response.text();

    // Parse CSV
    const lines = csvText.trim().split("\n");
    const headers = parseCSVLine(lines[0]);
    const questionIndex = headers.indexOf(props.question);

    if (questionIndex === -1) {
      console.error(`Question "${props.question}" not found in CSV headers`);
      return;
    }

    // Extract data for the specific question
    const questionData: number[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      const value = parseInt(values[questionIndex]);
      if (!isNaN(value) && value >= 1 && value <= 5) {
        questionData.push(value);
      }
    }

    // Count occurrences of each value (1-5)
    const counts = [0, 0, 0, 0, 0];
    questionData.forEach((value) => {
      counts[value - 1]++;
    });

    // Calculate percentages
    const total = questionData.length;
    const percentages = counts.map((count) =>
      ((count / total) * 100).toFixed(1)
    );

    // Destroy existing chart if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart
    chartInstance = new Chart(chartCanvas.value, {
      type: "bar",
      data: {
        labels: ["En desacuerdo", "2", "3", "4", "De acuerdo"],
        datasets: [
          {
            label: `Distribución de respuestas - ${props.question}`,
            data: counts,
            backgroundColor: [
              "rgba(239, 68, 68, 0.8)", // Red for 1
              "rgba(245, 158, 11, 0.8)", // Orange for 2
              "rgba(234, 179, 8, 0.8)", // Yellow for 3
              "rgba(34, 197, 94, 0.8)", // Green for 4
              "rgba(59, 130, 246, 0.8)", // Blue for 5
            ],
            borderColor: [
              "rgba(239, 68, 68, 1)",
              "rgba(245, 158, 11, 1)",
              "rgba(234, 179, 8, 1)",
              "rgba(34, 197, 94, 1)",
              "rgba(59, 130, 246, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: questionText,
            font: {
              size: 14,
              weight: "bold",
            },
            padding: {
              bottom: 20,
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const count = context.parsed.y;
                const percentage = percentages[context.dataIndex];
                return `Respuesta ${context.label}: ${count} (${percentage}%)`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Número de respuestas",
            },
            ticks: {
              stepSize: 1,
            },
          },
          x: {
            title: {
              display: true,
              text: "Valor de respuesta (en escala Likert)",
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error loading or parsing CSV data:", error);
  }
};

// Watch for question prop changes
watch(
  () => props.question,
  () => {
    createChart();
  }
);

onMounted(() => {
  createChart();
});

// Cleanup on unmount
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
.bar-chart-container {
  width: 100%;
  height: 200px;
  position: relative;
}

canvas {
  max-width: 100%;
  height: auto;
}
</style>
