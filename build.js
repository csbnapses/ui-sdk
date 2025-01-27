const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

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
    });

    // Add content type header comment
    const filePath = path.join(__dirname, 'dist', 'index.global.js');
    const content = fs.readFileSync(filePath, 'utf8');
    const contentWithHeader = `/*! Content-Type: application/javascript */\n${content}`;
    fs.writeFileSync(filePath, contentWithHeader);
}

build().catch(() => process.exit(1)); 