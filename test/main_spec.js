// tom-weatherhead/common-utilities.js/test/main_spec.js

// Unit test specifications for Mocha

'use strict';

const assert = require('assert').strict;

const engine = require('..');

describe('App', () => {
	describe('Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			// Act
			// Assert

			assert.deepEqual(engine.sieve(2), []);
			assert.deepEqual(engine.sieve(3), [2]);
			assert.deepEqual(engine.sieve(10), [2, 3, 5, 7]);
			assert.deepEqual(engine.sieve(20), [2, 3, 5, 7, 11, 13, 17, 19]);

			assert.deepEqual(engine.factorize(2), [2]);
			assert.deepEqual(engine.factorize(4), [2, 2]);
			assert.deepEqual(engine.factorize(6), [2, 3]);
			assert.deepEqual(engine.factorize(8), [2, 2, 2]);
			assert.deepEqual(engine.factorize(72), [2, 2, 2, 3, 3]);

			done();
		});
	});
});
