<template>
  <div class="view-container">
    <h3 class="task-text task-header">Tasks</h3>
    <input
      v-model="filter"
      class="task-text task-filter"
      placeholder="Filter Tasks"
    />
    <TaskList :array="taskStore.filteredItems" />
    <ItemInput />
  </div>
</template>

<script setup lang="ts">
import TaskList from '@/components/TaskList.vue';
import { ref, watch } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
import ItemInput from '@/components/ItemInput.vue';

const taskStore = useTaskStore();
const { setFilter } = taskStore;
const filter = ref('');

watch(
  () => filter.value,
  () => setFilter(filter.value)
);
</script>

<style scoped>
.view-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  width: 400px;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.1);
}

.task-text {
  width: 100%;
  border-style: solid;
}

.task-header {
  border-bottom-width: 2px;
  border-bottom-color: black;
  text-align: center;
}

.task-filter {
  border-width: 2px;
  border-color: #374151;
  border-radius: 100px;
  padding: 0.25rem 1rem;
}
</style>