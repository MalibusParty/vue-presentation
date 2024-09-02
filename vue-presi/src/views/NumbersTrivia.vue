<template>
  <div class="mx-auto h-fit w-[50vw] rounded-lg bg-white p-4 shadow-dark">
    <span v-if="trivia.found">
      {{ `Trivia for number ${trivia.number}: ${trivia.text}` }}
    </span>
    <span v-else> Search for trivia about a number </span>
    <InputButton
      v-model="numberToSearch"
      :btn-type="'number'"
      :callback="() => getTriviaFact(numberToSearch)"
    >
      Get Fact
    </InputButton>
  </div>
</template>

<script setup lang="ts">
import InputButton from '@/components/InputButton.vue';
import { useTrivia } from '@/services/NumberTrivia';
import { ref } from 'vue';

const { getTriviaFact, trivia } = useTrivia();

const numberToSearch = ref(0);
</script>
