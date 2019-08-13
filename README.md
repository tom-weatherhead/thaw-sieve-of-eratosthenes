# thaw-sieve-of-eratosthenes
A JavaScript implementation of the Sieve of Eratosthenes, an ancient Greek prime number generator.

[![Build Status](https://secure.travis-ci.org/tom-weatherhead/thaw-sieve-of-eratosthenes.svg)](https://travis-ci.org/tom-weatherhead/thaw-sieve-of-eratosthenes)
[![npm](https://img.shields.io/npm/v/thaw-sieve-of-eratosthenes.svg)](https://www.npmjs.com/package/thaw-sieve-of-eratosthenes)
[![npm](https://img.shields.io/npm/dt/thaw-sieve-of-eratosthenes.svg)](https://www.npmjs.com/package/thaw-sieve-of-eratosthenes)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/tom-weatherhead/thaw-sieve-of-eratosthenes/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/31ef39e48b94a175434a/maintainability)](https://codeclimate.com/github/tom-weatherhead/thaw-sieve-of-eratosthenes/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/tom-weatherhead/thaw-sieve-of-eratosthenes/badge.svg?targetFile=package.json&package-lock.json)](https://snyk.io/test/github/tom-weatherhead/thaw-sieve-of-eratosthenes?targetFile=package.json&package-lock.json)

Most of this project's infrastructure was stolen from Jason Mulligan's ([avoidwork](https://github.com/avoidwork)'s) [tiny-graph](http://avoidwork.github.io/tiny-graph) project.

## Installation
To install the stable version:
```
npm install --save thaw-sieve-of-eratosthenes
```

## Example
```js
const engine = require('thaw-sieve-of-eratosthenes');

console.log(engine.sieve(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

console.log(engine.factorize(72)); // [2, 2, 2, 3, 3]
```

## API
#### factorize(n)
Returns the unique prime factorization of `n` as a list of integers

#### sieve(n)
Returns the list of all prime numbers less than `n`

## License
[MIT](https://choosealicense.com/licenses/mit/)
