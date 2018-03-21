const request = require('request');

const geocodeAddress = (address, callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAzqV02RQ3R5tDuhiUPlhww_AhPN0rukT0`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    } else {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: `${body.results[0].geometry.location.lng}`,
          longitude: `${body.results[0].geometry.location.lng}`
        })
      }
  });
}

module.exports = {
  geocodeAddress
}
