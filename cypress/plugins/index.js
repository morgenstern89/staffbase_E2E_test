//import './commands'

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

    on('file:preprocessor', cucumber())
}

//module.exports = (on, config) => {
//  const options = {
//    ...browserify.defaultOptions,
//    typescript: require.resolve('typescript'),
//  };
//
//  options.browserifyOptions.plugin.unshift([
//    'tsify',
//    { project: 'cypress/tsconfig.json' },
//  ]);
//
//  on('file:preprocessor', browserify());
//  on('file:preprocessor', cucumber(options));
//  on('before:browser:launch', (browser, launchOptions) => {
//    if (browser.name === 'chrome') {
//      launchOptions.args.push('--disable-dev-shm-usage');
//    }
//    return launchOptions;
//  });
//};

