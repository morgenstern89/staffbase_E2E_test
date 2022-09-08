const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

const arr = [];
arr[0].forEach(element => {
  console.log(element);
});