import * as esbuild from 'esbuild';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function build() {
    // Build the bundle
    await esbuild.build({
        entryPoints: ['src/components/index.ts'],
        bundle: true,
        outfile: 'dist/index.global.js',
        format: 'iife',
        globalName: 'AvantosSdk',
        platform: 'browser',
        target: ['es2017'],
        external: ['react', 'react-dom'],
        define: {
            'process.env.NODE_ENV': '"production"',
            'global': 'window'
        },
        minify: true,
        banner: {
            js: '/* @license MIT */\n' +
                'var React = window.React;\n' +
                'var ReactDOM = window.ReactDOM;',
        },
    });

    // Add content type header comment
    const filePath = join(__dirname, 'dist', 'index.global.js');
    const content = readFileSync(filePath, 'utf8');
    const contentWithHeader = `/* Content-Type: text/javascript */\n${content}`;
    writeFileSync(filePath, contentWithHeader);
}

build().catch(() => process.exit(1)); 