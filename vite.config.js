import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((config) => {
  process.env = { ...process.env, ...loadEnv(config.mode, process.cwd()) };
  const jsonServer = 'http://localhost:3001';

  const getUrl = (apiName) => {
    const keyName = 'VITE_' + apiName + '_API_URL_PROXY';
    const proxyToUrl = process.env[keyName] ? process.env[keyName] : jsonServer;
    if (config.mode === 'development') {
      console.log('Proxying ' + apiName + ' to: ' + proxyToUrl);
    }
    return proxyToUrl;
  };

  
  return {
    plugins: [react()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    esbuild: {},
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
    server: {
      proxy: {
        
      },
      port: 3000,
      hmr: {
        clientPort: 3000,
      },
      host: true
    },
  };
});