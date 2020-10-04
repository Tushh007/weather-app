console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log('error:', data.error)
        } else {
            console.log(data.location + '\n' + data.forecast)
        }
    })
})