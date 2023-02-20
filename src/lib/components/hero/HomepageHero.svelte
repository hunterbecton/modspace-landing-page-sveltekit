<script>
	import heroImage from '$lib/assets/woman-couch.jpg';
</script>

<div class="px-4 py-12 md:py-16 md:px-8">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between lg:flex-row">
		<img
			class="h-[13rem] w-[13rem] object-cover md:h-[20rem] md:w-[20rem] lg:h-[32.5rem] lg:w-[32.5rem]"
			alt="Woman jumping on couch"
			src={heroImage}
		/>
		<header class="mt-6 max-w-[26.75rem] md:mt-8 lg:mt-0">
			<p
				class="text-center text-sm font-medium uppercase tracking-widest text-brand-five md:text-base lg:text-left"
			>
				Unmatched quality and value
			</p>
			<h1
				class="mt-2 text-center font-serif text-4xl font-normal text-neutral-ten md:text-5xl lg:text-left"
			>
				Modern furniture delivered fast
			</h1>
			<p
				class="mt-5 text-center text-base font-normal text-neutral-seven md:mt-6 md:text-lg lg:text-left"
			>
				Eu sagittis ipsum aliquet risus, posuere et venenatis eu. Quis aliquam mauris massa senectus
				cum mauris massa non auctor. Dui iaculis sed.
			</p>
			<div class="mt-10 flex flex-col items-center space-x-4 md:mt-12 lg:flex-row">
				<span class="h-1 w-10 rounded-full bg-brand-five" />
				<a
					href="/"
					class="mt-4 text-sm font-medium uppercase tracking-widest text-neutral-ten hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none md:text-base lg:mt-0"
					>EXPLORE OUR PRODUCTS</a
				>
			</div>
		</header>
	</div>
</div>
