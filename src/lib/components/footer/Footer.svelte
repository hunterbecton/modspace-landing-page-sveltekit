<script>
	import Logo from '../icon/Logo.svelte';

	let sections = [
		{
			title: 'Categories',
			rows: [
				{ name: 'Living room', href: '/' },
				{ name: 'Kitchen', href: '/' },
				{ name: 'Bedroom', href: '/' },
				{ name: 'Bathroom', href: '/' },
				{ name: 'Hallway', href: '/' }
			]
		},
		{
			title: 'Company',
			rows: [
				{ name: 'Our story', href: '/' },
				{ name: 'Careers', href: '/' },
				{ name: 'Privacy', href: '/' },
				{ name: 'Terms', href: '/' }
			]
		},
		{ title: 'Contact', rows: [{ text: '5432 Lenox Road' }, { text: 'Atlanta, GA 30328' }] }
	];
</script>

<footer class="px-4 py-12 md:py-16 md:px-8">
	<div
		class="mx-auto flex max-w-5xl flex-col justify-start rounded-2xl bg-brand-two p-16 md:flex-row md:justify-between"
	>
		<Logo class="mr-0 h-6 flex-none text-brand-ten md:mr-8" />
		<section
			class="mt-12 grid w-full max-w-[37rem] flex-1 grid-cols-1 gap-12 md:mt-0 md:grid-cols-3"
		>
			{#each sections as { title, rows }}
				{#if title !== 'Contact'}
					<div>
						<h1 class="text-base font-medium uppercase tracking-widest text-brand-ten">{title}</h1>
						<ul class="mt-4 space-y-2">
							{#each rows as { name, href }}
								<li>
									<a
										class="text-base font-normal text-brand-nine hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none"
										{href}>{name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{:else}
					<div>
						<h1 class="text-base font-medium uppercase tracking-widest text-brand-ten">{title}</h1>
						<ul class="mt-4 space-y-2">
							{#each rows as { text }}
								<li>
									<p class="text-base font-normal text-brand-nine">{text}</p>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
		</section>
	</div>
</footer>
