<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          用户資料
        </div>
      </div>
      <div class="card-body">
        <n-grid cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                姓名：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'yhck'"
                  v-model:value="from.name"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.name }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                職稱：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'yhck'"
                  v-model:value="from.professional"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.professional }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                帳號：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'yhck'"
                  v-model:value="from.account"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.account }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                密碼：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'yhck'"
                  v-model:value="from.password"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.password }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                職稱：
              </div>
              <div class="i_i">
                <n-select
                  v-if="flag != 'yhck'"
                  v-model:value="from.role"
                  placeholder="請選擇"
                  :options="roleOptions" />
                <div
                  v-else
                  class="d_t">
                  {{ from.role }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref, onMounted
} from 'vue';
const from = ref<any>({});
const props = withDefaults(
  defineProps<{
    selectedItem: any;
    flag: any;
  }>(),
  {}
);
onMounted(() => {
  from.value = props.selectedItem;
});
const roleOptions = ref([
  {
    label: '管理員',
    value: '01'
  },
  {
    label: '用戶',
    value: '02'
  }
]);
</script>
<style scoped lang="scss">
@import '@/style/custom.scss';
.i_item {
  height: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 10px;
  padding-top: 10px;
  .i_l {
    text-align: right;
    width: 27%;
    font-size: 14px;
    // font-weight: bold;
    line-height: 30px;
  }
  .i_i {
    flex: 1;
    // height: calc(100% - 30px);
  }
  .d_t {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #515151;
  }
}
::v-deep {
  .n-checkbox-group {
    height: 100% !important;
    .n-space {
      height: 100% !important;
    }
  }
}
.footerBtn {
  margin: 10px 0px;
  display: flex;
  justify-content: center;
}
.card-body {
  padding-bottom: 30px;
}
</style>
