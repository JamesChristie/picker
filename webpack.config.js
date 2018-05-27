module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/",
    publicPath: "dist/"
  },
  
  devtool: "source-map",

  node: {
    child_process: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".png"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
};
