// vite.config.js
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
    base: "/shadertest",
    plugins: [glsl()],
    assetsInclude: ['**/*.glb']
});
