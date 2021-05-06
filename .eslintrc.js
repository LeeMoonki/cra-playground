module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/*', '.*'],
  parserOptions: { ecmaVersion: 8 },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**.*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
      ],
      rules: {
        // '@typescript-eslint/explicit-module-boundary-types': 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    }
  ]
};
