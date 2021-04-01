module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'plugins': ['@typescript-eslint'],
  'rules': {
    'semi': [2, 'never'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
  }
}
