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
		// eslint-disable-line no-unused-vars
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

	/**
  * factorize
  *
  * @method factorize
  * @param  {Mixed}   n          		String, Int or Float representation of n, the integer to factorize
  * @return {Array<Int>}                	The list of prime factors of n
  */
	function factorize(n) {
		// eslint-disable-line no-unused-vars
		//const original_n = n;

		// Ensure than n is an integer. Convert if necessary.
		n = parseInt(n, 10);

		if (isNaN(n)) {
			throw new Error('Invalid argument');
		} else if (n < 2) {
			return [];
		}

		var primes = [];
		var factors = [];
		var m = 2;
		var m_increment = 1;

		//while (true) {		// eslint-disable-line no-constant-condition
		for (;;) {
			//console.log('m =', m);

			if (m * m > n) {
				factors.push(n);
				//console.log('Return 1', original_n, m, n, primes, factors);

				return factors;
			}

			if (isPrime(m, primes)) {
				primes.push(m);

				while (n % m === 0) {
					n /= m;
					factors.push(m);

					if (n === 1) {
						//console.log('Return 2', original_n, m, n, primes, factors);

						return factors;
					}
				}
			}

			m += m_increment;
			m_increment = 2;
		}

		// Unreachable code:
		//console.log('Return 3', original_n, n, primes, factors);

		//return factors;
	}

	// CommonJS, AMD, script tag
	if (typeof exports !== 'undefined') {
		module.exports = {
			sieve: sieve,
			factorize: factorize
		};
	} else if (typeof define === 'function' && define.amd) {
		define(function () {
			return {
				sieve: sieve,
				factorize: factorize
			};
		});
	} else {
		global.sieve = sieve;
		global.factorize = factorize;
	}
})(typeof window !== 'undefined' ? window : global);
