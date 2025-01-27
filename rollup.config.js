import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: 'src/components/index.ts',
    output: {
        file: 'dist/index.global.js',
        format: 'umd',
        name: 'AvantosSdk',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        banner: '/* @license MIT */\n' +
            '/* Content-Type: text/javascript */',
        exports: 'named',
        sourcemap: true,
        amd: {
            id: '@avantos/ui-sdk'
        }
    },
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: 'auto'
        }),
        typescript({
            tsconfig: './tsconfig.build.json',
            jsx: 'react',
            sourceMap: true
        })
    ],
    external: ['react', 'react-dom']
}; 