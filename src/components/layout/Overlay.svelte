<script>
    import overlaygif from '$lib/overlay.gif';
	import { fadeOutOverlay } from '../page/scrollIntoView';
</script>

<div id="fansite-overlay"
    class="fixed block w-full h-full bg-zinc-800 opacity-90 transition-height transition-opacity ease-out duration-700 z-[100]"
    on:click|preventDefault={fadeOutOverlay}>
    <img class="m-auto h-full object-cover z-[101]" src={overlaygif}>
</div>