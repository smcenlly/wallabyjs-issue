/* eslint-disable */

module.exports =
  {
    'globals': {
      '__DEV__': true
    },
    'verbose': true,
    'testURL': 'http://localhost/',
    'testEnvironment': 'jsdom',
    'collectCoverage': false,
    'collectCoverageFrom': [
      '<rootDir>/src/**/*.{js}',
      '<rootDir>/src/**/*.{vue}'
    ],
    'coverageDirectory': '<rootDir>/test/coverage',
    'coverageThreshold': {
      'global': {
        'branches': 50,
        'functions': 50,
        'lines': 50,
        'statements': 50
      },
      './src/components/': {
        'branches': 40,
        'statements': 40
      },
      './src/common/': {
        'branches': 40,
        'statements': 40
      }
    },
    'testMatch': [
      '<rootDir>/test/**/?(*.)(spec).js?(x)',
      '<rootDir>/test/**/?(*.)(test).js?(x)'
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
