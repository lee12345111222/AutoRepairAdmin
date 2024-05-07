<template>
  <div class="content_box">
    <div class="card">
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
            <tr style="font-size: 16px">
              <th>車號</th>
              <th>車主</th>
              <th>電話</th>
              <th>廠牌</th>
              <th>進場時間</th>
              <th>維修人員</th>
              <th style="width: 50px;">
                查看
              </th>
              <th style="width: 50px;">
                完成
              </th>
              <th style="width: 50px;">
                刪除
              </th>
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
              <td>
                <n-button @click="ckFun(item, 'ck')">
                  <n-icon size="20">
                    <Eye />
                  </n-icon>
                </n-button>
              </td>
              <td>
                <n-button
                  color="#47a447"
                  @click="ckFun(item, 'jc')">
                  <n-icon size="20">
                    <CheckmarkSharp />
                  </n-icon>
                </n-button>
              </td>
              <td>
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
          :selected-item="selectedItem"
          :flag="funFlag" />
      </div>
      <template #action>
        <div class="f_btns">
          <div
            class="sysbtn"
            @click="showDjcModal = false">
            取消
          </div>
          <div
            v-if="funFlag == 'jc'"
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
import {
  Eye, CheckmarkSharp, TrashSharp
} from '@vicons/ionicons5';
import { useDialog } from 'naive-ui';
import DjcInfo from './checkedInfo.vue';
import commonFun from '@/common/index';
const common: any = commonFun;
const dialog = useDialog();
const funFlag = ref('');
const selectedItem = ref({});
const showDjcModal = ref(false);
const clzItems = ref<any[]>([
  {
    id: 1,
    license: 'ABC-1234',
    owner: '黃綠紅',
    phone: '0912345678',
    brand: 'Toyota',
    service: ['baoyang'],
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
    service: ['baoyang', 'weixiu'],
    maintain: '0W40',
    fix: '更換煞車片',
    note: '',
    created_at: '2024-01-01 12:00:00',
    user: '陳大明'
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
        clzItems.value.map((ele, index) => {
          if (ele.id == item.id) {
            clzItems.value.splice(index, 1);
          }
        });
      },
      onNegativeClick: () => {return false}
    });

  } else {
    funFlag.value = flag;
    selectedItem.value = item;
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
