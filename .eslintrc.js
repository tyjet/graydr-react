module.exports = {
  "extends": "airbnb",
  "env": {
    "jasmine": true
  },
  "parser": "babel-eslint",
  "plugins": ["class-property"],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.dev.js",
      },
      "node": {
        "moduleDirectory": ["node_modules", "app", "app/components"],
      }
    }
  },
  "globals": {
    "gapi": false
  },
  "rules": {
    "import/extensions": [
      2,
      {
        "js": "never",
        "jsx": "never",
        "json": "always"
      }
    ]
  }
};