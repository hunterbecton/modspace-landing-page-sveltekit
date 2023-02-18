<script>
	import CategorySection from '../lib/components/category/CategorySection.svelte';
	import FeatureSection from '../lib/components/feature/FeatureSection.svelte';
	import Footer from '../lib/components/footer/Footer.svelte';
	import HomepageHero from '../lib/components/hero/HomepageHero.svelte';
	import Nav from '../lib/components/nav/Nav.svelte';
	import TestimonialSection from '../lib/components/testimonial/TestimonialSection.svelte';
</script>

<svelte:head>
	<title>ModSpace | Modern furniture delivered fast</title>
	<meta name="title" content="ModSpace | Modern furniture delivered fast" />
	<meta
		name="description"
		content="Looking for modern furniture to elevate your space? ModSpace has got you covered! Shop our extensive online collection of sleek and stylish furniture pieces."
	/>
	<meta name="keywords" content="mid-century furniture, modern furniture, furniture store" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Nav />
<HomepageHero />
<CategorySection />
<FeatureSection />
<TestimonialSection />
<Footer />
