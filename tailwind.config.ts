import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        green: {
          price: '#42be65'
        },
        yellow: {
          price: '#DBAE47'
        },
        red: {
          price: '#D66F4F'
        },
        white: '#FAFAFA',
        black: '#171717',
        bg: {
          mustard: '#F5E3D0',
          pink: '#F5D0D7',
          blue: '#D1EBF5'
        }
      },
      fontFamily: {
        sans: [
          ['var(--font-rubik)', ...fontFamily.sans],
          {
            fontFeatureSettings: '"ss04", "ss02"'
          }
        ],
        price: ['var(--font-protest-riot)', ...fontFamily.sans]
      },
      spacing: {
        navbar: 'var(--navbar-height)'
      }
    }
  },
  plugins: []
}
export default config
