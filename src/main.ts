import './style';
import ConfiProvider from './ConfigProvider.vue';
import router from './router';
import store from './store';
import { createApp } from 'vue';
import common from './common/index';
/**
 * https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
 * 关于 tailwind 的 preflight 样式
 * 你可能会发现在静态 HTML 文件中加入 meta 标签没用（naive 的样式仍然可能被覆盖），
 * 因为你的工具链可能永远会把 tailwind 的样式插入 head 的尾部。
 * 这种情况下，你需要在 app 挂载之前动态的插入 meta 标签。
 */
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);
// common.getuserInfo('userInfo');
createApp(ConfiProvider).use(store).use(router).mount('#app');
