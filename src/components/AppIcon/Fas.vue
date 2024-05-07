<template>
  <FontAwesomeIcon
    :icon="icon"
    size="xs" />
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icons from './icons';

library.add(fas);
defineProps<{
  icon: Icons;
}>();
</script>
