<script type="ts">
	import type { PageData } from './$types';
	import * as Api from '$lib/generated/api';
	export let data: PageData;

	async function onSubmitStory(
		e: (SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) | undefined
	) {
		const formData = new FormData(e?.target as any);
		data.messages = data.messages.concat([
			{
				date: new Date(),
				name: formData.get('name')?.toString() || '',
				message: formData.get('message')?.toString() || ''
			}
		]);
		console.log(data.messages);
	}
</script>

<div id="page-body">
	<center>
		<form on:submit|preventDefault={onSubmitStory} style:margin-bottom="2em">
			<h1>Vítej, poutníku.</h1>
			<p>Co máš na srdci?</p>
			<div>
				<input placeholder="Tvé jméno..." style:margin-bottom="1em" id="name" name="name" />
			</div>
			<!-- todo reactive size -->
			<textarea placeholder="Tvůj příběh..." rows="15" cols="80" id="message" name="message" />
			<div>
				<button>Zapsat</button>
			</div>
		</form>

		{#each data.messages as message, i}
			<div>
				({i + 1}): {message.date.toLocaleDateString()}: <strong>{message.name}</strong> napsal:
				<em>{message.message}</em>
			</div>
			<span style:margin-bottom="1em">----------------</span>
		{/each}
	</center>

	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
	<center>
		<form action="https://hraju-dracak.cz/api/user" method="POST">
			<strong>Přidej se k nám</strong>
			<input placeholder="Jak ti máme říkat..." style:margin-bottom="1em" id="nick" name="nick" />
			<input placeholder="Jak poznáme, že jsi to ty..." style:margin-bottom="1em" id="password" name="password" />
			<div class="g-recaptcha" data-sitekey="6Ldgx5ccAAAAAHOB77Mrioeqzj_cxOjbiRwbX0mS" />
			<br />
			<input type="submit" value="Submit" />
		</form>
	</center>
</div>

<style>
	#page-body {
		margin-top: 10em;
		color: saddlebrown;
		background-color: black;
		opacity: 0.96;
		box-shadow: -4em -4em 3em black, 4em -4em 3em black, -4em 4em 3em black, 4em 4em 3em black;
		min-height: 50em;
		font-family: Candara, Helvetica, Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
