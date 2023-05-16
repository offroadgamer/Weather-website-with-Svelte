<script>
    import { each } from "svelte/internal";
	import Navbar from "./about/Navbar.svelte";
	import Footer from "./about/Footer.svelte";
	import WeatherBox from "./WeatherBox.svelte";

	const api_key_1 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Oslo&aqi="
	const api_key_2 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Bergen&aqi="
	const api_key_3 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Trondheim&aqi="

	// Denne Array-en lagrer dataen som brukes for å hentes ut i HTML elementene som viser vær-informasjonen. 

	const weather_info = [

		{name: "Oslo",
		temperature_c: 0,
		wind_ms: 0,
		feels_like: 0,
		},

		{name: "Bergen",
		temperature_c: 0,
		wind_ms: 0,
		feels_like:  0,
		},

		{name: "Trondheim",
		temperature_c: 0,
		wind_ms: 0,
		feels_like: 0,
		},
	]

	// De 3 neste funskjonene er ansvarlig for å hente ut data fra API-en. Her henter de fra api-key variablene 
	// lenger opp i koden, før dataen blir lagret i variabler, og så lagt til i en Array.

	
	async function connectToAPI1() {
    const response = await fetch(api_key_1)
    if (response.status == 200) {
        console.log("API Status City 1: OK")
        const json = await response.json()
        let temperature = json.current.temp_c
        let windKph = json.current.wind_kph / 3.6
        let windStr = windKph.toFixed(2)
        let wind = Number(windStr)
        let feelsLike = json.current.feelslike_c
        weather_info[0].temperature_c = temperature
        weather_info[0].wind_ms = wind
        weather_info[0].feels_like = feelsLike					
    } else {
        console.log("API status City 1: FAIL")
    }
        
	}

	async function connectToAPI2() {
    const response = await fetch(api_key_2)
    if (response.status == 200) {
        console.log("API Status City 2: OK")
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
        console.log("API status City 2: FAIL")
    }
        
	}

	async function connectToAPI3() {
    const response = await fetch(api_key_3)
    if (response.status == 200) {
        console.log("API Status City 3: OK")
        const json = await response.json()
        let temperature = json.current.temp_c
        let windKph = json.current.wind_kph / 3.6
        let windStr = windKph.toFixed(2)
        let wind = Number(windStr)
        let feelsLike = json.current.feelslike_c
        weather_info[2].temperature_c = temperature
        weather_info[2].wind_ms = wind
        weather_info[2].feels_like = feelsLike					
    } else {
        console.log("API status City 3: FAIL")
    }
        
	}

	function runApiCall() {
		connectToAPI1()
		connectToAPI2()
		connectToAPI3()
	}

	runApiCall()
</script>

<body class="body">
	<Navbar></Navbar>
	<div class="main">
		<div class="title">
			<h1>Hvordan er været idag?</h1>
		</div>
		<h2>Sjekk byen din!</h2>
		<div class="weather-cards-box">
			<!-- Denne funskjonen lager "WeatherBox" med informasjon om været i en spesifkk by basert
				på hvor mange elementer det er i weather_infolisten i script delen av Svelte filen.-->
			{#each weather_info as weather}
				<WeatherBox weather={weather}></WeatherBox>
			{/each}
		</div>
		<div class="reload-button-box">
			<button class="reload-button" on:click={runApiCall}>Reload Weather</button>
		</div>
	</div>
	<Footer></Footer>
</body>

<style>
	body {
		background: linear-gradient(to left, #e6e6e6, #35baf6) ;
		font-family: Arial;
		margin: 0px;
	}
	.main {
		width: 70vw;
		margin: auto;
		text-align: center;	
		margin-top: 70px;
	}
	.title {
		margin-bottom: 40px;
	}

	.weather-cards-box {
		display: flex;
		flex-direction: row;
		width: 70vw;
		justify-content: center;
		margin-bottom: 30px;
	}

	.reload-button-box {
		background: transparent;
		border: 2px solid #ffffff;
		min-height: 50px;
		width: 10vw;	
		margin: auto;
		display: flex;
		justify-content: center;
	}

	.reload-button {
		border: none;
		background: none;
		font-size: min(3vw, 18px);
		color: #ffffff;
	}

	.reload-button:hover {
		color: #333333;	 
	}
</style>