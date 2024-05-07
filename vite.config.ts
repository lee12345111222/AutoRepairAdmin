import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api/encrypt': 'http://localhost:8080'
      // '/api': 'http://192.168.127.52:9069'
      '/api': {
        target: 'http://192.168.30.8:8080',
        // target: 'http://192.168.19.88:8080',
        // target: 'http://localhost:8080',
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage'
            //  'useNotification',
            //  'useLoadingBar'
          ],
          '@/net/req': [
            ['default', 'req']
          ]
        }
      ],
      dts: './def/auto-imports.d.ts'
    }),

    Components({
      dts: './def/components.d.ts',
      deep: false,
      resolvers: [ NaiveUiResolver() ]
    })
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
});
