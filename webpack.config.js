const path = require('path');

var rootDir = path.resolve(__dirname),
    phaser_module = path.join(rootDir, "node_modules", "phaser-ce"),
    phaser = path.join(phaser_module, "build", "custom", "phaser-split.js"),
    pixi   = path.join(phaser_module, "build", "custom", "pixi.js"),
    p2     = path.join(phaser_module, "build", "custom", "p2.js");
    
module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [ path.resolve('node_modules') ],
    alias: {
      "pixi": pixi,
      "p2": p2,
      "phaser-ce": phaser
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules(?!\/phaser-ce)/
      }
    ],
    loaders: [
      {
        test: /pixi\.js/,
        loader: "expose-loader?PIXI"
      },
      {
        test: /phaser-split\.js/,
        loader: "expose-loader?Phaser"
      },
      {
        test: /p2\.js/,
        loader: "expose-loader?p2"
      }
    ]
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist')
  }
};
