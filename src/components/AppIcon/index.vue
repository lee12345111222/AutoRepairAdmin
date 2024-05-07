<template>
  <fab
    v-if="icon.startsWith('fa-brands')"
    :icon="icon" />
  <far
    v-else-if="icon.startsWith('fa-regular')"
    :icon="icon" />
  <fas
    v-else
    :icon="icon" />
</template>
<script lang="ts" setup>
import Icons from './icons';
import { defineAsyncComponent } from 'vue';
defineProps<{
  icon: Icons;
}>();
const Fas = defineAsyncComponent(() => import('./Fas.vue'));
const Fab = defineAsyncComponent(() => import('./Fab.vue'));
const Far = defineAsyncComponent(() => import('./Far.vue'));

</script>
