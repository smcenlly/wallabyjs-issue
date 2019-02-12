/* eslint-disable */

module.exports =
  {
    'globals': {
      '__DEV__': true
    },
    'verbose': true,
    'testURL': 'http://localhost/',
    'testEnvironment': 'jsdom',
    'testMatch': [
      '**/?(*.)(spec).js?(x)',
      '**/?(*.)(test).js?(x)'
    ],
    'testPathIgnorePatterns': [
      '<rootDir>/components/coverage/',
      '<rootDir>/test/coverage/',
      '<rootDir>/dist/',
      '<rootDir>/node_modules/'
    ],
    'moduleFileExtensions': [
      'js',
      'json',
      'vue'
    ],
    'moduleNameMapper': {
      "@components(.*)$": "<rootDir>/src/components$1",
      'src/([^\\.]*)$': '<rootDir>/src/$1.js',
      'src/([^\\.]*).vue$': '<rootDir>/src/$1.vue',
      '^vue$': 'vue/dist/vue.common.js',
      'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.min.js'
    },
    'resolver': null,
    'transformIgnorePatterns': [
      '/node_modules/avatar',
      'node_modules/core-js',
      'node_modules/babel-runtime',
      'node_modules/lodash',
      'node_modules/vue'
    ],
    'transform': {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    'snapshotSerializers': [
      '<rootDir>/node_modules/jest-serializer-vue'
    ]
  }
