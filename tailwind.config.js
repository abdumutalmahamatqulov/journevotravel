import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    React,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
      require:('@tailwindcss/line-clamp'),
    },
  },
})