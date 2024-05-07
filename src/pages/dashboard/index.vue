<template>
  <div
    class="h-full flex flex-col"
    style="position: relative">
    <div class="f_button">
      <n-button
        v-if="showFooter == 1"
        @click="goBack">
        <n-icon size="20">
          <ArrowBackSharp />
        </n-icon>
      </n-button>
      <n-button
        v-if="showFooter == 2"
        @click="goBack">
        <n-icon size="20">
          <Home />
        </n-icon>
      </n-button>
    </div>
    <div class="pageHead">
      上禾汽修
    </div>
    <div
      class="pageView"
      :style="{ height: showFooter ? 'calc(100% - 70px - 60px)' : 'calc(100% - 60px)' }">
      <router-view />
    </div>
    <div
      v-if="showFooter != 1"
      class="pageFooter">
      <div class="row">
        <div
          class="menuBlock"
          @click="goToPage('add')">
          <n-icon size="25">
            <AddCircle />
          </n-icon>
          <div>新增資料</div>
        </div>
        <n-badge
          :value="2"
          :max="99">
          <div
            class="menuBlock"
            @click="goToPage('dwx')">
            <n-icon size="25">
              <Build />
            </n-icon>
            <div>待維修</div>
          </div>
        </n-badge>
        <n-badge
          :value="2"
          :max="99">
          <div
            class="menuBlock"
            @click="goToPage('djc')">
            <n-icon size="25">
              <CarSportSharp />
            </n-icon>
            <div>待交車</div>
          </div>
        </n-badge>
        <div
          class="menuBlock"
          @click="goToPage('lscx')">
          <n-icon size="25">
            <TimerOutline />
          </n-icon>
          <div>歷史查詢</div>
        </div>
        <div
          v-if="userRole == 'admin'"
          class="menuBlock"
          @click="goToPage('ymsd')">
          <n-icon size="25">
            <TimerOutline />
          </n-icon>
          <div>管理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AddCircle, Build, CarSportSharp, Home, TimerOutline, ArrowBackSharp
} from '@vicons/ionicons5';
import store from '@/store/index';
import {
  useRouter, useRoute
} from 'vue-router';
import {
  ref, watch
} from 'vue';
const router = useRouter();
const route: any = useRoute();
const showFooter = ref(0);
const userRole = ref(store.state.userRole);
watch(
  () => route.path,
  () => {
    getZt();
    userRole.value = store.state.userRole;
  }
);
const getZt = () => {
  if (route.path.indexOf('/add') != -1) {
    showFooter.value = 1;
  } else {
    if (route.path.indexOf('/home') != -1) {
      showFooter.value = 3;
    } else {
      showFooter.value = 2;
    }
  }
};
getZt();
const goToPage = (flag: any) => {
  if (flag == 'add') {
    router.push({ name: 'add' });
  }
  if (flag == 'dwx') {
    router.push({ name: 'repaired' });
  }
  if (flag == 'djc') {
    router.push({ name: 'checked' });
  }
  if (flag == 'lscx') {
    router.push({ name: 'historyList' });
  }
  if (flag == 'ymsd') {
    router.push({ name: 'setting' });
  }
};
const goBack = () => {
  router.push({ name: 'home' });
};
</script>
<style scoped lang="scss">
@import '@/style/custom.scss';
.pageHead {
  background-color: #87d8d1;
  text-align: center;
  font-size: 34px;
  color: #747474;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
}
.pageView {
  overflow-y: auto;
  padding: 30px;
  background: #fff;
  overflow: auto;
  padding: 10px 10px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.pageFooter {
  height: 70px;
  font-size: 16px;
  background-color: rgb(33, 37, 41);
  color: #fff;
  .row {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menuBlock {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.f_button {
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
</style>
