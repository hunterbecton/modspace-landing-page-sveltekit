<script>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import Cancel from '../icon/Cancel.svelte';
	import Logo from '../icon/Logo.svelte';
	import Menu from '../icon/Menu.svelte';

	let links = [
		{ name: 'Products', href: '/', current: true },
		{ name: 'Categories', href: '/', current: false },
		{ name: 'Inspiration', href: '/', current: false },
		{ name: 'Thoughts', href: '/', current: false }
	];
</script>

<Disclosure as="nav" let:open class="px-4 py-4 md:px-8 lg:py-10">
	<div class="mx-auto max-w-5xl">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-between">
				<a
					class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-five"
					href="/"><Logo class="h-6 w-auto text-neutral-ten" /></a
				>
				<div class="hidden space-x-12 lg:flex">
					{#each links as { name, href, current }}
						<a
							class="text-base font-normal text-neutral-ten hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none"
							{href}
							aria-current={current ? 'page' : undefined}>{name}</a
						>
					{/each}
				</div>
				<DisclosureButton
					class="rounded-md p-1 text-neutral-ten hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-five lg:hidden"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<Cancel class="block h-8 w-8 text-neutral-ten md:h-10 md:w-10" aria-hidden="true" />
					{:else}
						<Menu
							class="block h-8 w-8 text-neutral-ten group-hover:text-brand-six md:h-10 md:w-10"
							aria-hidden="true"
						/>
					{/if}
				</DisclosureButton>
				<a
					class="hidden text-base font-normal text-neutral-ten hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none lg:inline"
					href="/">Login</a
				>
			</div>
		</div>
	</div>
	<DisclosurePanel class="block border-t-2 border-neutral-two py-6 md:py-8 lg:hidden">
		<ul class="space-y-4 md:space-y-6">
			{#each links as { name, href, current }}
				<li>
					<DisclosureButton
						as="a"
						{href}
						class="text-base font-normal text-neutral-ten hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none"
						aria-current={current ? 'page' : undefined}
					>
						{name}
					</DisclosureButton>
				</li>
			{/each}
			<li>
				<DisclosureButton
					as="a"
					href="/"
					class="text-base font-normal text-neutral-ten hover:text-brand-six focus-visible:text-brand-six focus-visible:underline focus-visible:outline-none"
				>
					Login
				</DisclosureButton>
			</li>
		</ul>
	</DisclosurePanel>
</Disclosure>
