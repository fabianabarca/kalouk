<template>
  <n-grid :x-gap="12" :y-gap="12" :cols="3" responsive="screen">
    <n-grid-item>
      <div class="light-green">1</div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">2</div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">3</div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">4</div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">5</div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">6</div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">7</div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">8</div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">9</div>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from "naive-ui";
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
