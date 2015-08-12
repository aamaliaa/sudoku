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

I'm using webpack to compile javascript (to `bundle.js`) and the stylus gets compiled to css and inserted into `index.html` automatically.

## Technologies Used

### Production
* jQuery

### Development
* Webpack (for compiling javascript, stylus)
* Node.js/NPM
* Stylus
* Mocha/Should.js
