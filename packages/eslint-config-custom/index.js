/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard-with-typescript',
    '@vue/eslint-config-standard-with-typescript/allow-js-in-vue',
    '@vue/eslint-config-prettier'
  ],
  // parserOptions: {
  //   // tsconfigRootDir: __dirname,    
  //   // project: ['tsconfig.json'],
  //   ecmaVersion: 2020
  // },  
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'prettier/prettier': [
      'error',
      {
        "singleQuote": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": 'none',
        "printWidth": 120,
        "semi": false,
        "endOfLine": 'auto'
      }
    ]
  },
  ignorePatterns: ['rollup.config.js']
}
