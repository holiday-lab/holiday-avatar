import { defineConfig } from 'rollup';
import path from 'path';

import vue from 'rollup-plugin-vue';
import serve from 'rollup-plugin-serve';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import typescript from '@rollup/plugin-typescript';

const isEnvDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  input: 'demo/src/main.ts',
  output: {
    file: 'demo/dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    vue(),
    replace({
      preventAssignment: true,
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    alias({
      entries: {
        '@': path.resolve(__dirname, 'demo/src'),
      },
    }),
    resolve(),
    commonjs(),
    //! @rollup/plugin-typescript will not use `tsconfig.json` by default.
    //! Issue: https://github.com/rollup/plugins/issues/394
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
    isEnvDevelopment &&
      serve({
        open: true,
        contentBase: ['demo'],
        port: 5000,
      }),
    isEnvDevelopment && livereload({ watch: 'demo' }),
  ],
  watch: {
    include: 'demo/**',
    exclude: 'node_modules/**',
  },
});
