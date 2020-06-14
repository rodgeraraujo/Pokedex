const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Pokedex! - A simple pokedex made using VueJs"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@styles": path.resolve(__dirname, "src/assets/styles/"),
        "@img": path.resolve(__dirname, "src/assets/images/")
      }
    }
  }
};
