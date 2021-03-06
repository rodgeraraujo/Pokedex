const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/entry-client.js",
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
  },
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true
};
