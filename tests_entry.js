// Make sure you have your directory and regex test set correctly!
const context = require.context('./tests', true, /-test\.jsx?$/);
context.keys().forEach(context);

// Require src here for coverage instrumentation
const srcContext = require.context('./app', true, /[^main.js$|config.js$]\.jsx?$/);
srcContext.keys().forEach(srcContext);
