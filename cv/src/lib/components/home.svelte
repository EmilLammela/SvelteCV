<script lang="ts">
    import headshot from "$lib/assets/headshot.png"

    import person from "$lib/assets/person.svg"
    import education from "$lib/assets/education.svg"
    import experience from "$lib/assets/experience.svg"
    import project from "$lib/assets/project.svg"
    import certificate from "$lib/assets/certificate.svg"
    import language from "$lib/assets/language.svg"
    import wrench from "$lib/assets/wrench.svg"

    import GridDiv from "./gridDiv.svelte"
</script>

<div class="bg-gray-800 justify-center justify-self-center  text-white p-8 rounded-[4rem] w-[75vw]">
    <div>
        <div class="grid grid-cols-3 gap-[1vw] bg-gray-700 rounded-[3rem] p-4 justify-items-center">
            <div class="w-[30%]">
                <img src="{headshot}" alt="headshot" class="object-scale-down w-16 justify-self-center ">
            </div>
            <div class="w-[30%]">
                <h1 class="justify-self-center">Title</h1>
            </div>
            <div class="w-[30%] ">
                <h1 class="justify-self-center">Contact</h1>
            </div>
        </div>
        <div class="h-[80vh] justify-items-center">

            <GridDiv src={person}>
                esittely
            </GridDiv>

            <GridDiv src={education}>
                koulutus
            </GridDiv>

            <GridDiv src={experience}>
                työkokemus
            </GridDiv>

            <GridDiv src={project}>
                projekteja
            </GridDiv>

            <GridDiv src={certificate}>
                sertifikaatteja
            </GridDiv>

            <GridDiv src={language}>
                kielet
            </GridDiv>

            <GridDiv src={wrench}>
                teknologiat
            </GridDiv>

            <div>
                <p>Hyödyllisiä linkkejä</p>
            </div>
                    

        </div>
        <div>

        </div>
    </div>
</div>



<style lang="postcss">
    @reference "tailwindcss";
</style>