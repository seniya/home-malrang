// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // files: ['**/*.ts', '**/*.tsx', '**/*.mjs', '**/*.js'],
    rules: {
      'no-console': 'off',
      '@stylistic/comma-dangle': ['error', 'never']
    }
  }
)
