<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import Header from '$lib/components/header.svelte';
  	import Content from '$lib/components/content.svelte';
	
	

	let { children } = $props();
	import "../app.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<Content />

{@render children()}
