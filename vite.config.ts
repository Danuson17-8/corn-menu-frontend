import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        verboseFileRoutes: false,
    }), react(), tailwindcss(), tsconfigPaths(), sentryVitePlugin({
        org: "rmutl-i3",
        project: "admission-ui"
    })],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    build: {
        sourcemap: true
    }
});