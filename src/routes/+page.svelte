<script>
    import "../app.css";
	import Header from "../components/header/Header.svelte";
	import Overlay from "../components/layout/Overlay.svelte";
	import Viewport from "../components/layout/Viewport.svelte";
	import NavBar from "../components/navbar/NavBar.svelte";
	import AboutPanel from "../components/page/AboutPanel.svelte";
	import Carousel from "../components/page/Carousel.svelte";

	let youtubeIds = [
		"HrT8Oon9Kxs",
		"3pzh6AaXi9s",
		"otVcHo52oOU",
		"08J6WAmX100"
	]
</script>

<Overlay />
<Header />
<NavBar />
<div class="bg-yellow-200">
	<Viewport viewportId="fansite-showcase">
		<div class="w-full absolute mx-auto pt-16">
			<h1 class="uppercase text-center text-2xl font-8bit">Showcase</h1>
			<p class="my-3 tracking-tight font-p8bit text-center text-sm">Showcase of Bae's latest songs and covers!</p>
		</div>
		<Carousel {youtubeIds} />
	</Viewport>
</div>
<div class="bg-c-light-blue">
	<Viewport viewportId="fansite-about">
		<div class="w-full absolute mx-auto pt-16">
			<h1 class="uppercase text-center text-2xl font-8bit">About</h1>
			<!-- <p class="my-3 tracking-tight font-p8bit text-center text-sm">Showcase of Bae's latest songs and covers!</p> -->
			<div class="max-w-5xl m-auto z-20 mt-5 h-4/5">
				<AboutPanel />
			</div>
		</div>
	</Viewport>
</div>
