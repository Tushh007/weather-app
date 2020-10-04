const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2]

if (location && process.argv.length === 3) {
    geocode(location, (error, data) => {
        if (error) {
            return console.log("Error", error);
        }
    
        forecast(data.latitude, data.longitude, (error, forcastData) => {
            if (error) {
                return console.log("Error", error);
            }
    
            console.log(data.location)
            console.log(forcastData)
        });
    });
} else {
    console.log('Please enter a valid location!')
}

