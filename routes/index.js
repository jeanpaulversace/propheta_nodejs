var express = require('express');
var router = express.Router();
var OAuth = require('oauth');


/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

 //  var setup = require('setup')();

	// setup.hostname.save('jeanpaulversacewinstontri.com');

	// var consumer = new OAuth.OAuth(
	//     "https://twitter.com/oauth/request_token",
	//     "https://twitter.com/oauth/access_token", 
	//     consumer_key,
	//     consumer_secret,
	//     "1.0A",
	//     "http://127.0.0.1:8080/sessions/callback",
	//     "HMAC-SHA1"
	// );
	// consumer.get(
	// 	'https://stream.twitter.com/1.1/statuses/sample.json',
	// 	access_token,
	// 	access_token_secret,
	// 	function(e, data, res) {
	// 		if (e) console.error(e);
	// 		console.log(require('util').inspect(data));
	// 	}
	// );


});



module.exports = router;
