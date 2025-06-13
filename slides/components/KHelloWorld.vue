<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Hola mundo",
  },
});

const display = ref(props.text);
</script>

<template>
  <div>
    {{ display }}
  </div>
</template>
