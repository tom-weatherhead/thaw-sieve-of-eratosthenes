/**
 * thaw-sieve-of-eratosthenes
 *
 * @copyright 2018 Tom Weatherhead
 * @license MIT
 * @version 0.0.0
 */
(function (global) {

	/**
	 * sieve
	 *
	 * @method sieve
	 * @param  {Mixed}   n          		String, Int or Float representation of the ceiling
	 * @return {Array<Int>}                	The list of prime numbers less than n
	 */
	function sieve (n) {
		// See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

		// TODO: Ensure than n is an integer. Convert if necessary.
		n = parseInt(n, 10);

		if (isNaN(n)) {
			throw new Error('Invalid argument');
		} else if (n <= 2) {
			return [];
		}

		let result = [2];

		for (let m = 3; m < n; m += 2) {
			let isPrime = true;

			result.forEach(p => {

				if (m % p === 0) {
					isPrime = false;
					//break;
				}
			});

			if (isPrime) {
				result.push(m);
			}
		}

		return result;
	}

	// CommonJS, AMD, script tag
	if (typeof exports !== 'undefined') {
		module.exports = sieve;
	} else if (typeof define === 'function' && define.amd) {
		define(() => {
			return sieve;
		});
	} else {
		global.sieve = sieve;
	}
}(typeof window !== 'undefined' ? window : global));
