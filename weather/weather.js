const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/d26547c2bd9da63b9d566a7e4daf354f/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  })
}

module.exports.getWeather = getWeather;
