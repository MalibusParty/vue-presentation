<template>
  <div>Example {{ exampleState.text }}</div>
  <input v-model="exampleInput" />
  <button @click="setExample(exampleInput)">
    Set Example
  </button>
</template>

<script setup lang="ts">
import { useExample } from '@/stores/SimpleStore';
import { onMounted, onUnmounted, ref } from 'vue';

const { exampleState, setExample } = useExample();

onMounted(() => {
  setExample("Anderes Beispiel");
});

onUnmounted(() => {
  setExample("Ein Beispiel");
});

const exampleInput = ref("");
</script>