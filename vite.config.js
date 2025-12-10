import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Evik/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'scripts/[name]-[hash].js',
        chunkFileNames: 'scripts/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name ? assetInfo.name.split('.').pop() : ''
          if (/(png|jpe?g|gif|svg|webp|avif)$/i.test(ext || '')) return 'images/[name]-[hash][extname]'
          if (/(woff2?|ttf|otf|eot)$/i.test(ext || '')) return 'fonts/[name]-[hash][extname]'
          if (/css/i.test(ext || '')) return 'styles/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})