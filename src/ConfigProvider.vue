<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    class="h-full">
    <n-message-provider>
      <n-dialog-provider>
        <n-config-provider
          class="h-full"
          :locale="zhCN"
          :date-locale="dateZhCN">
          <App />
        </n-config-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import {
  NConfigProvider, GlobalThemeOverrides,
  zhCN, dateZhCN
} from 'naive-ui';

import App from './App.vue';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1ba599',
    primaryColorHover: 'rgba(52, 133, 249, 1)',
    primaryColorPressed: '#23499b',
    textColor2: 'rgba(52, 52, 52, 1)',
    lineHeight: 'normal',
    fontFamily: 'SimHei',
    fontSize: '14px'
  }
};
</script>
<style scoped>
/* *{
  color: #019583;
} */
</style>
