<template>
  <div class="h-full w-full page">
    <div class="pageHeadl">
      橙興資訊
      <div style="font-size: 14px;">
        CHENGDIANZIXUN
      </div>
    </div>
    <div class="login_title">
      上禾汽修
    </div>
    <div class="login_form">
      <div class="formItem">
        <n-input placeholder="請輸入用户名" />
      </div>
      <div class="formItem">
        <n-input
          placeholder="請輸入密码"
          type="password"
          show-password-on="click" />
      </div>
      <div class="login_btn">
        <div
          class="loginBtn"
          @click="gotoLogin('admin')">
          登入
        </div>
        <div
          class="loginBtn"
          @click="gotoRegister()">
          註冊
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import store from '@/store/index';
const router = useRouter();
const gotoLogin = (flag: any) => {
  store.commit('setRole', flag);
  router.push({ name: 'home' });
};
const gotoRegister = () => {
  router.push({ name: 'register' });
};
</script>
<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  .form_box {
    width: 924px;
    height: 581px;

    position: relative;
    .f_line {
      position: absolute;
      left: -375px;
      top: 1px;
    }
    .f_l {
      position: absolute;
      z-index: 99;
      top: 98px;
      width: 50%;
      text-align: center;
      .f_l_t {
        font-family: PingFang SC;
        font-weight: bold;
        font-size: 26px;
        color: #ffffff;
        line-height: 36px;
      }
      .f_l_b {
        font-family: PingFang SC;
        font-weight: 500;
        font-size: 14px;
        color: #ffffff;
        line-height: 36px;
      }
    }
  }
}
.formItem {
  margin-top: 18px;
}

.login_form {
  width: 100%;
  padding: 0px 10%;
}
.loginBtn {
  height: 40px;
  background: #1ba599;
  border-radius: 27px;
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
}
::v-deep {
  .n-input {
    height: 47px;
    background: #f4f5f8;
    border-radius: 24px;
    --n-border: 1px solid #1ba599 !important;
  }
  .n-input__input-el {
    height: 47px !important;
  }
  .n-input .n-input__placeholder {
    font-family: PingFang SC;
    font-weight: 500;
    font-size: 16px;
    color: #a2a2a2 !important;
    line-height: 36px;
  }
  .custom-tabs .n-tabs-bar {
    background-color: transparent !important;
  }
}
.login_title {
  font-size: 40px;
  font-weight: bold;
  color: #1ba599;
}
.login_btn{
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
