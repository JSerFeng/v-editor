import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import postcss from "rollup-plugin-postcss"
import json from "@rollup/plugin-json"
import builtins from 'rollup-plugin-node-builtins'

const extensions = [
  '.tsx',
  '.ts',
  '.js',
  '.jsx',
]

const Global = `var process = {
  env: {
    NODE_ENV: 'development'
  }
};`

export default {
  input: "./dev/index.tsx",
  output: {
    file: "./build/bundle.js",
    format: "iife",
    name: "vEditor",
    sourcemap: true,
    banner: Global,
    external: [
      "http",
      "https",
      "url",
      "assert",
      "stream",
      "tty",
      "util",
      "os",
      "zlib"
    ],
  },
  plugins: [
    commonJs(),
    resolve({ mainFields: ['browser', 'jsnext', 'module', 'main'] }),
    postcss(),
    ts({
      extensions
    }),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: "bundled"
    }),
    builtins(),
    livereload(),
    json(),
    serve({
      open: true, // 自动打开页面
      port: 3000,
      openPage: '/dev/index.html', // 打开的页面
      contentBase: ''
    }),
  ]
};
