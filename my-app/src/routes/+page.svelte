<script>
    import { each } from "svelte/internal";
	import Navbar from "./about/Navbar.svelte";
	import Footer from "./about/Footer.svelte";
	import WeatherBox from "./WeatherBox.svelte";
	import "./weather.json";

	const api_key = "http://api.weatherapi.com/v1/current.json?key=8de6c8ee85794fdb967110245230105&q=Oslo&aqi=no"

	function connectToApi() {
		fetch(api_key).then(
			response => {
				if (response.status == 200) {
					console.log("API Status: OK")
					response.json().then(
						json => {
							let city = json.location.name
							let temperature = json.current.temp_c
							let wind = json.current.wind_kph / 3.6
							let feels_like = json.current.feelslike_c
							console.log(weather_info)
							city.push(weather_info)
							console.log(weather_info)
						}
					)
				} else {
					console.log("API status: FAIL")
				}
			})
		}

	connectToApi()

	const weather_info = [

		{name: "Oslo",
		temperature_c: "8°C",
		feels_like:  "9.8°C",
		wind_ms: "3.1 m/s",
		},

		{name: "London",
		temperature_c: "12°C",
		feels_like:  "11.2°C",
		wind_ms: "2 m/s",
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