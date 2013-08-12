var assert = require('assert')

describe('sgUid', function(){

	it('should get a random string', function(){

		var uid = sgUid();

		assert(typeof uid == 'string' && uid.length == 16);

	});

	it('should get a random string with only 10 chars', function(){

		var uid = sgUid(10);

		assert(typeof uid == 'string' && uid.length == 10);

	});

	it('should get a random string with an invalid number of characters', function(){

		assert(sgUid(0).length == 16);
		assert(sgUid(-1).length == 16);
		assert(sgUid(false).length == 16);
		assert(sgUid('a').length == 16);
		assert(sgUid(/.+/).length == 16);
		assert(sgUid({}).length == 16);
		assert(sgUid(function(){}).length == 16);

	});

	it('get 100 uids and ensure each one begins with a letter', function(){


		for (var i=0; i<100; i++) {

			var uid = sgUid();

			assert(/^\w/.test(uid));

		}

	});

});