const esbuild = require('esbuild');

esbuild.build({
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
}).catch(() => process.exit(1)); 