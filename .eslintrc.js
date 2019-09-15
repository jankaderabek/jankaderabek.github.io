module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    "plugin:cypress/recommended",
  ],
  // add your custom rules here
  rules: {
  }
}
