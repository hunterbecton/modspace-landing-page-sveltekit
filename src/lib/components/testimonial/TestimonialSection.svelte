<script>
	import testimonialOneImage from '$lib/assets/testimonial-1.jpg';
	import testimonialTwoImage from '$lib/assets/testimonial-2.jpg';
	import testimonialThreeImage from '$lib/assets/testimonial-3.jpg';

	let testimonials = [
		{
			image: testimonialOneImage,
			name: 'Tahlia Vienna',
			quote:
				'Viverra aenean nibh eu facilisis odio donec ut. Quis vitae aliquet placerat id nunc integer tincidunt. Egestas cursus eget faucibus.'
		},
		{
			image: testimonialTwoImage,
			name: 'Noel Bret',
			quote:
				'Integer sit ultricies integer diam condimentum enim purus. Tellus non dictum sem suspendisse aenean. Volutpat lectus hendrerit aliquet.'
		},
		{
			image: testimonialThreeImage,
			name: 'Sara Tiffany',
			quote:
				'Iaculis purus tincidunt volutpat ipsum egestas elementum fermentum quis. Ultrices vitae metus, vestibulum tempor. Id quam eget.'
		}
	];
</script>

<section class="py-16 px-8">
	<div class="mx-auto max-w-5xl">
		<header>
			<h2 class="text-center font-serif text-3xl font-normal text-neutral-ten md:text-4xl">
				What our customers say
			</h2>
			<p class="mt-3 text-center text-base font-normal text-neutral-seven md:mt-4 md:text-lg">
				Eleifend varius dolor sed blandit velit
			</p>
		</header>
		<div
			class="mx-auto mt-12 grid w-fit grid-cols-1 gap-x-8 gap-y-12 md:mt-16 lg:mt-20 lg:grid-cols-3"
		>
			{#each testimonials as { image, name, quote }}
				<div class="flex max-w-[21rem] gap-4">
					<img class="h-12 w-12 rounded-full" src={image} alt={name} />
					<div class="space-y-2">
						<p class="text-lg font-semibold text-neutral-ten">{name}</p>
						<p class="text-base font-normal text-neutral-seven">{quote}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
