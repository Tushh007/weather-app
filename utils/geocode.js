const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVzaGFybGFuZ2VyIiwiYSI6ImNrZnRwNDY1NjA4dHQzNXBraTBkeml3djkifQ.4oEqnpirqL1qIEqVn2EO2g'
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else {
            if (response.body.features) {
                if (response.body.features.length === 0) {
                    callback('Unable to find location. Try another search.', undefined)
                } else {
                    callback(undefined, {
                        latitude: response.body.features[0].center[1],
                        longitude: response.body.features[0].center[0],
                        location: response.body.features[0].place_name
                    })
                }
            } else {
                callback('Invalid Location!')
            }
        } 
    })
}

module.exports = geocode