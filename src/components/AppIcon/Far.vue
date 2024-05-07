<template>
  <FontAwesomeIcon
    :icon="icon"
    size="xs" />
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import Icons from './icons';

library.add(far);
defineProps<{
  icon: Icons;
}>();
</script>
