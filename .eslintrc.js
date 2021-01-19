const ERROR = 2;
const WARN = 1;
const OFF = 0;

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  plugins: ['node', 'security', 'prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ERROR,
    'class-methods-use-this': [ERROR, { exceptMethods: ['willSendRequest'] }],
    'func-names': ERROR,
    'function-paren-newline': OFF,
    'global-require': OFF,
    'import/no-unresolved': OFF,
    'max-len': ERROR,
    'no-param-reassign': [ERROR, { props: false }],
    'no-underscore-dangle': OFF,
    camelcase: OFF,
    'no-unused-vars': [ERROR, { skipShapeProps: true }],
    'node/no-unsupported-features/es-syntax': [ERROR, { ignores: ['modules'] }],
    'security/detect-object-injection': OFF,
    'no-console': OFF,
    'security/detect-non-literal-fs-filename': OFF,
    'jest/no-commented-out-tests': OFF,
  },
  overrides: [
    {
      files: ['./src/config/index.js'],
      rules: {
        'max-len': OFF,
      },
    },
    {
      files: ['./src/test/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': OFF,
        'node/no-unpublished-import': OFF,
      },
    },
  ],
};
