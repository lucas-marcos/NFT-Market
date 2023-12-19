import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/**.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        'secundary': '#3B3B3B'
      },
      colors: {
        'purple': '#A259FF'
      },
      extend: {
        height: {
          '128': '32rem',
        },
        width: {
          '128': '32rem',
        },
        spacing: {
          '128': '32rem',
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
