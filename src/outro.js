	// CommonJS, AMD, script tag
	if (typeof exports !== 'undefined') {
		module.exports = {
			sieve: sieve,
			factorize: factorize
		};
	} else if (typeof define === 'function' && define.amd) {
		define(() => {
			return {
				sieve: sieve,
				factorize: factorize
			};
		});
	} else {
		global.sieve = sieve;
		global.factorize = factorize;
	}
}(typeof window !== 'undefined' ? window : global));
