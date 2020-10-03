const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d87ff57c2d8ec4b5ebe3b91df4d9b7d5&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to forcast services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast