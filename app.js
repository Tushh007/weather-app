const request = require('postman-request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=d87ff57c2d8ec4b5ebe3b91df4d9b7d5&query=37.8267,-122.4233&units=s'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to web service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees.`)
//     }
// })

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})