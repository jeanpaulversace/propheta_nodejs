var Twit = require('twit');

var T = new Twit({
    consumer_key:         process.env['TWITTER_CONSUMER_KEY']
  , consumer_secret:      process.env['TWITTER_CONSUMER_SECRET']
  , access_token:         process.env['TWITTER_OAUTH_TOKEN']
  , access_token_secret:  process.env['TWITTER_OAUTH_TOKEN_SECRET']
});

console.log("KEYS", {
    consumer_key:         process.env['TWITTER_CONSUMER_KEY']
  , consumer_secret:      process.env['TWITTER_CONSUMER_SECRET']
  , access_token:         process.env['TWITTER_OAUTH_TOKEN']
  , access_token_secret:  process.env['TWITTER_OAUTH_TOKEN_SECRET']
})

var streamPath = 'statuses/sample';
var stream = T.stream(streamPath)

stream.on('tweet', function (tweet) {
  console.log("New tweet:", tweet)
});

console.log('Listening for tweets on', streamPath);


