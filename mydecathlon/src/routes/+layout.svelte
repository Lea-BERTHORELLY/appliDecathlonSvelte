<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<p>Inscrivez-vous à notre newsletter pour ne manquer aucun bon plan !</p>
		<div class="input-group">
			<input type="text" class="form-control" placeholder="Enter e-mail" />
			<span class="input-group-addon"><button>Inscription</button></span>
		 </div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
