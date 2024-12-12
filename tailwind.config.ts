import type { Config } from 'tailwindcss'

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
        }
      },
      fontFamily: {
        sans: [
          'var(--font-space-grotesk)',
          {
            fontFeatureSettings: '"ss04", "ss02"'
          }
        ]
      }
    }
  },
  plugins: []
}
export default config
