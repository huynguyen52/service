import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: [
        'react',
        'react-dom',
        'i18next',
        'i18next-http-backend',
        'react-i18next',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: 'esnext',
  },
});
