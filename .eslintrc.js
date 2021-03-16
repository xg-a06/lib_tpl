const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
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
