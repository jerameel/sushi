module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-inline-styles': 0,
  },
  ignorePatterns: ['plopfile.js'],
};
