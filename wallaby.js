module.exports = function(wallaby) {
  process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

  const compiler = wallaby.compilers.babel();

  return {
    files: [
      'jest.config.js',
      'package.json',
      'src/**/*.js?(x)',
      'src/**/*.vue',
      '!src/**/*.spec.js?(x)'
    ],

    tests: ['test/**/*spec.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': compiler,
      '**/*.vue': require('wallaby-vue-compiler')(compiler)
    },

    preprocessors: {
      '**/*.vue': file => require('vue-jest').process(file.content, file.path)
    },

    setup: function(wallaby) {
      const jestConfig = require('./package').jest || require('./jest.config');
      jestConfig.transform = {};
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',
    debug: true
  };
};
