<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import placeholderImg from '$lib/assets/placeholder.jpg';
</script>

<div class="mt-12 flex justify-center gap-12 container mx-auto">
	<div class="max-w-3xl">
		<h1 class="mb-3 lg:text-4xl">
			Welcome to <span class="text-cyan-500">Data Story App</span>
		</h1>
		<p class="lg:text-lg text-justify lg:text-start font-mono">
			D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring
			data to life using HTML, SVG, and CSS. D3's emphasis on web standards gives you the full
			capabilities of modern browsers without tying yourself to a proprietary framework, combining
			powerful showcaseization components and a data-driven approach to DOM manipulation.
		</p>
	</div>

	<div>
		<Card title="Our first Data Story" link="story/our-data-story" imgSrc={placeholderImg} />
	</div>
</div>
