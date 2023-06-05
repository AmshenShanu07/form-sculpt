import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

const config = [
  {
    input: 'src/Form.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'default',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [external(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), terser()],
    external: {
      React: 'react',
    },
  },
  {
    input: 'src/Form.tsx', // Change this to the appropriate path of your main TypeScript file
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

export default config;
