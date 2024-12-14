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
        white: '#FAFAFA',
        black: '#000'
      },
      fontFamily: {
        sans: [
          ['var(--font-rubik)', ...fontFamily.sans],
          {
            fontFeatureSettings: '"ss04", "ss02"'
          }
        ],
        price: ['var(--font-protest-riot)']
      }
    }
  },
  plugins: []
}
export default config
