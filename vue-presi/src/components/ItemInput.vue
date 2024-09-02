<template>
  <div class="input-btn flex w-full flex-row rounded-full border-2 border-solid border-gray-700 bg-white px-4 py-1">
    <input
      v-model="item"
      placeholder="Taskname"
      class="h-full w-[70%] border-none bg-transparent text-black outline-none"
    />
    <button
      class="border-l-solid h-full w-[30%] cursor-pointer border-l-2 border-l-gray-700 bg-transparent text-black hover:font-bold hover:text-gray-700"
      @click="handleClick"
    >
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTasks } from '@/stores/TaskStore';

const { addItem } = useTasks();

const item = ref('');

const handleClick = () => {
  addItem(item.value);
};
</script>
