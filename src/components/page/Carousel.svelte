<script lang="ts">
    // import Youtube from "svelte-youtube-embed";
	import YoutubeIFrame from "../page/YoutubeIFrame.svelte";
    import Youtube from "svelte-youtube-embed";
	import { prevent_default } from "svelte/internal";
	import { scrollIntoView } from "./scrollIntoView";

    export let youtubeIds: string[];
    export let name = 'carousel';
    export const getItemId = (index: number) => `carousel-item-${index}`;
</script>

<div class="relative max-w-7xl mx-auto mt-6 z-20">
    <!-- <Youtube id="Ank3IdQHOuE" /> -->
    <ul class="flex overflow-x-hidden gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]">
        {#each youtubeIds as yId, index}
        <!-- <li id={getItemId(index)} class="max-w-3xl shrink-0 snap-center z-20"> -->
        <li id={getItemId(index)} class="w-8/12 shrink-0 snap-center z-20">
            <!-- <YoutubeIFrame id={yId} title="I hate Javascript" /> -->
            <Youtube id={yId} />
        </li>
        {/each}
    </ul>

    <nav class="m-auto flex items-center justify-center">
        {#each youtubeIds as yId, index}
        <span class="shrink-0 mx-2 text-lg text-center">
            <a href={`#${getItemId(index)}`} on:click|preventDefault={scrollIntoView}>
                o
            </a>
        </span>
        {/each}
    </nav>
</div>