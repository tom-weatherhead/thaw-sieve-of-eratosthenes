// thaw-sieve-of-eratosthenes/examples/script.js

// To disable an eslint warning or error for an entire file, use this syntax: /* eslint no-alert: 0 */

// See https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file

'use strict';

// TODO: Eliminate the jQuery dependency. E.g. :

// <input type="button" name="btnDeal" id="btnDeal" value="Deal Card" onclick="dealCards()" />
// <input type="text" name="txtCard" id="txtCard1" size="25" value="" />

// var tbCard = document.getElementById("txtCard1")

// tbCard.value = card.toString()

/*
$('#btnGCD').click(function () {			// eslint-disable-line no-undef
	let m = $('#m').val();					// eslint-disable-line no-undef
	let n = $('#n').val();					// eslint-disable-line no-undef

	console.log('#btnGCD click');
	console.log('m ===', m, '; n ===', n);
	
	let result = gcd(m, n);

	console.log('gcd ===', result);
	$('#result').val(result);				// eslint-disable-line no-undef
});
*/

function callSieve() {
	const n = document.getElementById('nSieve').value;
	const result = sieve(n);
	
	console.log('callSieve() : n is', n);
	console.log('callSieve() : result is', result);
	
	document.getElementById('resultSieve').value = '[' + result.toString() + ']';
}

function callFactorize() {
	const n = document.getElementById('nFactorize').value;
	const result = factorize(n);
	
	console.log('callFactorize() : n is', n);
	console.log('callFactorize() : result is', result);
	
	document.getElementById('resultFactorize').value = '[' + result.toString() + ']';
}
