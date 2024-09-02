<template>
  <ul>
    <ListItem
      v-for="(item, index) in array"
      :key="`${index}_${item}`"
      :item-text="item"
    />
  </ul>
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue';

defineProps<{
  array: string[];
}>();
</script>
