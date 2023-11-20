module.exports = {
  root: true,
  extends: ['@openobject/eslint-config-custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    ecmaVersion: 2020
  },
  ignorePatterns: ['**/_backpu/**']
}

// module.exports = require('@openobject/config-eslint-custom')
