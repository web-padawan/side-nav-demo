import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';

export default {
  input: './index.html',
  output: {
    dir: './dist'
  },
  plugins: [
    html(),
    copy({ patterns: 'views.json'}),
    dynamicImportVars(),
    nodeResolve(),
    terser()
  ]
};
