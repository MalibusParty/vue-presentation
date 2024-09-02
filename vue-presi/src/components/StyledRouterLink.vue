<template>
  <RouterLink
    :to="{ name: routeName }"
    :class="{ underline: isCurrentRoute }"
    class="hover:underline"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute, type RouteRecordNameGeneric } from 'vue-router';

const props = defineProps<{
  routeName: RouteRecordNameGeneric;
}>();

const route = useRoute();
const isCurrentRoute = computed(() => route.name === props.routeName);
</script>
