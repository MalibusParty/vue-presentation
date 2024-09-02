<template>
  <div class="mx-auto flex w-[400px] flex-col gap-2 rounded-lg bg-white p-2 shadow-dark">
    <h3 class="w-full border-b-2 border-solid border-b-black text-center">Tasks</h3>
    <input
      v-model="filter"
      class="w-full rounded-full border-2 border-solid border-gray-700 px-4 py-1"
      placeholder="Filter Tasks"
    />
    <TaskList :array="filteredItems" />
    <ItemInput />
  </div>
</template>

<script setup lang="ts">
import TaskList from '@/components/TaskList.vue';
import { ref, watch } from 'vue';
import { useTasks } from '@/stores/TaskStore';
import ItemInput from '@/components/ItemInput.vue';

const { setFilter, filteredItems } = useTasks();
const filter = ref('');

watch(
  () => filter.value,
  () => setFilter(filter.value)
);
</script>
