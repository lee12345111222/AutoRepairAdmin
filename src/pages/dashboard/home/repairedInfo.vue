<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          詳細資料
        </div>
      </div>
      <div
        class="card-body"
        style="max-height: calc(100vh - 165px); overflow-y: auto">
        <n-grid cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                車牌號碼：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.license }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                車主：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.owner }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                廠牌：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.brand }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                顏色：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.color }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                服務：
              </div>
              <div class="i_i">
                <div
                  v-if="from.service"
                  class="d_t">
                  {{ from.service.indexOf('baoyang') != -1? from.service.indexOf('weixiu') != -1?'保養和維修':'保養':from.service.indexOf('weixiu') != -1?'維修':'' }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid cols="1 400:2 600:3">
          <n-grid-item v-if="bylxShow">
            <div class="i_item">
              <div class="i_l">
                保養項目：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.maintain }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid cols="1 400:2 600:3">
          <n-grid-item
            v-if="wxlxShow"
            span="1 400:3 600:3">
            <div class="i_item">
              <div class="i_l">
                維修項目：
              </div>
              <div class="i_i">
                <div class="d_t">
                  {{ from.fix }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid
          v-if="props.flag=='jd'"
          cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                接單人員：
              </div>
              <div class="i_i">
                <n-select
                  v-model:value="from.jdry"
                  placeholder="請選擇"
                  :options="userOptions" />
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
const bylxShow = ref<boolean>(false);
const wxlxShow = ref<boolean>(false);
const props = withDefaults(
  defineProps<{
    selectedItem: any;
    flag: any;
  }>(),
  {}
);
const userOptions = ref([
  {
    value: 1,
    label: '小明'
  },
  {
    value: 2,
    label: '大明'
  },
  {
    value: 3,
    label: '小花'
  }
]);
onMounted(() => {
  from.value = props.selectedItem;
  changeFw(props.selectedItem.service);
});
const changeFw = (val: any) => {
  if (val.indexOf('baoyang') != -1) {
    bylxShow.value = true;
  } else {
    bylxShow.value = false;
  }
  if (val.indexOf('weixiu') != -1) {
    wxlxShow.value = true;
  } else {
    wxlxShow.value = false;
  }
};
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
