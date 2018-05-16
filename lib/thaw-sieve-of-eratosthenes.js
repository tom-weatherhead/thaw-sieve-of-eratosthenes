'use strict';

/**
 * thaw-sieve-of-eratosthenes
 *
 * @copyright 2018 Tom Weatherhead
 * @license MIT
 * @version 0.0.0
 */
(function (global) {

	/**
  * isPrime
  *
  * @method isPrime
  * @param  {Int}   		m          		The integer to be tested
  * @param  {Array<Int>}	primes          The array of primes found thus far
  * @return {Boolean}                	The Boolean that indicates whether or not m is prime
  */
	function isPrime(m, primes) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {

			for (var _iterator = primes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var p = _step.value;


				if (p * p > m) {
					return true;
				}

				if (m % p === 0) {
					return false;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return true;
	}

	/**
  * sieve
  *
  * @method sieve
  * @param  {Mixed}   n          		String, Int or Float representation of the ceiling
  * @return {Array<Int>}                	The list of prime numbers less than n
  */
	function sieve(n) {
		// See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

		// Ensure than n is an integer. Convert if necessary.
		n = parseInt(n, 10);

		if (isNaN(n)) {
			throw new Error('Invalid argument');
		} else if (n <= 2) {
			return [];
		}

		var primes = [2];

		for (var m = 3; m < n; m += 2) {

			if (isPrime(m, primes)) {
				primes.push(m);
			}
		}

		return primes;
	}

	// CommonJS, AMD, script tag
	if (typeof exports !== 'undefined') {
		module.exports = sieve;
	} else if (typeof define === 'function' && define.amd) {
		define(function () {
			return sieve;
		});
	} else {
		global.sieve = sieve;
	}
})(typeof window !== 'undefined' ? window : global);
