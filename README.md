# thaw-sieve-of-eratosthenes

[![build status](https://secure.travis-ci.org/tom-weatherhead/thaw-sieve-of-eratosthenes.svg)](http://travis-ci.org/tom-weatherhead/thaw-sieve-of-eratosthenes)  [![downloads](https://img.shields.io/npm/dt/thaw-sieve-of-eratosthenes.svg)](https://www.npmjs.com/package/thaw-sieve-of-eratosthenes)

thaw-sieve-of-eratosthenes is a JavaScript implementation of the Sieve of Eratosthenes, an ancient Greek prime number generator.

Most of this project's infrastructure was stolen from Jason Mulligan's ([avoidwork](https://github.com/avoidwork)'s) [tiny-graph](http://avoidwork.github.io/tiny-graph) project.

## Example
```javascript
const engine = require('thaw-sieve-of-eratosthenes');

console.log(engine.sieve(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

console.log(engine.factorize(72)); // [2, 2, 2, 3, 3]
```

## How can I use thaw-sieve-of-eratosthenes?
thaw-sieve-of-eratosthenes can be installed from npm and bower, and supports AMD loaders or script tags (e.g. `window.sieve`).

## API
#### factorize(n)
Returns the unique prime factorization of `n` as a list of integers

#### sieve(n)
Returns the list of all prime numbers less than `n`

## License
Copyright (c) 2018 Tom Weatherhead
Licensed under the MIT license
