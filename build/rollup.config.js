const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const replace = require('rollup-plugin-replace')

const env = process.env.NODE_ENV
const pkg = require('../package.json')

const banner =
`/**
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} Tianzhen mecoepcoo@vip.qq.com
 * @license MIT
 */`

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    name: pkg.name,
    sourcemap: true,
    banner
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    typescript(),
    commonjs(),
    resolve(),
  ],
}
