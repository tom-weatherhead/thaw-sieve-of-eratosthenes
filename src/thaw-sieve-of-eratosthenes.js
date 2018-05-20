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
	function sieve (n) {					// eslint-disable-line no-unused-vars
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

	/**
	 * factorize
	 *
	 * @method factorize
	 * @param  {Mixed}   n          		String, Int or Float representation of n, the integer to factorize
	 * @return {Array<Int>}                	The list of prime factors of n
	 */
	function factorize (n) {					// eslint-disable-line no-unused-vars
		//const original_n = n;

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
