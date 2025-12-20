import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        load: 'data/load.html',
        speichern: 'data/speichern.html',
        uhr: 'data/uhr.html'
      }
    }
  }
});
