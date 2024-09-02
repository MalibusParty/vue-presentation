<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex w-full items-center gap-2 bg-blue-600 p-2 text-white">
      <StyledRouterLink route-name="task"> Task </StyledRouterLink>
      <StyledRouterLink route-name="numbers"> Numbers </StyledRouterLink>
      <StyledRouterLink route-name="addition"> Compute </StyledRouterLink>
    </header>

    <main class="mt-8 grow">
      <RouterView />
      <Popup
        :is-open="isPopupOpen"
        @close-click="(value) => closePopup(value)"
      >
        You still have Tasks to complete!
      </Popup>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import StyledRouterLink from './components/StyledRouterLink.vue';
import { useTasks } from '@/stores/TaskStore';
import Popup from '@/components/Popup.vue';
import { ref, watch } from 'vue';

const { items } = useTasks();
const isPopupOpen = ref(false);
const route = useRoute();

watch(route, () => checkTasks());

function checkTasks() {
  if (items.length > 0) {
    isPopupOpen.value = true;
  }
}

function closePopup(logMsg: string) {
  isPopupOpen.value = false;
  console.log(logMsg);
}
</script>
