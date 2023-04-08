<script>
	import '../app.css';
	import { IconGrain } from '@tabler/icons-svelte';
</script>

<div>
	<header class="bg-gray-950">
		<nav class="flex items-center py-3 mx-2">
			<a href="/">
				<div class="flex items-center gap-1">
					<IconGrain size={18} stroke={2} class="stroke-cyan-600" />
					<div class="tracking-tight">Data Story App</div>
				</div>
			</a>
			<div class="flex-1 text-center mr-20 font-bold tracking-wide">Test Header Title</div>
			<a href="/about" class="mr-4">
				<div class="tracking-tight">About</div>
			</a>
		</nav>
	</header>
	<main><slot /></main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.900');
		color: theme('colors.gray.100');
	}
	:global(h1) {
		font-size: theme('fontSize.3xl');
		font-weight: bold;
	}
	:global(h2) {
		font-size: theme('fontSize.2xl');
		font-weight: bold;
	}
	:global(h3) {
		font-size: theme('fontSize.xl');
		font-weight: bold;
	}
</style>
