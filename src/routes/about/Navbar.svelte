<script>

</script>

<div class="navbar">
    <div class="logo">
        <img class="navbar-logo" src="src/lib/images/logo.png" alt="logo">
    </div>
    <div class="links">
        <ul class="navbar-links">
            <li><a class="navbar-links-item" href="+page.svelte">Oslo</a></li>
            <li><a class="navbar-links-item" href="+page.svelte">Bergen</a></li>
            <li><a class="navbar-links-item" href="+page.svelte">Trondheim</a></li>
        </ul>
    </div>
    <div class="info">
        <p>Om</p>
    </div>
</div>

<style>
	.navbar {
        border-bottom: 2px solid #FFFFFF;
        min-height: 100px;
        width: 98%;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo {
		width: 20%;
	}

	.navbar-logo {
		height: 95px;
		width: 100px;
		
	}

	.links {
		width: 60%;
	}

	.navbar-links {
		font-weight: 700;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.navbar-links-item {
		text-decoration: none; 
        color: #000000;
        font-size: 20px;
	}

    .navbar-links-item:hover {
        color: #aaaaaa;
    }

	.info {
		width: 20%;
        font-size: 20px;
		font-weight: 700;
    }
</style>