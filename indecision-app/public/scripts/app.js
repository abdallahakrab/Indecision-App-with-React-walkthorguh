'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'p',
  null,
  'Hello Babel!'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
