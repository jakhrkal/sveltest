<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<center id="page-background">
	<img
		id="background-image"
        class="rotating"
		src="{data.backgroundImg}"
		alt=""
		style:--backgroundRotationSpeed={data.backgroundRotationSpeed + 's'}
		style:--backgroundStartRotation={data.backgroundStartRotation + 'deg'}
	/>
</center>

<slot />

<style>
	#page-background {
		/* todo layers of background, black background to the bottom; make the wheel work on small devices */
		z-index: -1;
		position: fixed;
	}

	#background-image {
		opacity: 0.7;
		width: 200%;
		position: relative;
		left: -50%;
		/* todo relative positioning, fix visible corners */
		top: -25em;
	}

    .rotating {
		animation: rotate var(--backgroundRotationSpeed) linear infinite;
    }

	@keyframes rotate {
		0% {
			transform: rotate(var(--backgroundStartRotation));
		}
		100% {
			transform: rotate(calc(var(--backgroundStartRotation) + 360deg));
		}
	}
</style>
