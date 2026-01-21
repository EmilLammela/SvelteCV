<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let src: string;
    export let scroll: number;
    export let title: string;

    let box: any;
    let scrollTrigger: number;

    onMount(() => {
      scrollTrigger = box.getBoundingClientRect().y - (window.outerHeight * 0.75);
    });
    
    let color: string; 
    let img_transition: any;
    let animate: boolean = false;



    $: if (scrollTrigger !== undefined) { // REAKTIIVINEN IFFITTELY
      color = scroll > scrollTrigger ? "gray-700" : "gray-600";

    }



</script>

<div bind:this={box} class="rounded-2xl mt-2 w-[70vw] justify-items-start p-4 h-[80vh] bg-{color} ">
  
  <div class="grid grid-cols-[15%_85%] gap-8 ">
  {#if scroll > scrollTrigger}
    <div class=" bg-gray-200 p-3 rounded-full  w-11 h-11 animate-gridImg">
      <img src="{src}" alt="" class="w-5 h-5" />
    </div>
  

    <div id="title-bg" class="flex rounded-2xl h-11 items-center animate-gridText">
      <p class="text-left p-4">
        {title}
      </p>
    </div>

  {:else}
    <div class="w-11 h-11"></div>
  {/if}



  </div>
  <div class ="ml-2">
    <slot />
  </div>

</div>

<style lang="postcss">
  @reference "tailwindcss";

  #title-bg{
    background-image: linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,0.25), rgba(255,0,0,0));
    background-size: 10000%;
  }

</style>
