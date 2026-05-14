import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  esbuild: {
    // Remove console.log / debugger from production bundle
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },

  build: {
    // Target modern browsers — enables ES modules, smaller output
    target: 'es2015',

    // Raise chunk-size warning threshold (framer-motion is large by design)
    chunkSizeWarningLimit: 1200,

    // Split CSS per chunk — browser only downloads CSS it actually needs
    cssCodeSplit: true,

    // Inline tiny assets (< 4 KB) as base64 — saves HTTP round trips
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // Split vendor code into separate chunks so returning users only
        // re-download the chunk that actually changed (not the whole bundle)
        manualChunks(id) {
          if (id.includes('framer-motion'))  return 'vendor-motion'  // ~110KB
          if (id.includes('lucide-react'))   return 'vendor-icons'
          if (id.includes('react-icons'))    return 'vendor-icons'
          if (id.includes('react-dom'))      return 'vendor-react'
          if (id.includes('node_modules'))   return 'vendor'
        },
        // Content-hashed filenames for long-lived cache headers
        assetFileNames:  'assets/[name]-[hash][extname]',
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
      },
    },
  },

  // Pre-bundle heavy deps so dev server starts faster
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
}))
