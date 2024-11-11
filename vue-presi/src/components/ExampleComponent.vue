<template>
  <div>Example {{ exampleState.text }}</div>
  <input v-model="exampleInput" />
  <button @click="setExample(exampleInput)">
    Set Example
  </button>
</template>

<script setup lang="ts">
import { useSimpleStore } from '@/stores/SimpleStore';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';

const simpleStore = useSimpleStore();
const { exampleState } = storeToRefs(simpleStore)
const { setExample } = simpleStore;

onMounted(() => {
  setExample("Anderes Beispiel");
});

onUnmounted(() => {
  setExample("Ein Beispiel");
});

const exampleInput = ref("");
</script>