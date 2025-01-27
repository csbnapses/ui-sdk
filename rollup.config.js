import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/components/index.ts',
    output: {
        file: 'dist/index.global.js',
        format: 'iife',
        name: 'AvantosSdk',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        banner: '/* @license MIT */\n' +
            '/* Content-Type: text/javascript */',
    },
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.build.json',
            jsx: 'react'
        })
    ],
    external: ['react', 'react-dom']
}; 