<% if(language==='js'){ %>const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    // 'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@src', path.resolve('./src')]],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['prettier'],
  rules: {},
  globals: {},
};
<%} %><% if(language==='ts'){ %>const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // 'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@src', path.resolve('./src')]],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
  },
  globals: {},
};
<%} %>
