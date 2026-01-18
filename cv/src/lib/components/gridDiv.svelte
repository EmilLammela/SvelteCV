<script lang="ts">
    import { onMount } from "svelte";

    export let src: string;
    //export let scroll: number;

    let box: any;
    let scrollTrigger: number;
    onMount(() => {
      scrollTrigger = box.getBoundingClientRect().y;
    }); 

</script>



<div bind:this={box} class="grid grid-cols-[15%_85%] gap-2 w-[70vw] justify-items-start p-4 h-[38vh] bg-gray-600 ">
  {#if src}
    <div class="bg-gray-200 p-3 rounded-full  w-11 h-11">
      <img src="{src}" alt="" class="w-5 h-5" />
    </div>
  {/if}

  <div class ="ml-2">
    <slot />
  </div>
  <p>{scrollTrigger}</p>
 

</div>