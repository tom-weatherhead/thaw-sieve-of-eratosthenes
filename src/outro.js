	// Node, AMD & window supported
	if (typeof exports !== 'undefined') {
		module.exports = {
			version: "{{VERSION}}",
			sieve: sieve,
			factorize: factorize
		};
	} else if (typeof define === 'function' && define.amd !== void 0) {
		define(() => {
			return {
				version: "{{VERSION}}",
				sieve: sieve,
				factorize: factorize
			};
		});
	} else {
		global.sieve = sieve;
		global.factorize = factorize;
	}
}(typeof window !== 'undefined' ? window : global));
