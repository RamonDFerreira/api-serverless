module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
