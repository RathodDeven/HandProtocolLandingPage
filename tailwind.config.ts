import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false
  },
  // important: '#__next',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'p-bg': '#000000',
        's-bg': '#272325',
        's-text': '#7b7a7b',
        'p-text': '#ffffff'
      }
    }
  },
  plugins: []
}
export default config
