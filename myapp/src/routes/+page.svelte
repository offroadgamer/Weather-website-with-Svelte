<script>
	import Navbar from "./about/Navbar.svelte"
</script>

<body>
	<Navbar></Navbar>
	<div class="main">
		<div class="title">
			<h1>How is the weather today?</h1>
		</div>
		<div class="weather-cards-box">
			<h2>Check your city!</h2>
			<!-- Each funtion incoming -->
		</div>
	</div>
</body>

<style>
	body {
		background: linear-gradient(to left, #e6e6e6, #35baf6) ;
		font-family: Arial;
	}
	.main {
		width: 70vw;
		margin: auto;
		text-align: center;	
		margin-top: 100px;
	}
	.title {
		margin-bottom: 70px;
	}
</style>