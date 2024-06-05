<template>
  <div class="content_box">
    <div class="card">
      <div class="card-header">
        <div class="card_title">
          歷史記錄
        </div>
      </div>
      <div class="sear_add_top">
        <n-date-picker
          v-model:value="range"
          type="daterange"
          start-placeholder="開始日期"
          end-placeholder="結束日期"
          clearable />
        <div class="addBtn">
          <n-button
            color="#47a447"
            @click="ckFun({}, 'yhadd')">
            搜尋
          </n-button>
        </div>
      </div>
      <div class="card-body table_wrapper">
        <n-table
          :bordered="false"
          :single-line="false">
          <thead>
            <tr style="font-size: 16px">
              <th>車號</th>
              <th>車主</th>
              <th>進場時間</th>
              <th>維修狀態</th>
              <th>
                操作
              </th>
              <!-- <th>查看</th>
              <th>編輯</th>
              <th>刪除</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in wait"
              :key="index">
              <td>{{ item.license }}</td>
              <td>{{ item.owner }}</td>
              <td>
                {{ common.convertDateFormat(item.created_at) }}<br>
                {{ common.convertTimeFormat(item.created_at) }}
              </td>
              <td>{{ item.state }}</td>
              <td class="czl">
                <n-button @click="ckFun(item, 'ck')">
                  <n-icon size="20">
                    <Eye />
                  </n-icon>
                </n-button>
                <!-- </td>
              <td> -->
                <n-button
                  color="#47a447"
                  @click="ckFun(item, 'bj')">
                  <n-icon size="20">
                    <CreateOutline />
                  </n-icon>
                </n-button>
                <!-- </td>
              <td> -->
                <n-button
                  color="#dc3545"
                  @click="ckFun(item, 'sc')">
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
      style="width: 90%; --n-padding: 18px 13px"
      :show-icon="false"
      preset="dialog"
      :closable="false"
      title="">
      <template #header>
        <div />
      </template>
      <div class="modalContent">
        <HistoryListInfo
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
            v-if="funFlag == 'jd'"
            class="sysbtn btn_tj"
            @click="showDwxModal = false">
            確定
          </div>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  TrashSharp, CreateOutline, Eye, Search
} from '@vicons/ionicons5';
import { useDialog } from 'naive-ui';
import commonFun from '@/common/index';
import HistoryListInfo from './historyListInfo.vue';
const common: any = commonFun;
const selectedItem = ref({});
const range = ref(null);
const showDwxModal = ref(false);
const funFlag = ref('');
const dialog = useDialog();
const wait = ref([
  {
    id: 3,
    license: 'GHI-9101',
    owner: '王小明',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['weixiu'],
    fix: '更換輪胎',
    created_at: '2024-01-01 12:00:00',
    state: '未處理',
    color: '白色',
    qcfs: '01',
    wxzk: '01',
    wxry: 1
  },
  {
    id: 4,
    license: 'JKL-1121',
    owner: '陳小花',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['baoyang'],
    maintain: '10W40',
    created_at: '2024-01-01 12:00:00',
    state: '維修中',
    color: '黑色',
    qcfs: '02',
    wxzk: '03',
    wxry: 2
  }
]);

const ckFun = (item: any, flag: any) => {
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
</script>
<style scoped lang="scss">
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
.sear_add_top {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0px 10px;
  .addBtn {
    margin-left: 20px;
  }
}
::v-deep .n-input {
  max-width: 300px !important;
}
</style>
