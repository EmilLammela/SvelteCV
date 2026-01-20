<script lang="ts">

  const lorem: string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"





  import headshot from "$lib/assets/headshot.png";

  import person from "$lib/assets/person.svg";
  import education from "$lib/assets/education.svg";
  import experience from "$lib/assets/experience.svg";
  import project from "$lib/assets/project.svg";
  import certificate from "$lib/assets/certificate.svg";
  import language from "$lib/assets/language.svg";
  import wrench from "$lib/assets/wrench.svg";
  import github from "$lib/assets/github.svg";
  import linkedin from "$lib/assets/linkedin.svg";

  import GridDiv from "./gridDiv.svelte";

  let scroll: number = 0;

</script>

<svelte:window
  bind:scrollY={scroll}
/>

<h1 class="fixed text-amber-800">{scroll}</h1>

<div class="bg-gray-800 justify-center justify-self-center text-white p-8 rounded-[4rem] w-[75vw]">
    <div class=" bg-gray-700 rounded-[3rem] p-4 justify-items-center">
        <div class="w-[30%]">
            <img src={headshot} alt="headshot" class="object-scale-down w-16 justify-self-center"/>
        </div>
        <div class="grid grid-cols-2 gap-[1vw] justify-items-center">
            <div class="w-[30%]">
                <p class="justify-self-center">
                    Etunimi Sukunimi <br /> Ohjelmistokehittäjä
                </p>
            </div>
            <div class="w-[30%]">
                <p class="justify-self-center">
                    +358 12 123 1234 <br /> example@domain.com
                </p>
            </div>
        </div>
    </div>


    <div class="justify-items-center">
        <GridDiv scroll={scroll} src={person} title="Esittely">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={education} title="Koulutus">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={experience} title="Työkokemus">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={project} title="Projekteja">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={certificate} title="Sertifikaatteja">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={language} title="Kielitaito">{lorem}</GridDiv>

        <GridDiv scroll={scroll} src={wrench} title="Teknologiat">{lorem}</GridDiv>

    </div>



    <div class="flex bg-gray-700 rounded-[3rem] p-4 justify-items-center align-center gap-4">
        <div class="bg-gray-200 hover:bg-gray-400 hover:scale-110 p-3 rounded-full">
            <a href="https://github.com">
                <img src={github} alt="" class="w-10 h-10" />
            </a>
        </div>

        <div class="bg-gray-200 hover:bg-gray-400 hover:scale-110 p-3 rounded-full">
            <a href="https://linkedin.com">
                <img src={linkedin} alt="" class="w-10 h-10" />
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
</style>

