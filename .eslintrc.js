module.exports = {
  'extends': 'airbnb',
  'installedESLint': true,
  'plugins': [
    'react',
  ],
  env: {
    browser: true,
    mocha: true
  },
  'rules': {
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'prefer-template': 'off',
  }
};