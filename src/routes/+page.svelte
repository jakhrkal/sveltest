<script>
	let backgroundRotation = 0;
	setInterval(() => backgroundRotation++, 2000);
</script>

<center id="page-background">
	<img id="background-image" src=northern_hemisphere.svg alt="" style:transform="rotate({backgroundRotation}deg)"/>
</center>

<center id=page-body>
	<h1>Vítej, poutníku.</h1>
	<p>Co máš na srdci?</p>
	<!-- todo reactive size -->
	<textarea placeholder="Tvůj příběh..." rows="15" cols="60"></textarea>
</center>

<style>
	#page-background {
		z-index: -1;
		position: fixed;
	}

	#background-image {
		
		opacity: 0.7;
		width: 150%;
		position: relative;
		left: -25%;
		top: -15em;
	}

	#page-body {
		margin-top: 5em;
		color: saddlebrown;
		background-color: black;
		box-shadow: -4em -4em 3em black, 4em -4em 3em black,
					-4em 4em 3em black, 4em 4em 3em black;
	}
</style>