	/**
	 * isPrime
	 *
	 * @method isPrime
	 * @param  {Int}   		m          		The integer to be tested
	 * @param  {Array<Int>}	primes          The array of primes found thus far
	 * @return {Boolean}                	The Boolean that indicates whether or not m is prime
	 */
	function isPrime (m, primes) {

		for (let p of primes) {

			if (p * p > m) {
				return true;
			}

			if (m % p === 0) {
				return false;
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
	function sieve (n) {
		// See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

		// Ensure than n is an integer. Convert if necessary.
		n = parseInt(n, 10);

		if (isNaN(n)) {
			throw new Error('Invalid argument');
		} else if (n <= 2) {
			return [];
		}

		let primes = [2];

		for (let m = 3; m < n; m += 2) {

			if (isPrime(m, primes)) {
				primes.push(m);
			}
		}

		return primes;
	}
