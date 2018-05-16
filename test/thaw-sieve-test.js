var sieve = require('..');

exports.sieve = {
	/*
	setUp: function (done) {
		// this.edgecase	= ;
		// this.neg			= ;
		// this.byte		= ;
		this.zero			= 0;
		// this.invld		= ;
		// this.huge		= ;
		// this.small		= ;
		done();
	}*/
	tests: function (test) {
		test.deepEqual(sieve(2),				[],									'Should be []');
		test.deepEqual(sieve(3),				[2],								'Should be [2]');
		test.deepEqual(sieve(10),				[2, 3, 5, 7],						'Should be [2, 3, 5, 7]');
		test.deepEqual(sieve(20),				[2, 3, 5, 7, 11, 13, 17, 19],		'Should be [2, 3, 5, 7, 11, 13, 17, 19]');
		test.done();
	}
};
