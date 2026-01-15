

<script lang="ts">
  import { pageSelector } from '$lib/stores/pageSelector';

  import Home from './home.svelte';
  import Test from './test.svelte';
</script>

<div class="background h-full">
    <div class="h-10 bg-linear-to-t from-transparent to-gray-800 "></div>

    {#if $pageSelector === 'home'}
        <Home />
    {:else if $pageSelector === 'test'}
        <Test />
    {/if}

</div>


<style lang="postcss">
    @reference "tailwindcss";

    
    .background{
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(../assets/background.jpg);
    }
    

</style>