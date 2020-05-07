import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default [{
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      extensions,
    }),
    resolve({ extensions }),
  ]
}, {
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  input: 'src/index.ts',
  output: [
    { file: pkg.browser['./dist/styled-components.cjs.js'], format: 'cjs' },
    { file: pkg.browser['./dist/styled-components.esm.js'], format: 'esm' },
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      extensions,
    }),
    resolve({ extensions }),
  ]
}];
