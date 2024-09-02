<template>
  <li class="border-b-solid mb-1 flex flex-row border-b-2 border-b-black">
    <span class="w-[85%]">{{ itemText }}</span>
    <button
      class="w-[15%] cursor-pointer border-none bg-red-600 hover:bg-red-500"
      @click="removeItem(itemText)"
    >
      X
    </button>
  </li>
</template>

<script setup lang="ts">
import { useTasks } from '@/stores/TaskStore';

const { removeItem } = useTasks();

defineProps<{
  itemText: string;
}>();
</script>
