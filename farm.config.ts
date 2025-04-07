import {defineConfig} from '@farmfe/core';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  vitePlugins: [tsconfigPaths()],
  compilation: {
    output: {
      path: 'build',
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
