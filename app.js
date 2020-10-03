const request = require('postman-request')

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

// Geocoding 
const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVzaGFybGFuZ2VyIiwiYSI6ImNrZnRwNDY1NjA4dHQzNXBraTBkeml3djkifQ.4oEqnpirqL1qIEqVn2EO2g' 

request({url: geo_url, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to the location services.')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try again with different location.')
    } else {
        console.log(`latitude: ${response.body.features[0].center[1]} longitude: ${response.body.features[0].center[0]}`)
    }
    
})