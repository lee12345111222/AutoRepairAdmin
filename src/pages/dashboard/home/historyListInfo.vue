<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          歷史記錄
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
                <n-input
                  v-if="props.flag == 'bj'"
                  v-model:value="from.license"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
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
                <n-input
                  v-if="props.flag == 'bj'"
                  v-model:value="from.owner"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
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
                <n-input
                  v-if="props.flag == 'bj'"
                  v-model:value="from.brand"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
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
                <n-input
                  v-if="props.flag == 'bj'"
                  v-model:value="from.color"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
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
                <n-checkbox-group
                  v-if="props.flag == 'bj'"
                  v-model:value="from.service"
                  @change="changeFw">
                  <n-space item-style="display: flex; align-items: center;height:100%">
                    <n-checkbox
                      value="baoyang"
                      label="保養"
                      size="large" />
                    <n-checkbox
                      value="weixiu"
                      label="維修"
                      size="large" />
                  </n-space>
                </n-checkbox-group>
                <div
                  v-if="from.service && props.flag != 'bj'"
                  class="d_t">
                  {{
                    from.service.indexOf('baoyang') != -1
                      ? from.service.indexOf('weixiu') != -1
                        ? '保養和維修'
                        : '保養'
                      : from.service.indexOf('weixiu') != -1
                        ? '維修'
                        : ''
                  }}
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
                <n-cascader
                  v-if="props.flag == 'bj'"
                  v-model:value="from.maintain"
                  :show-path="true"
                  separator="W"
                  placeholder="請選擇"
                  :options="optionsJy"
                  check-strategy="child" />
                <div
                  v-else
                  class="d_t">
                  {{ from.maintain }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid cols="1 400:2 600:3">
          <n-grid-item
            v-if="wxlxShow"
            span="1 400:2 600:3">
            <div class="i_item">
              <div class="i_l">
                維修項目：
              </div>
              <div class="i_i">
                <n-auto-complete
                  v-if="props.flag == 'bj'"
                  v-model:value="from.note"
                  :options="optionsBz">
                  <template #default="{ handleInput, handleBlur, handleFocus, value: slotValue }">
                    <n-input
                      type="textarea"
                      rows="5"
                      :value="slotValue"
                      placeholder="請輸入"
                      @input="handleInput"
                      @focus="handleFocus"
                      @blur="handleBlur" />
                  </template>
                </n-auto-complete>
                <div
                  v-else
                  class="d_t">
                  {{ from.fix }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                取車方式：
              </div>
              <div class="i_i">
                <n-select
                  v-if="props.flag == 'bj'"
                  v-model:value="from.qcfs"
                  placeholder="請選擇"
                  :options="qcfsOptions" />
                <div
                  v-else
                  class="d_t">
                  {{ filterTabSelectVal(from.qcfs, qcfsOptions) }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                維修状况：
              </div>
              <div class="i_i">
                <n-select
                  v-if="props.flag == 'bj'"
                  v-model:value="from.wxzk"
                  placeholder="請選擇"
                  :options="wxzkOptions" />
                <div
                  v-else
                  class="d_t">
                  {{ filterTabSelectVal(from.wxzk, wxzkOptions) }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                維修人員：
              </div>
              <div class="i_i">
                <n-select
                  v-if="props.flag == 'bj'"
                  v-model:value="from.wxry"
                  placeholder="請選擇"
                  :options="userOptions" />
                <div
                  v-else
                  class="d_t">
                  {{ filterTabSelectVal(from.wxry, userOptions) }}
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
  ref, onMounted, computed
} from 'vue';
import { CascaderOption } from 'naive-ui';
const props = withDefaults(
  defineProps<{
    selectedItem: any;
    flag: any;
  }>(),
  {}
);
const from = ref<any>({});
const bylxShow = ref<boolean>(false);
const wxlxShow = ref<boolean>(false);
onMounted(() => {
  from.value = props.selectedItem;
  changeFw(props.selectedItem.service);
});
const wxzkOptions = ref([
  {
    label: '已完成',
    value: '01'
  },
  {
    label: '未完成',
    value: '02'
  }
]);
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
const qcfsOptions = ref([
  {
    label: '車主自行取車',
    value: '01'
  },
  {
    label: '人員代駕至車主',
    value: '02'
  }
]);
const getOptions = () => {
  const options: CascaderOption[] = [];
  const a = [0, 5, 10, 15, 20, 25];
  for (let i = 0; i < a.length; i++) {
    options.push({
      value: `${a[i]}`,
      label: `${a[i]}`,
      disabled: false,
      children: [
        {
          value: a[i] + 'W40',
          label: '40',
          disabled: false
        },
        {
          value: a[i] + 'W50',
          label: '50',
          disabled: false
        }
      ]
    });
  }
  return options;
};
const optionsJy = ref(getOptions());
const optionsBz = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = from.value.note.split('@')[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix
    };
  });
});
const filterTabSelectVal = (val: any, optionList: any) => {
  let returnVal = val;
  optionList.forEach((option: any) => {
    if (option.value == val) {
      returnVal = option.label;
    }
  });
  return returnVal;
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
