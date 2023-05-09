<script>
    export let weather;
</script>

<div class="weather-box">
    <div class="title">
        <h2>{weather.name}</h2>
    </div>
    <div class="temperature-info">
        <img class="weather-box-img" src="./src/lib/images/meta-logo.png" alt="temp-icon">
        <h1>{weather.temperature_c}°C</h1>
        <h4>Føles som: {weather.feels_like}°C</h4>
    </div>
    <div class="other-info">
        <h3>Vindstyrke: {weather.wind_ms}m/s</h3>
    </div>
</div>

<style>
    .weather-box {
		margin: 20px;
		max-width: 300px;
		border: 2px solid #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.weather-box-img {
		width: 50%;
	}
</style>