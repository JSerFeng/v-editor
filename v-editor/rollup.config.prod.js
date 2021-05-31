import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel';
import postcss from "rollup-plugin-postcss"
import json from "@rollup/plugin-json"
import builtins from 'rollup-plugin-node-builtins'
import { terser } from "rollup-plugin-terser"

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
  input: "./src/index.tsx",
  output: [
    {
      file: "./build/bundle.cjs.js",
      format: "cjs",
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
    }, {
      file: "./build/bundle.esm.js",
      format: "esm",
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
    }
  ],
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
    json(),
    terser()
  ]
};
