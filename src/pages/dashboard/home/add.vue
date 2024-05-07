<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          新增資料
        </div>
      </div>
      <div class="addcard-body">
        <n-grid cols="1 400:2 600:3">
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                車牌號碼：
              </div>
              <div>
                <n-auto-complete
                  v-model:value="from.license"
                  :input-props="{
                    autocomplete: 'disabled'
                  }"
                  :on-select="selectedXx"
                  :options="optionsCp"
                  placeholder="請輸入"
                  clearable />
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                車主：
              </div>
              <div>
                <n-input
                  v-model:value="from.owner"
                  type="text"
                  placeholder="請輸入" />
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                廠牌：
              </div>
              <div>
                <n-input
                  v-model:value="from.brand"
                  type="text"
                  placeholder="請輸入" />
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div class="i_item">
              <div class="i_l">
                顏色：
              </div>
              <div>
                <n-input
                  v-model:value="from.color"
                  type="text"
                  placeholder="請輸入" />
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
              <div>
                <n-cascader
                  v-model:value="from.maintain"
                  :show-path="true"
                  separator="W"
                  placeholder="請選擇"
                  :options="optionsJy"
                  check-strategy="child" />
              </div>
            </div>
          </n-grid-item>
        </n-grid>
        <n-grid cols="1 400:2 600:3">
          <n-grid-item
            v-if="wxlxShow"
            span="1 400:2 600:2">
            <div class="i_item">
              <div class="i_l">
                維修項目：
              </div>
              <div>
                <n-auto-complete
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
              </div>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </div>
    <div class="footerBtn">
      <n-button
        type="success"
        @click="save">
        送出
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref, computed, onMounted
} from 'vue';
import { CascaderOption } from 'naive-ui';
import { useRouter } from 'vue-router';
const router = useRouter();
const from = ref<any>({});
const bylxShow = ref<boolean>(false);
const wxlxShow = ref<boolean>(false);
onMounted(() => {
  from.value = {};
});
const optionsCp = computed(() => {
  if (from.value.license) {
    if (from.value.license.indexOf('AB') != -1 && from.value.license.indexOf(['C-1234', 'G-5678', 'E-5568']) == -1) {
      return ['C-1234', 'G-5678', 'E-5568'].map((suffix) => {
        return {
          label: from.value.license + suffix,
          value: from.value.license + suffix
        };
      });
    }
  }
  return [];
});

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

const selectedXx = (val: any) => {
  if (val == 'ABC-1234') {
    from.value = {
      id: 1,
      license: 'ABC-1234',
      owner: '黃綠紅',
      phone: '0912345678',
      brand: 'Toyota',
      color: '银色',
      service: ['baoyang'],
      maintain: '0W40',
      note: '',
      created_at: '2024-01-01 12:00:00',
      user: '陳大明'
    };
    changeFw(from.value.service);
  }
};
const optionsBz = computed(() => {
  if (from.value.note == '更換') {
    return ['刹車片', '輪胎', '後視鏡'].map((suffix) => {
      return {
        label: from.value.note + suffix,
        value: from.value.note + suffix
      };
    });
  } else {
    return false;
  }

});
const save = () => {
  router.go(-1);
};
</script>
<style scoped lang="scss">
@import '@/style/custom.scss';
.i_item {
  height: 100%;
  padding: 5px 10px;
  .i_l {
    font-size: 14px;
    font-weight: bold;
    line-height: 30px;
  }
  .i_i {
    height: calc(100% - 30px);
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
.addcard-body {
  padding-bottom: 30px;
}
</style>
