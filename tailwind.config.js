import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
import { theme } from 'antd'
export default defineConfig({
  plugins: [
    React,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
      require: ('@tailwindcss/line-clamp'),
    },
  },
})
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Menlo', 'monospace'],
      }
    },
  },
}
