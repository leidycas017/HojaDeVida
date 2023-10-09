import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
      fontFamily:{
        questrial:["Questrial", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
      }
  },
  screens: {
    xs: '444px',
  },
  plugins: [],
}
export default config
