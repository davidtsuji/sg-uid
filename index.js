var randomBetween = require('sg-random-between');

module.exports = function(_length) {

	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	  , length = typeof _length == 'number' && _length > 0 ? _length : 16
	  , beginWith = alphabet[randomBetween(0, 25)]
	  , uid = Math.random().toString(35).substr(2,length-1)

	return beginWith + uid;

}