<script>
    import IntersectionObserver from "../elements/IntersectionObserver.svelte";
    import Carousel from "./Carousel.svelte";

	let youtubeIds = [
		"HrT8Oon9Kxs",
		"3pzh6AaXi9s",
		"otVcHo52oOU",
		"08J6WAmX100"
	]
</script>

<IntersectionObserver let:intersecting top={0}>
    <div class="fade-in {intersecting ? 'is-visible' : ''}">
        <h1 class="uppercase text-center text-2xl font-8bit">Showcase</h1>
        <p class="my-3 tracking-tight font-p8bit text-center text-sm">Showcase of Bae's latest songs and covers!</p>
        <Carousel {youtubeIds} />
    </div>
</IntersectionObserver>