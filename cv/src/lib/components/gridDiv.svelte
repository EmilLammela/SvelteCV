<script lang="ts">
    export let src;
</script>

<div class="grid grid-cols-[10%_90%] items-center gap-2 w-[70vw] justify-items-center p-3">
  {#if src}
    <div class="bg-gray-200 p-3 rounded-full">
      <img src="{src}" alt="" class="w-5 h-5" />
    </div>
  {/if}

  <div>
    <slot />
  </div>
</div>