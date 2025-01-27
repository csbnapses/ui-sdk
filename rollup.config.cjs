const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const babel = require('@rollup/plugin-babel');

module.exports = {
    input: 'src/components/index.ts',
    output: {
        file: 'dist/index.global.js',
        format: 'umd',
        name: 'AvantosSdk',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        exports: 'named',
        sourcemap: true,
        amd: {
            id: '@avantos/ui-sdk'
        }
    },
    plugins: [
        peerDepsExternal(),
        postcss({
            config: {
                path: './postcss.config.cjs'
            },
            extensions: ['.css'],
            minimize: true,
            inject: true,
            modules: false,
            extract: false
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs({
            include: /node_modules/,
            transformMixedEsModules: true
        }),
        typescript({
            tsconfig: './tsconfig.json',
            sourceMap: true,
            inlineSources: true
        })
    ],
    external: ['react', 'react-dom']
}; 