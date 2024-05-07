import store from '../store/index';
import axios from 'axios';
const windows: any = window;
const req = axios.create({ baseURL: '/api' });
windows.getCallBack = async function(key: any, val: any) {
  store.state.userInfo = val;
  //获取后端解析后的用户数据放到缓存里
  const res: any = await req.post<[]>('/select/getUserInfoByToken');
  store.state.userName = res.data.userName;
};
//获取用户信息
const getuserInfo = function(key?: string) {
  windows.sgBrowerserGetStorage(key, 'getCallBack');
};
function dataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
//修改post数据
const changePostData = function(data: any) {
  //如果传过来的数据为formdata类型，先转换为json
  if (dataType(data) == 'formdata') {
    const jsonObj: any = {};
    data.forEach((value: any, key: any) => (jsonObj[key] = value));
    data = jsonObj;
  }
  if (data) {
    data.tokenJson = store.state.userInfo;
  } else {
    data = { tokenJson: store.state.userInfo };
  }

  return data;
};
const convertDateFormat = (timeStr: any) => {
  const parts = timeStr.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
  return new Date(
    parts[1],
    parts[2] - 1, // 月份是从0开始的，所以要减1
    parts[3],
    parts[4],
    parts[5],
    parts[6]
  )
    .toISOString()
    .substr(0, 10);
};
const convertTimeFormat = (datetimeStr: any) => {
  const parts = datetimeStr.split(' '); // 分割日期和时间
  const timeParts = parts[1].split(':'); // 仅取时间部分
  return timeParts.join(':'); // 重新以":"连接
};
//跳转新页面
const windowOpenNewPage = function(url?: string) {
  window.open(url, '_blank');
};
const common = {
  getuserInfo,
  windowOpenNewPage,
  changePostData,
  convertTimeFormat,
  convertDateFormat
};
export default common;
