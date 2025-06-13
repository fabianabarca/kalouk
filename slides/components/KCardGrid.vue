<script setup lang="ts">
defineProps<{
  cols: number;
}>();
</script>

<template>
  <div :class="`grid gap-4 my-4 grid-cols-2 sm:grid-cols-${cols}`">
    <slot />
  </div>
</template>
