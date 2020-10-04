const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d87ff57c2d8ec4b5ebe3b91df4d9b7d5&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forcast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast