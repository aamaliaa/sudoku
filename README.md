# Sudoku

## How to run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run `npm install` to install dependencies.
3. Run `npm build` to build `bundle.js`.
4. To start, run `npm start`. App will be accessible in your browser at (http://localhost:8080).

## How to test

1. Run `npm test`.
2. Go to (http://localhost:8080) in your browser.

## Files

```
.
├── src/
|   ├── js/
|   |   └── index.js
|   |   └── sudoku.js
|   └── stylus/
|       └── styles.styl
├── test/
|   └── index.js
├── index.html
├── bundle.js
├── package.json
├── README.md
└── webpack.config.js
```

I'm using webpack to compile javascript (to `bundle.js`) and to compile and insert the stylus code into `index.html`.

## Technologies Used

### Production
* [jQuery](https://jquery.com/) - js library

### Development
* [Webpack](http://webpack.github.io/) - compiling/bundling javascript, stylus
* [Node.js](https://nodejs.org/) - uses npm to manage app dependencies, build process (node package manager)
* [Stylus](https://learnboost.github.io/stylus/) - CSS preprocessor
* [Nib](http://tj.github.io/nib/) - additional mixins and automatic prefixes for browser support
* [Mocha](http://mochajs.org/) and [Should.js](https://shouldjs.github.io/) - testing
