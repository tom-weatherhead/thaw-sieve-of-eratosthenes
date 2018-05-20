var engine = require('..');

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
		test.deepEqual(engine.sieve(2),				[],									'Should be []');
		test.deepEqual(engine.sieve(3),				[2],								'Should be [2]');
		test.deepEqual(engine.sieve(10),			[2, 3, 5, 7],						'Should be [2, 3, 5, 7]');
		test.deepEqual(engine.sieve(20),			[2, 3, 5, 7, 11, 13, 17, 19],		'Should be [2, 3, 5, 7, 11, 13, 17, 19]');

		test.deepEqual(engine.factorize(2),			[2],									'Should be [2]');
		test.deepEqual(engine.factorize(4),			[2, 2],									'Should be [2, 2]');
		test.deepEqual(engine.factorize(6),			[2, 3],									'Should be [2, 3]');
		test.deepEqual(engine.factorize(8),			[2, 2, 2],								'Should be [2, 2, 2]');
		test.deepEqual(engine.factorize(72),		[2, 2, 2, 3, 3],						'Should be [2, 2, 2, 3, 3]');

		test.done();
	}
};
