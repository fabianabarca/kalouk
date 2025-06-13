<template>
  <div class="k-quiz">
    <h3>
      <slot name="question" />
    </h3>
    <ul>
      <li v-if="slots.optionA">
        <label>
          <input type="radio" name="quiz" value="A" />
          <slot name="optionA" />
        </label>
      </li>
      <li v-if="slots.optionB">
        <label>
          <input type="radio" name="quiz" value="B" />
          <slot name="optionB" />
        </label>
      </li>
      <li v-if="slots.optionC">
        <label>
          <input type="radio" name="quiz" value="C" />
          <slot name="optionC" />
        </label>
      </li>
      <li v-if="slots.optionD">
        <label>
          <input type="radio" name="quiz" value="D" />
          <slot name="optionD" />
        </label>
      </li>
      <li v-if="slots.optionE">
        <label>
          <input type="radio" name="quiz" value="E" />
          <slot name="optionE" />
        </label>
      </li>
      <li v-if="slots.optionF">
        <label>
          <input type="radio" name="quiz" value="F" />
          <slot name="optionF" />
        </label>
      </li>
    </ul>
    <n-button @click="showAnswer">Enviar</n-button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useSlots } from "vue";
import { NButton } from "naive-ui";

const slots = useSlots();
console.log(slots);

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});

function showAnswer() {
  const selected = document.querySelector('input[name="quiz"]:checked');
  if (selected) {
    const answer = selected.value;
    if (answer === props.answer) {
      alert("Correct!");
    } else {
      alert("Incorrect! The correct answer is: " + props.answer);
    }
  } else {
    alert("Please select an answer.");
  }
}
</script>
