import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    settings: {
      next: {
        rootDir: 'apps/home-next/'
      }
    },
    rules: {
      // 'no-html-link-for-pages': 'off'
      // 'react/no-unescaped-entities': 'off',
      // '@next/next/no-page-custom-font': 'off',
    }
  }),
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier
]

// export default [eslintConfig, eslintConfigPrettier]
export default eslintConfig
