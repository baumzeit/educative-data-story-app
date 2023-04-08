<script lang="ts">
	export let title: string;
	export let link: string;
	export let imgSrc: string;
	export let alt = 'placeholder';
</script>

<a href={link} class="block w-60">
	<div class="group border-2 border-transparent transition-all hover:border-cyan-300/80">
		<div class="aspect-square overflow-hidden">
			<img
				src={imgSrc}
				{alt}
				class="h-full w-full object-cover transition-transform duration-500 origin-bottom group-hover:scale-110 ease-out"
			/>
		</div>
		<div
			class={`bg-gray-200 tracking-wide text-black transition-all group-hover:bg-cyan-300/80 group-hover:border-cyan-300/80 px-2.5 font-bold md:text-lg`}
		>
			{title}
		</div>
	</div>
</a>
