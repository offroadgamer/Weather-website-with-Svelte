const api_key_2 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Bergen&aqi=no"

function connectToAPI2() {
    fetch(api_key_2).then(
        response => {
            if (response.status == 200) {
                console.log("API Status: OK")
                response.json().then(
                    json => {
                        let temperature = json.current.temp_c
                        let windKph = json.current.wind_kph / 3.6
                        let windStr = windKph.toFixed(2)
                        let wind = Number(windStr)
                        let feelsLike = json.current.feelslike_c
                        weather_info[1].temperature_c = temperature
                        weather_info[1].wind_ms = wind
                        weather_info[1].feels_like = feelsLike
                    }
                )
            } else {
                console.log("API status: FAIL")
            }
        })
    }

async function connectToAPI2() {
    const response = await fetch(api_key_2)
    if (response.status == 200) {
        console.log("API Status: OK")
        const json = await response.json()
        let temperature = json.current.temp_c
        let windKph = json.current.wind_kph / 3.6
        let windStr = windKph.toFixed(2)
        let wind = Number(windStr)
        let feelsLike = json.current.feelslike_c
        weather_info[1].temperature_c = temperature
        weather_info[1].wind_ms = wind
        weather_info[1].feels_like = feelsLike					
    } else {
        console.log("API status: FAIL")
    }
        
}