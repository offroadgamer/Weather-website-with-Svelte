<script>
    import { each } from "svelte/internal";
	import Navbar from "./about/Navbar.svelte";
	import Footer from "./about/Footer.svelte";
	import WeatherBox from "./WeatherBox.svelte";
	import "./weather.json";

	const api_key_1 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Oslo&aqi=no"
	const api_key_2 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Bergen&aqi=no"
	const api_key_3 = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Trondheim&aqi=no"

	const cities = [
		{},
		{},
		{}
	]
	const city_1 = []
	const city_2 = []
	const city_3 = []

	function connectToApiCity1() {
		fetch(api_key_1).then(
			response => {
				if (response.status == 200) {
					console.log("API Status: OK")
					response.json().then(
						json => {
							let city = json.location.name
							let temperature = json.current.temp_c
							let wind = json.current.wind_kph / 3.6
							let feels_like = json.current.feelslike_c
							city_1.push(city, temperature, wind.toFixed(), feels_like)
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
							let city = json.location.name
							let temperature = json.current.temp_c
							let wind = json.current.wind_kph / 3.6
							let feels_like = json.current.feelslike_c
							city_2.push(city, temperature, wind.toFixed(), feels_like)
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
							let city = json.location.name
							let temperature = json.current.temp_c
							let wind = json.current.wind_kph / 3.6
							let feels_like = json.current.feelslike_c
							city_3.push(city, temperature, wind.toFixed(), feels_like)
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

	const weather_info = [

		{name: "Oslo",
		temperature_c: 9.2,
		wind_ms: 13,
		feels_like:  8.4,
		},

		{name: "Bergen",
		temperature_c: 11,
		wind_ms: 4,
		feels_like:  9.1,
		},

		{name: "Trondheim",
		temperature_c: 6,
		wind_ms: 4,
		feels_like: 5.8,
		},
	]

</script>

<body class="body">
	<Navbar></Navbar>
	<div class="main">
		<div class="title">
			<h1>Hvordan er været idag?</h1>
		</div>
		<h2>Sjekk byen din!</h2>
		<div class="weather-cards-box">
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