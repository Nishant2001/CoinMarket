var request = require('request');
var assert =require('assert');

function testCoingeckoApi() {
var url = "https://api.coingecko.com/api/v3/coins/bitcoin";
request(url, function (error, response, body) {
if (!error && response.statusCode == 200) {
var data = JSON.parse(body);
  console.log('status code: '+ response.statusCode);
  // check if the request was successful
  assert(response.statusCode == 200);

  // check if the returned data is valid
  assert(data['id'] == 'bitcoin');
  assert(data['symbol'] == 'btc');
  console.log(data);
}
else if (error){
  console.log('error');
}
else if(response.statusCode != 200)
    console.log('status code: '+ response.statusCode);
});
}

testCoingeckoApi();