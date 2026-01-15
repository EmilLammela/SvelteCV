    <script lang="ts">
        import { pageSelector } from '$lib/stores/pageSelector';
    </script>   
    
    <dir class="bg-gray-800">
        <nav>
            <button on:click={() => pageSelector.set('home')}>Home</button>
            <button on:click={() => pageSelector.set('test')}>Test</button>
        </nav>
    </dir>
    

    <style lang="postcss">
        @reference "tailwindcss";    
    </style>