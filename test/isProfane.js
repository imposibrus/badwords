require('assert');
var filter = require('../lib/badwords.js');
var assert = require('better-assert');

describe('filter', function(){
	describe('isProfane',function(){

		it("Should detect a bad word and return a boolean value",function(){
			assert(filter.isProfane("ash0le"));
		});

		it("Should return false when no bad word is detected",function(){
			assert(filter.isProfane("wife") === false);
		});

		it("Should be able to detect a bad word in a sentence",function(){
			assert(filter.isProfane("that person is an ash0le"));
		});

		it('Should detect filtered words from badwords-list', function(){
			assert(filter.isProfane('willies'));
		});

		it('Should return false when no input provided', function(){
			assert(filter.isProfane('') === false);
		});
	});
});
