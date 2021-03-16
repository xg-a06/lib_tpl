<% if(language==='js'){ %>const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve('./src')]],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
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
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve('./src')]],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
<%} %>