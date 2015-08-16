# Sudoku

A web-based sudoku game.

* simple, responsive UI designed for use on desktop, tablet, and mobile
  * only CSS (no javascript) is used for responsive layout
  * the full sudoku board is resized to fit in viewport
  * text inputs utilize the number keyboard on mobile
* all sudoku logic and UI rendering is done via `src/js/sudoku.js`
* uses 1-way binding to keep track of user inputted values
  * on keyup in UI input, changes are made to a `currentGame` array (of arrays)
  * no need to implement 2-way binding because changes are only made via the DOM
* currently uses 1 hard-coded board and assumes there is only 1 solution for it, eventually would like to include a solver to get rid of this

## How to run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build `dist/bundle.js` and `dist/main.css`.
4. To start, run `npm start`. App will be accessible in your browser at http://localhost:8080.

## How to test

1. Run `npm test`.
2. Go to http://localhost:8080 in your browser.

## Files

```
.
├── dist/ - compiled, compressed javascript/stylus files
|   └── bundle.js
|   └── main.css
├── src/ - javascript/stylus source files
|   ├── js/
|   |   └── index.js - main javascript file that initiates Sudoku game
|   |   └── sudoku.js - main sudoku class
|   |   └── utils.js - "private" methods that don't need to be on the prototype
|   └── stylus/
|       └── mixins.styl
|       └── styles.styl
|       └── variables.styl
├── test/
|   └── index.js - mocha sudoku tests
├── .gitignore
├── index.html - root html file
├── package.json
├── README.md
└── webpack.config.js - webpack configuration file
```

Webpack is used to compile all javascript into `dist/bundle.js` and to compile stylus files into `dist/main.css`.

## Technologies Used

### Production
* [jQuery](https://jquery.com/) - js library

### Development
* [Node.js](https://nodejs.org/) - uses npm to manage app dependencies, build process (node package manager)
* [Webpack](http://webpack.github.io/) - compiling/bundling javascript, stylus
* [Mocha](http://mochajs.org/) and [Should.js](https://shouldjs.github.io/) - testing
* [Stylus](https://learnboost.github.io/stylus/) - CSS preprocessor
* [Nib](http://tj.github.io/nib/) - automatic CSS prefixes for browser support

## TODO
* create a generator/solver that randomly generates a solved sudoku game solution by using a [backtracking algorithm](https://en.wikipedia.org/wiki/Sudoku_solving_algorithms#Backtracking) to replace hard-coded data
  * this would allow users to play different game boards
* add UI tests
* experiment with different UI patterns for input for mobile that won't take up as much space on the screen as the native keyboard
* ditch jquery and attempt this using React.js (because i :heart: it more right now)
