/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');


module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env:{
    jest:true,
    node:true
  },
  extends: [
    "plugin:vue/recommended"
  ],
  rules: {
    "semi": ["error", "always"]
  }
}
