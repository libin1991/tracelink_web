module.exports = {
  extends: [
    'eslint-config-alloy/react',
    'eslint-config-alloy/typescript'
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  rules: {
    indent: [
      'error',
      2
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-indent': [
      'error',
      2
    ],
    'eol-last': 2,
    quotes: [2, 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
  }
};