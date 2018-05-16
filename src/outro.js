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
