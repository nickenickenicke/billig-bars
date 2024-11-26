module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@next/next/no-img-element': 'off'
  },
  extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
  plugins: ['react', 'prettier']
}
