module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: { ecmaVersion: 8 },
  extends: ['eslint:recommended',],
  overrides: [
    {
      files: ['src/**/*.ts?(x)'],
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
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'no-console': ['error', { allow: ['warn', 'error'] }],
        'eqeqeq': 'off',
      },
    }
  ]
};
