<script>
	let categories = [
		{ name: 'Kitchen', href: '/', image: 'kitchen.jpg' },
		{ name: 'Living room', href: '/', image: 'living-room.jpg' },
		{ name: 'Hallway', href: '/', image: 'hallway.jpg' },
		{ name: 'Bedroom', href: '/', image: 'bedroom.jpg' }
	];
</script>

<section class="px-4 py-12 md:py-16 md:px-8">
	<div class="mx-auto max-w-5xl">
		<header>
			<h2 class="text-center font-serif text-3xl font-normal text-neutral-ten md:text-4xl">
				Shop by category
			</h2>
			<p class="mt-3 text-center text-base font-normal text-neutral-seven md:mt-4 md:text-lg">
				Eleifend varius dolor sed blandit velit praesent
			</p>
		</header>
		<div
			class="mx-auto mt-10 grid w-fit grid-cols-1 justify-center gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4"
		>
			{#each categories as { name, href, image }}
				<a
					class="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-five"
					{href}
				>
					<div>
						<div class="relative h-[13rem] w-[13rem] overflow-hidden">
							<img
								class="h-full w-full object-cover transition-transform group-hover:scale-125 group-focus-visible:scale-125"
								alt={name}
								src={image}
							/>
						</div>
						<p class="mt-2 text-center text-base font-normal text-neutral-nine">{name}</p>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-10 flex justify-center md:mt-12">
			<a
				href="/"
				class="inline-block rounded-lg bg-brand-five px-12 py-6 text-sm uppercase tracking-widest text-brand-one hover:bg-brand-six focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-five"
				>View more</a
			>
		</div>
	</div>
</section>
