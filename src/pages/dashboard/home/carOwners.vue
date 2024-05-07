<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          車主資料
        </div>
      </div>
      <div class="card-body">
        <n-grid cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                車主姓名：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.cz"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.cz }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                公司名稱：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.gsmc"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.gsmc }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                統一編號：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.tybh"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.tybh }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                會員編號：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.hybh"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.hybh }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                電話：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.dh"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.dh }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                手機：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.sj"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.sj }}
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                地址：
              </div>
              <div class="i_i">
                <n-input
                  v-if="flag != 'czck'"
                  v-model:value="from.dz"
                  type="text"
                  placeholder="請輸入" />
                <div
                  v-else
                  class="d_t">
                  {{ from.dz }}
                </div>
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-collapse :default-expanded-names="[0]">
          <n-collapse-item
            v-for="(cItem,cIndex) in from.clChild"
            :key="cIndex"
            :title="'車輛資訊'+(cIndex+1)"
            :name="cIndex">
            <n-grid cols="1 400:2 600:3">
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    車牌號碼：
                  </div>
                  <div class="i_i">
                    <n-input
                      v-if="flag != 'czck'"
                      v-model:value="cItem.license"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.license }}
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
                      v-if="flag != 'czck'"
                      v-model:value="cItem.brand"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.brand }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    型號：
                  </div>
                  <div class="i_i">
                    <n-input
                      v-if="flag != 'czck'"
                      v-model:value="cItem.xh"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.xh }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    汽車年份：
                  </div>
                  <div class="i_i">
                    <n-input
                      v-if="flag != 'czck'"
                      v-model:value="cItem.year"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.year }}
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
                      v-if="flag != 'czck'"
                      v-model:value="cItem.color"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.color }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    CC數：
                  </div>
                  <div class="i_i">
                    <n-input
                      v-if="flag != 'czck'"
                      v-model:value="cItem.cc"
                      type="text"
                      placeholder="請輸入" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.cc }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    汽油種類：
                  </div>
                  <div class="i_i">
                    <n-select

                      v-if="flag != 'czck'"
                      v-model:value="cItem.qyzl"
                      placeholder="請選擇"
                      :options="qyzlOptions" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.qyzl }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="i_item">
                  <div class="i_l">
                    慣用機油：
                  </div>
                  <div class="i_i">
                    <n-cascader
                      v-if="flag != 'czck'"
                      v-model:value="cItem.maintain"
                      :show-path="true"
                      separator="W"
                      placeholder="請選擇"
                      :options="optionsJy"
                      check-strategy="child" />
                    <div
                      v-else
                      class="d_t">
                      {{ cItem.maintain }}
                    </div>
                  </div>
                </div>
              </n-grid-item>
            </n-grid>
          </n-collapse-item>
        </n-collapse>
        <div
          v-if="props.flag != 'czck'"
          class="addclLine"
          @click="addClInfo">
          <n-icon size="20">
            <AddCircle />
          </n-icon>
          <div class="addText">
            增加車輛資訊
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref, onMounted
} from 'vue';
import { AddCircle } from '@vicons/ionicons5';

import { CascaderOption } from 'naive-ui';
const from = ref<any>({
  id: 3,
  gsmc: '',
  tybh: '',
  hybh: '',
  cz: '',
  dh: '',
  sj: '',
  dz: '',
  clChild: [
    {
      id: 1,
      license: '',
      brand: '',
      color: '',
      maintain: null,
      note: '',
      user: '',
      xh: '',
      year: '',
      cc: '',
      qyzl: ''
    }
  ]
});
const props = withDefaults(
  defineProps<{
    selectedItem: any;
    flag: any;
  }>(),
  {}
);
onMounted(() => {
  if (props.flag == 'czadd') {
    from.value = {
      id: 3,
      gsmc: '',
      tybh: '',
      hybh: '',
      cz: '',
      dh: '',
      sj: '',
      dz: '',
      clChild: [
        {
          id: 1,
          license: '',
          brand: '',
          color: '',
          maintain: null,
          note: '',
          user: '',
          xh: '',
          year: '',
          cc: '',
          qyzl: ''
        }
      ]
    };
  } else {
    from.value = props.selectedItem;
  }

});
const qyzlOptions = ref([
  {
    label: '汽油',
    value: '01'
  },
  {
    label: '柴油',
    value: '02'
  },
  {
    label: '電動車',
    value: '03'
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
const addClInfo = () => {
  from.value.clChild.push(
    {
      id: from.value.clChild.length + 1,
      license: '',
      brand: '',
      color: '',
      maintain: null,
      note: '',
      user: '',
      xh: '',
      year: '',
      cc: '',
      qyzl: ''
    }
  );
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
::v-deep .n-collapse .n-collapse-item .n-collapse-item__header {
  height: 45px;
  font-size: 16px;
  // border-bottom: 1px solid #dee2e6;
  background: #87d8d1;
  padding-top: 0;
}
.addclLine {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  background-color: #87d8d1;
  border-radius: 20px;
  margin: 10px 5px 20px 5px;
  font-size: 16px;
  .addText{
    padding-left: 5px;
  }
}
</style>
