<template>
  <div class="mx-auto flex w-[50vw] flex-col gap-3 rounded-lg bg-white p-4 shadow-dark">
    <h3>Add two numbers</h3>
    <input
      v-model="num1"
      type="number"
      class="w-full rounded-full border-2 border-solid border-gray-700 px-4 py-1"
    />
    <input
      v-model="num2"
      type="number"
      class="w-full rounded-full border-2 border-solid border-gray-700 px-4 py-1"
    />
    <span>
      {{ `${num1} + ${num2} = ${addition}` }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const num1 = ref<number>(0);
const num2 = ref<number>(0);

const addition = computed(() => {
  return num1.value + num2.value;
});
</script>
