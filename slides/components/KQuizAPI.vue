<template>
  <div class="max-w-xl mx-auto p-4">
    <div v-if="isLoading" class="text-center">Loading quiz...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else-if="quizData">
      <h1 class="text-xl font-bold mb-2">{{ quizData.title }}</h1>
      <p class="text-gray-600 mb-4">{{ quizData.description }}</p>

      <form @submit.prevent="submitQuiz">
        <div
          v-for="(question, qIndex) in quizData.questions"
          :key="question.question_id"
          class="mb-6"
        >
          <h3 class="font-semibold mb-1">
            {{ qIndex + 1 }}. {{ question.text }}
          </h3>

          <div class="flex flex-col gap-2">
            <label
              v-for="option in question.options"
              :key="option.option_id"
              class="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                :name="question.question_id"
                :value="option.option_id"
                v-model="answers[question.question_id]"
                class="accent-blue-500"
              />
              {{ option.text }}
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div
        v-if="score !== null"
        class="mt-6 p-4 bg-green-100 border border-green-300 rounded"
      >
        <p class="text-lg font-bold">
          You scored {{ score }} / {{ quizData.questions.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

interface Option {
  option_id: string;
  text: string;
}

interface Question {
  question_id: string;
  text: string;
  options: Option[];
  correct_option_id: string;
}

interface QuizData {
  quiz_id: string;
  title: string;
  description: string;
  questions: Question[];
  created_at: string;
  updated_at: string;
  author: {
    name: string;
    email: string;
  };
}

const props = defineProps<{
  quizCode: string;
}>();

const quizData = ref<QuizData | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);
const answers = ref<Record<string, string>>({});
const score = ref<number | null>(null);

watchEffect(async () => {
  isLoading.value = true;
  error.value = null;
  score.value = null;
  answers.value = {};
  try {
    const res = await fetch(`/quizzes/${props.quizCode}.json`);
    if (!res.ok) throw new Error("Quiz not found.");
    quizData.value = await res.json();
  } catch (err: any) {
    error.value = err.message || "Failed to load quiz.";
  } finally {
    isLoading.value = false;
  }
});

function submitQuiz() {
  if (!quizData.value) return;
  let count = 0;
  for (const q of quizData.value.questions) {
    if (answers.value[q.question_id] === q.correct_option_id) {
      count++;
    }
  }
  score.value = count;
}
</script>
