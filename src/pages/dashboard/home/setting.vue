<template>
  <div class="content_box">
    <n-tabs
      style="--n-color-segment: #87d8d1"
      type="segment"
      animated>
      <n-tab-pane
        name="chap1"
        tab="用戶管理">
        <div class="sear_add_top">
          <n-input
            placeholder="搜尋"
            clearable
            :on-input="yhChange">
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>
          <div class="addBtn">
            <n-button
              color="#47a447"
              @click="ckFun({}, 'yhadd')">
              <n-icon size="20">
                <Add />
              </n-icon>
            </n-button>
          </div>
        </div>
        <div class="tableBox card-body table_wrapper">
          <n-table
            :bordered="false"
            :single-line="false">
            <thead>
              <tr style="font-size: 16px">
                <th>姓名</th>
                <th>職稱</th>
                <th>帳號</th>
                <th>密碼</th>
                <th>職稱</th>
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
                <td>{{ item.name }}</td>
                <td>{{ item.professional }}</td>
                <td>{{ item.account }}</td>
                <td>{{ item.password }}</td>
                <td>{{ item.role }}</td>
                <td class="czl">
                  <n-button @click="ckFun(item, 'yhck')">
                    <n-icon size="20">
                      <Eye />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#47a447"
                    @click="ckFun(item, 'yhbj')">
                    <n-icon size="20">
                      <DuplicateSharp />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#dc3545"
                    @click="ckFun(item, 'yhsc')">
                    <n-icon size="20">
                      <TrashSharp />
                    </n-icon>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-tab-pane>
      <n-tab-pane
        name="chap2"
        tab="車主管理">
        <div class="sear_add_top">
          <n-input
            placeholder="搜尋"
            clearable
            :on-input="czChange">
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>
          <div class="addBtn">
            <n-button
              color="#47a447"
              @click="ckFun({}, 'czadd')">
              <n-icon size="20">
                <Add />
              </n-icon>
            </n-button>
          </div>
        </div>
        <div class="tableBox card-body table_wrapper">
          <n-table
            :bordered="false"
            :single-line="false">
            <thead>
              <tr style="font-size: 16px">
                <th>車主</th>
                <th>公司名稱</th>
                <th>統一編號</th>
                <th>會員編號</th>
                <th>電話</th>
                <th>手機</th>
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
                v-for="(item, index) in czItem"
                :key="index">
                <td>{{ item.cz }}</td>
                <td>{{ item.gsmc }}</td>
                <td>{{ item.tybh }}</td>
                <td>{{ item.hybh }}</td>

                <td>{{ item.dh }}</td>
                <td>{{ item.sj }}</td>
                <td class="czl">
                  <n-button @click="ckFun(item, 'czck')">
                    <n-icon size="20">
                      <Eye />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#47a447"
                    @click="ckFun(item, 'czbj')">
                    <n-icon size="20">
                      <DuplicateSharp />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#dc3545"
                    @click="ckFun(item, 'czsc')">
                    <n-icon size="20">
                      <TrashSharp />
                    </n-icon>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-tab-pane>
      <n-tab-pane
        name="chap3"
        tab="關鍵字管理">
        <div class="sear_add_top">
          <n-input
            placeholder="搜尋"
            clearable
            :on-input="gjcChange">
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>
          <div class="addBtn">
            <n-button
              color="#47a447"
              @click="ckFun({}, 'gjcadd')">
              <n-icon size="20">
                <Add />
              </n-icon>
            </n-button>
          </div>
        </div>
        <div class="tableBox card-body table_wrapper gjc_t">
          <n-table
            :bordered="false"
            :single-line="false">
            <thead>
              <tr style="font-size: 16px">
                <th>關鍵字</th>
                <!-- <th>全稱</th> -->
                <!-- <th>查看</th>
                <th>編輯</th>
                <th>刪除</th> -->
                <th style="width: 150px;">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in gjcItem"
                :key="index">
                <td>{{ item.gjc }}</td>
                <!-- <td>{{ item.qc }}</td> -->
                <td class="czl">
                  <n-button @click="ckFun(item, 'gjcck')">
                    <n-icon size="20">
                      <Eye />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#47a447"
                    @click="ckFun(item, 'gjcbj')">
                    <n-icon size="20">
                      <DuplicateSharp />
                    </n-icon>
                  </n-button>
                  <!-- </td>
                <td> -->
                  <n-button
                    color="#dc3545"
                    @click="ckFun(item, 'gjcsc')">
                    <n-icon size="20">
                      <TrashSharp />
                    </n-icon>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </n-tab-pane>
    </n-tabs>
    <n-modal
      v-model:show="showModal"
      style="width: 90%; --n-padding: 18px 13px"
      :show-icon="false"
      preset="dialog"
      :closable="false"
      title="">
      <template #header>
        <div />
      </template>
      <div class="modalContent">
        <UserInfo
          v-if="funFlag == 'yhadd' || funFlag == 'yhbj' || funFlag == 'yhck'"
          :selected-item="selectedItem"
          :flag="funFlag" />
        <CarOwners
          v-if="funFlag == 'czadd' || funFlag == 'czbj' || funFlag == 'czck'"
          :selected-item="selectedItem"
          :flag="funFlag" />
        <KeywordsInfo
          v-if="funFlag == 'gjcadd' || funFlag == 'gjcbj' || funFlag == 'gjcck'"
          :selected-item="selectedItem"
          :flag="funFlag" />
      </div>
      <template #action>
        <div class="f_btns">
          <div
            class="sysbtn"
            @click="showModal = false">
            取消
          </div>
          <div
            v-if="funFlag == 'yhadd' || funFlag == 'yhxg' || funFlag == 'czadd' || funFlag == 'czbj'|| funFlag == 'gjcadd' || funFlag == 'gjcbj'"
            class="sysbtn btn_tj"
            @click="showModal = false">
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
import UserInfo from '@/pages/dashboard/home/userInfo.vue';
import CarOwners from '@/pages/dashboard/home/carOwners.vue';
import KeywordsInfo from '@/pages/dashboard/home/keywordsInfo.vue';
import {
  TrashSharp, DuplicateSharp, Eye, Search, Add
} from '@vicons/ionicons5';
const dialog = useDialog();
const selectedItem = ref({});
const showModal = ref(false);
const funFlag = ref('');
const wait = ref([
  {
    id: 3,
    name: '王小明',
    phone: '0912345678',
    initTime: '2024-01-01 12:00:00',
    role: '管理員',
    professional: '董事長',
    account: '001',
    password: '123456'
  },
  {
    id: 4,
    name: '王明',
    phone: '0912345678',
    initTime: '2024-01-01 12:00:00',
    role: '員工',
    professional: '維修工程師',
    account: '002',
    password: '123456'
  }
]);
const czItem = ref([
  {
    id: 3,
    gsmc: '小明公司',
    tybh: '12346',
    hybh: '001',
    cz: '王小明',
    dh: '0912345678',
    sj: '0912345678',
    dz: '台中市北屯區中正路123號',
    clChild: [
      {
        id: 1,
        license: 'ABC-1234',
        brand: 'Toyota',
        xh: 'A4',
        year: '2021',
        cc: '2000',
        qyzl: '01',
        color: '銀色',
        maintain: '0W40',
        note: '',
        user: '陳大明'
      }
    ]
  },
  {
    id: 4,
    gsmc: '小明公司2',
    tybh: '12346',
    hybh: '001',
    xh: 'A4',
    year: '2021',
    cc: '2000',
    qyzl: '02',
    cz: '王小明2',
    dh: '0912345678',
    sj: '0912345678',
    dz: '台中市北屯區中正路123號',
    clChild: [
      {
        id: 1,
        license: 'ABC-1234',
        brand: 'Toyota',
        xh: 'A4',
        year: '2021',
        cc: '2000',
        qyzl: '01',
        color: '銀色',
        maintain: '0W40',
        note: '',
        user: '陳大明'
      }
    ]
  }
]);
const gjcItem = ref([
  {
    id: '1',
    gjc: '更换',
    qc: '刹车片'
  }
]);
const ckFun = (item: any, flag: any) => {
  if (flag == 'yhsc') {
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
      onNegativeClick: () => {
        return false;
      }
    });
  } if (flag == 'czsc') {
    dialog.warning({
      title: '删除',
      content: '確定要刪除該筆資料嗎?',
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: () => {
        czItem.value.map((ele, index) => {
          if (ele.id == item.id) {
            czItem.value.splice(index, 1);
          }
        });
      },
      onNegativeClick: () => {
        return false;
      }
    });
  } if (flag == 'gjcsc') {
    dialog.warning({
      title: '删除',
      content: '確定要刪除該筆資料嗎?',
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: () => {
        gjcItem.value.map((ele, index) => {
          if (ele.id == item.id) {
            gjcItem.value.splice(index, 1);
          }
        });
      },
      onNegativeClick: () => {
        return false;
      }
    });
  } else {
    funFlag.value = flag;
    selectedItem.value = item;
    showModal.value = true;
  }
};
const yhChange = (val: any) => {
  if (val == '') {
    wait.value = [
      {
        id: 3,
        name: '王小明',
        phone: '0912345678',
        initTime: '2024-01-01 12:00:00',
        role: '管理員',
        professional: '董事長',
        account: '001',
        password: '123456'
      },
      {
        id: 4,
        name: '王明',
        phone: '0912345678',
        initTime: '2024-01-01 12:00:00',
        role: '員工',
        professional: '維修工程師',
        account: '002',
        password: '123456'
      }
    ];
  } else {
    const arr: any = [];
    wait.value.map((ele) => {
      if (ele.name.indexOf(val) != -1) {
        arr.push(ele);
      }
    });
    wait.value = arr;
  }
};
const czChange = (val: any) => {
  if (val == '') {
    czItem.value = [
      {
        id: 3,
        gsmc: '小明公司',
        tybh: '12346',
        hybh: '001',
        cz: '王小明',
        dh: '0912345678',
        sj: '0912345678',
        dz: '台中市北屯區中正路123號',
        clChild: [
          {
            id: 1,
            license: 'ABC-1234',
            brand: 'Toyota',
            xh: 'A4',
            year: '2021',
            cc: '2000',
            qyzl: '01',
            color: '銀色',
            maintain: '0W40',
            note: '',
            user: '陳大明'
          }
        ]
      },
      {
        id: 4,
        gsmc: '小明公司2',
        tybh: '12346',
        hybh: '001',
        xh: 'A4',
        year: '2021',
        cc: '2000',
        qyzl: '02',
        cz: '王小明2',
        dh: '0912345678',
        sj: '0912345678',
        dz: '台中市北屯區中正路123號',
        clChild: [
          {
            id: 1,
            license: 'ABC-1234',
            brand: 'Toyota',
            xh: 'A4',
            year: '2021',
            cc: '2000',
            qyzl: '01',
            color: '銀色',
            maintain: '0W40',
            note: '',
            user: '陳大明'
          }
        ]
      }
    ];
  } else {
    const arr: any = [];
    czItem.value.map((ele) => {
      if (ele.cz.indexOf(val) != -1) {
        arr.push(ele);
      }
    });
    czItem.value = arr;
  }
};
const gjcChange = (val: any) => {
  if (val == '') {
    gjcItem.value = [
      {
        id: '1',
        gjc: '更換',
        qc: '刹車片'
      }
    ];
  } else {
    const arr: any = [];
    gjcItem.value.map((ele) => {
      if (ele.gjc.indexOf(val) != -1) {
        arr.push(ele);
      }
    });
    gjcItem.value = arr;
  }
};
</script>
<style scoped lang="scss">
@import '@/style/custom.scss';
.tableBox {
  width: calc(100vw - 20px);
  overflow-x: auto;
}
.n-button {
  padding: 0px 8px !important;
}
.sear_add_top {
  display: flex;
  align-items: center;

  .addBtn {
    margin-left: 20px;
  }
}
::v-deep .n-input {
  max-width: 300px !important;
}
</style>
