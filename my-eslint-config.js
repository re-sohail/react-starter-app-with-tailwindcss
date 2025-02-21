// my-eslint-config.js
import globals from 'globals';

export default {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};
