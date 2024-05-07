<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          待維修
        </div>
      </div>
      <div class="card-body table_wrapper">
        <n-table
          :bordered="false"
          :single-line="false">
          <thead>
            <tr style="font-size: 16px;">
              <th>車號</th>
              <th>車主</th>
              <th>電話</th>
              <th>廠牌</th>
              <th>進場時間</th>
              <th>操作</th>
              <!-- <th>接單</th>
              <th>刪除</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in wait"
              :key="index">
              <td>{{ item.license }}</td>
              <td>{{ item.owner }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.brand }}</td>
              <td>
                {{ common.convertDateFormat(item.created_at) }}<br>
                {{ common.convertTimeFormat(item.created_at) }}
              </td>
              <td class="czl">
                <n-button @click="dwxFun(item, 'ck')">
                  <n-icon size="20">
                    <Eye />
                  </n-icon>
                </n-button>

                <n-button
                  color="#47a447"
                  @click="dwxFun(item, 'jd')">
                  <n-icon size="20">
                    <DuplicateSharp />
                  </n-icon>
                </n-button>

                <n-button
                  color="#dc3545"
                  @click="dwxFun(item, 'sc')">
                  <n-icon size="20">
                    <TrashSharp />
                  </n-icon>
                </n-button>
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        <div class="card_title">
          處理中
        </div>
      </div>
      <div class="card-body table_wrapper">
        <n-table
          :bordered="false"
          :single-line="false">
          <thead>
            <tr style="font-size: 16px;">
              <th>車號</th>
              <th>車主</th>
              <th>電話</th>
              <th>廠牌</th>
              <th>進場時間</th>
              <th>維修人員</th>
              <th>
                操作
              </th>
              <!-- <th>查看</th>
              <th>完成</th>
              <th>刪除</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in clzItems"
              :key="index">
              <td>{{ item.license }}</td>
              <td>{{ item.owner }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.brand }}</td>
              <td>
                {{ common.convertDateFormat(item.created_at) }}<br>
                {{ common.convertTimeFormat(item.created_at) }}
              </td>
              <td>{{ item.user }}</td>
              <td class="czl">
                <n-button @click="djcFun(item, 'ck')">
                  <n-icon size="20">
                    <Eye />
                  </n-icon>
                </n-button>
                <!-- </td>
              <td> -->
                <n-button
                  color="#47a447"
                  @click="djcFun(item, 'jc')">
                  <n-icon size="20">
                    <CheckmarkSharp />
                  </n-icon>
                </n-button>
                <!-- </td>
              <td> -->
                <n-button
                  color="#dc3545"
                  @click="djcFun(item, 'sc')">
                  <n-icon size="20">
                    <TrashSharp />
                  </n-icon>
                </n-button>
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
    <n-modal
      v-model:show="showDwxModal"
      style="width: 90%; --n-padding: 18px 13px;"
      :show-icon="false"
      preset="dialog"
      :closable="false"
      title="">
      <template #header>
        <div />
      </template>
      <div class="modalContent">
        <DwxInfo
          :selected-item="selectedItem"
          :flag="funFlag" />
      </div>
      <template #action>
        <div class="f_btns">
          <div
            class="sysbtn"
            @click="showDwxModal = false">
            關閉
          </div>
          <div
            v-if="funFlag=='jd'"
            class="sysbtn btn_tj"
            @click="showDwxModal = false">
            確定
          </div>
        </div>
      </template>
    </n-modal>
    <n-modal
      v-model:show="showDjcModal"
      style="width: 90%; --n-padding: 18px 13px"
      :show-icon="false"
      preset="dialog"
      :closable="false"
      title="">
      <template #header>
        <div />
      </template>
      <div class="modalContent">
        <DjcInfo
          :selected-item="selectedDjcItem"
          :flag="funDjcFlag" />
      </div>
      <template #action>
        <div class="f_btns">
          <div
            class="sysbtn"
            @click="showDjcModal = false">
            取消
          </div>
          <div
            v-if="funDjcFlag == 'jc'"
            class="sysbtn btn_tj"
            @click="showDjcModal = false">
            存檔
          </div>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useDialog } from 'naive-ui';
import {
  Eye, CheckmarkSharp, TrashSharp, DuplicateSharp
} from '@vicons/ionicons5';

import DwxInfo from './repairedInfo.vue';
import DjcInfo from './djcInfo.vue';
import commonFun from '@/common/index';
const showDjcModal = ref(false);
const selectedDjcItem = ref({});
const funDjcFlag = ref('');
const common: any = commonFun;
const dialog = useDialog();
const selectedItem = ref({});
const showDwxModal = ref(false);
const funFlag = ref('');
const clzItems = ref<any[]>([
  {
    id: 1,
    license: 'ABC-1234',
    owner: '黃綠紅',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['保養'],
    maintain: '0W40',
    note: '',
    created_at: '2024-01-01 12:00:00',
    user: '陳大明'
  },
  {
    id: 2,
    license: 'DEF-5678',
    owner: '張小姐',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['保養', '維修'],
    maintain: '0W40',
    fix: '更換煞車片',
    note: '',
    created_at: '2024-01-01 12:00:00',
    user: '陳大明'
  }
]);
const wait = ref([
  {
    id: 3,
    license: 'GHI-9101',
    owner: '王小明',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['維修'],
    fix: '更換輪胎',
    created_at: '2024-01-01 12:00:00'
  },
  {
    id: 4,
    license: 'JKL-1121',
    owner: '陳小花',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['保養'],
    maintain: '10W40',
    created_at: '2024-01-01 12:00:00'
  }
]);
const dwxFun = (item: any, flag: any) => {
  if (flag == 'sc') {
    dialog.warning({
      title: '删除',
      content: '確定要刪除該筆資料嗎?',
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: () => {
        wait.value.map((ele, index) => {
          if (ele.id == item.id) {
            wait.value.splice(index, 1);
          }
        });
      },
      onNegativeClick: () => {return false}
    });

  } else {
    funFlag.value = flag;
    selectedItem.value = item;
    showDwxModal.value = true;
  }
};
const djcFun = (item: any, flag: any) => {
  if (flag == 'sc') {
    dialog.warning({
      title: '删除',
      content: '確定要刪除該筆資料嗎?',
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: () => {
        clzItems.value.map((ele, index) => {
          if (ele.id == item.id) {
            clzItems.value.splice(index, 1);
          }
        });
      },
      onNegativeClick: () => {return false}
    });

  } else {
    funDjcFlag.value = flag;
    selectedDjcItem.value = item;
    showDjcModal.value = true;
  }
};
</script>
<style scoped lang="scss">
.content_box {
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 0.375rem;
  .card-header {
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.375rem 0.375rem 0px 0px;
    // background-color: #87d8d1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.175);
    font-size: 20px;
    line-height: 30px;
  }
}
.table_wrapper {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: auto;

  table {
    min-width: 768px;
    max-width: initial;

    tr {
      th,
      td {
        text-align: center;
        vertical-align: middle;
      }
    }
  }

  .table_header_bg {
    thead {
      background-color: #eeeeee;
    }
  }
}
.card-body {
  padding: 5px;
}
::v-deep {
  .card-body {
    .n-button {
      padding: 0px 8px !important;
    }
  }
}
</style>
