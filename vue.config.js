const path = require("path");

module.exports = {
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
