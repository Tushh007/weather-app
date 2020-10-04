const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2]

if (location && process.argv.length === 3) {
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log("Error", error);
        }
    
        forecast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return console.log("Error", error);
            }
    
            console.log(location)
            console.log(forcastData)
        });
    });
} else {
    console.log('Please enter a valid location!')
}

