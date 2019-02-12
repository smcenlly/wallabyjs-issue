module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js?(x)',
      '!src/**/*.spec.js?(x)'
    ],
    tests: [
      'test/**/*spec.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel()
    },

    testFramework: 'jest',

    debug: true,

    setup: function (wallaby) {
      //const jestConfig = require('./jest.config.js');
      // for example:
      // jestConfig.globals = { "__DEV__": true };
      console.error('HERE')
      //wallaby.testFramework.configure(jestConfig);
    }
  };
};
