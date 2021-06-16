import { defineConfig } from 'vite';
import path from 'path';

import babel from '@rollup/plugin-babel';
import Vue from '@vitejs/plugin-vue';
import VueJSX from '@vue/babel-plugin-jsx';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'holiday-avatar',
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        babel({
          babelHelpers: 'bundled',
        }),
      ],
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),
    VueJSX({
      optimize: true,
    }),
  ],
});
