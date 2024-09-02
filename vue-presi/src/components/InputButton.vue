<template>
  <div class="input-btn flex w-full flex-row rounded-full border-2 border-solid border-gray-700 bg-white px-4 py-1">
    <input
      v-model="value"
      :type="btnType"
      class="h-full w-[70%] border-none bg-transparent text-black outline-none"
    />
    <button
      class="border-l-solid h-full w-[30%] cursor-pointer border-l-2 border-l-gray-700 bg-transparent text-black hover:font-bold hover:text-gray-700"
      @click="handleClick"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: number;
  btnType: string;
  callback: () => void;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});

const handleClick = () => {
  props.callback();
};
</script>
