<script>
	import Heart from '../icon/Heart.svelte';
	import Deliver from '../icon/Deliver.svelte';
	import Verified from '../icon/Verified.svelte';
	import Headset from '../icon/Headset.svelte';

	let features = [
		{
			icon: Heart,
			title: 'Highest quality',
			description: 'Tempor platea congue tellus iaculis amet sem phasellus morbi'
		},
		{
			icon: Deliver,
			title: 'Fast delivery',
			description: 'Eu non amet sed sollicitudin porttitor leo aliquet eu integer'
		},
		{
			icon: Verified,
			title: 'Lifetime warranty',
			description: 'Odio fusce vel, ornare nibh. Vel eu non erat accumsan nullam'
		},
		{
			icon: Headset,
			title: 'Friendly support',
			description: 'Mauris sed lectus lorem nibh morbi in fermentum integer'
		}
	];
</script>

<section class="px-4 py-12 md:py-16 md:px-8">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between lg:flex-row">
		<img
			class="h-[13rem] w-[13rem] object-cover md:h-[20rem] md:w-[20rem] lg:h-[26.75rem] lg:w-[26.75rem]"
			alt="Dining room table"
			src="dining-room.jpg"
		/>
		<div class="mt-12 grid max-w-[32.5rem] grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-0">
			{#each features as { icon, title, description }}
				<div class="max-w-[15.25rem] space-y-2">
					<div class="mx-auto w-fit rounded-full bg-brand-three p-5 text-brand-six lg:mx-0">
						<svelte:component this={icon} class="h-6 w-6" />
					</div>
					<h3 class="text-center font-serif text-xl font-semibold text-neutral-ten lg:text-left">
						{title}
					</h3>
					<p class="text-center text-base font-normal text-neutral-seven lg:text-left">
						{description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
