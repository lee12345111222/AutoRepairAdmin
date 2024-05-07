import axios, { AxiosRequestConfig } from 'axios';
import { saveAs } from 'file-saver';
// const store = useStore();
import common from '../common/index';
const req = axios.create({ baseURL: '/api' });
interface TData<T> {
  code: number;
  msg: string;
  successful: boolean;
  data: T;
}
const get = <T>(url: string, params?: any, config?: AxiosRequestConfig) =>
  req.get<any, TData<T>>(url, {
    params,
    ...config
  });
// const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) => req.post<any, TData<T>>(url, data, config);

//==========================================================post请求=====================================================
//当前用户工号、所属部门、所属部门编号、token
const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
  data = common.changePostData(data);
  return req.post<any, TData<T>>(url, data, config);
};

const download = async(url: string, params?: any, method = 'POST') => {
  const res = await req({
    url,
    method,
    params: method === 'GET' ? params : undefined,
    data: params !== 'GET' ? params : undefined,
    responseType: 'blob'
  });
  const disposition = res.headers['content-disposition'].split(';').filter((e) => e.trim().startsWith('filename='));
  const fileName =
    disposition && disposition.length > 0
      ? decodeURIComponent(disposition[0].replaceAll(' ', '').replaceAll('filename=', '').replaceAll('"', ''))
      : '文件';
  saveAs(res.data, fileName);
};

//==============================我的应用我的系统模块“进入”的跳转方法
const windowOpenNewPage = function(url: string) {
  window.open(url, '_blank');
};
export default {
  get,
  post,
  windowOpenNewPage,
  download,
  ins: req
};
