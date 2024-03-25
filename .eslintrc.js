module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-useless-catch': 'off',
    'no-shadow': 'off',
    'no-empty': 'off',
    'indent': 'off',
    'no-underscore-dangle': 'off',
  },
};
