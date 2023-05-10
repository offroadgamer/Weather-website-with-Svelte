<script>
    import { each } from "svelte/internal";
	import Navbar from "./about/Navbar.svelte";
	import Footer from "./about/Footer.svelte";
	import WeatherBox from "./WeatherBox.svelte";
	import "./weather.json";

	const api_key_1 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Oslo&aqi=yes"
	const api_key_2 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Bergen&aqi=yes"
	const api_key_3 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Trondheim&aqi=yes"

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

	function connectToApiCity1() {
		fetch(api_key_1).then(
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
							weather_info[0].temperature_c = temperature
							weather_info[0].wind_ms = wind
							weather_info[0].feels_like = feelsLike
						}
					)
				} else {
					console.log("API status: FAIL")
				}
			})
		}

	function connectToApiCity2() {
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

	function connectToApiCity3() {
		fetch(api_key_3).then(
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
							weather_info[2].temperature_c = temperature
							weather_info[2].wind_ms = wind
							weather_info[2].feels_like = feelsLike
						}
					)
				} else {
					console.log("API status: FAIL")
				}
			})
		}

	connectToApiCity1()
	connectToApiCity2()
	connectToApiCity3()

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
	}
</style>