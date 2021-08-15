module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaFeatures: {
      jsx: true,  
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-mixed-spaces-and-tabs': ['off'],
		'key-spacing': ['error', { 'afterColon': true }],
		'@typescript-eslint/no-var-requires': ['error'],
		'@typescript-eslint/ban-types': ['off'],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
		'object-curly-newline': ['error', { 'minProperties': 2 }],
		'import/no-unresolved': ['off'],
		'object-curly-spacing': [1, 'always'],
		'comma-spacing': ['error', { 'after': true }],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
 		'no-undef': ['off'],
		'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
 