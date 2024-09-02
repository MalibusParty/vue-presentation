<template>
  <div
    v-if="isOpen"
    class="absolute inset-x-0 top-[100px] mx-auto flex w-[250px] flex-col gap-4 rounded-lg bg-red-600 p-8 text-center text-white shadow-dark"
  >
    <slot />
    <button
      class="rounded-lg border-2 border-solid border-white p-2 hover:bg-red-500"
      @click="emit('closeClick', 'Closing Popup')"
    >
      Close
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isOpen?: boolean;
  }>(),
  {
    isOpen: false
  }
);

const emit = defineEmits<{
  closeClick: [value: string];
}>();
</script>
