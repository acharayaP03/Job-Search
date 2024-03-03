/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globals/recommended',
    {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none'
        }
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    'vitest-globals/env': true
  }
}
