<script>

	// todo fix weird "jumping" of image on load - prerender in Server.ts
	const currentDate = new Date();
	const backgroundStartRotation = (currentDate.getHours()*60 + currentDate.getMinutes())/4;
	const backgroundEndRotation = (backgroundStartRotation + 360);

	/**
	 * @type {any[]}
	 */
	let messages = [];

	/**
	 * @param {{ target: HTMLFormElement | undefined; }} e
	 */
	function onSubmit(e) {
		const formData = new FormData(e.target);
		messages = messages.concat({date: new Date(), name: formData.get("name"), message: formData.get("message")});
		console.log(messages);
	}
</script>

<center id="page-background">
	<img id="background-image" src=northern_hemisphere.svg alt="" 
	style:--backgroundStartRotation={backgroundStartRotation+'deg'}
	style:--backgroundEndRotation={backgroundEndRotation+'deg'} />
</center>

<center id=page-body>
	<form on:submit|preventDefault={onSubmit} style:margin-bottom="2em">
		<h1>Vítej, poutníku.</h1>
		<p>Co máš na srdci?</p>
		<div>
			<input placeholder="Tvé jméno..." style:margin-bottom="1em" id="name" name="name" />
		</div>
		<!-- todo reactive size -->
		<textarea placeholder="Tvůj příběh..." rows="15" cols="80" id="message" name="message"></textarea>
		<div>
			<button>Zapsat</button>
		</div>
	</form>

	{#each messages as message, i}
	<div>
		({i + 1}): {message.date.toLocaleDateString()}: <strong>{message.name}</strong> napsal:
		<em>{message.message}</em>
	</div>
	<span style:margin-bottom="1em">----------------</span>
	{/each}
</center>

<style>
	#page-background {
		/* todo layers of background - make the wheel work on small devices */
		z-index: -1;
		position: fixed;
	}

	#background-image {
		opacity: 0.7;
		width: 150%;
		position: relative;
		left: -25%;
		/* todo relative positioning */
		top: -25em;
		/* Animation duration only in seconds. 86400s = 24 hours. */
		animation: rotate 2000s linear infinite;
	}

	#page-body {
		margin-top: 10em;
		color: saddlebrown;
		background-color: black;
		opacity: 0.96;
		box-shadow: -4em -4em 3em black, 4em -4em 3em black,
					-4em 4em 3em black, 4em 4em 3em black;
		min-height: 50em;
	}

	@keyframes rotate {
		0% { transform: rotate(var(--backgroundStartRotation))}
		100% { transform: rotate(var(--backgroundEndRotation));}
	}
</style>