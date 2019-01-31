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

	// range() : Stolen from https://stackoverflow.com/questions/36947847/how-to-generate-range-of-numbers-from-0-to-n-in-es2015-only#comment68007528_36953272

	/**
	 * range
	 *
	 * @method range
	 * @param  {Int}   start          		The smallest integer in the array to be generated
	 * @param  {Int}   end          		The largest integer in the array to be generated
	 * @return {Array<Int>}                	The integers from start to end, inclusive, in increasing order
	 */
	function range (start, end) {
		// return [...Array(end - start + 1).keys()].map(n => start + n);

		return [...Array.from(Array(end - start + 1).keys())].map(n => start + n); // The Array.from() is for TypeScript, where Array.keys() returns an iterator, not an array.
	}

	/**
	 * sieve
	 *
	 * @method sieve
	 * @param  {Mixed}   n          		String, Int or Float representation of the ceiling
	 * @return {Array<Int>}                	The list of prime numbers less than n
	 */
	function sieve (limit) {
		// Ensure than limit is an integer. Convert if necessary.
		limit = parseInt(limit, 10);

		if (isNaN(limit)) {
			throw new Error('Invalid argument');
		}

		let numbers = range(2, limit - 1);
		const primes = [];

		while (numbers.length) {
			const p = numbers.shift();

			primes.push(p);
			numbers = numbers.filter(n => n % p !== 0);
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
	function factorize (n) {
		// Ensure than n is an integer. Convert if necessary.
		n = parseInt(n, 10);

		if (isNaN(n)) {
			throw new Error('Invalid argument');
		} else if (n < 2) {
			return [];
		}

		let primes = [];
		let factors = [];
		let m = 2;
		let m_increment = 1;

		for (;;) {

			if (m * m > n) {
				factors.push(n);

				return factors;
			}

			if (isPrime(m, primes)) {
				primes.push(m);

				while (n % m === 0) {
					n /= m;
					factors.push(m);

					if (n === 1) {
						return factors;
					}
				}
			}

			m += m_increment;
			m_increment = 2;
		}

		// Unreachable code:

		//return factors;
	}
