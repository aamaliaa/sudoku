# Sudoku

## How to run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build `bundle.js`.
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
|   |   └── utils.js
|   └── stylus/
|       └── mixins.styl
|       └── styles.styl
|       └── variables.styl
├── test/
|   └── index.js
├── .gitignore
├── bundle.js
├── index.html
├── package.json
├── README.md
└── webpack.config.js
```

I'm using webpack to compile all javascript into `bundle.js` and to compile stylus files into `src/css/main.css`.

## Technologies Used

### Production
* [jQuery](https://jquery.com/) - js library

### Development
* [Webpack](http://webpack.github.io/) - compiling/bundling javascript, stylus
* [Node.js](https://nodejs.org/) - uses npm to manage app dependencies, build process (node package manager)
* [Stylus](https://learnboost.github.io/stylus/) - CSS preprocessor
* [Nib](http://tj.github.io/nib/) - additional mixins and automatic prefixes for browser support
* [Mocha](http://mochajs.org/) and [Should.js](https://shouldjs.github.io/) - testing
