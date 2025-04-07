/// <reference types="vitest" />
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), svgr()], // Add this to resolve path aliases
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'c8',
      reporter: ['lcov', 'text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
});
