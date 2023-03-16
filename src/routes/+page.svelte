<script>
    import "../app.css";
	import Header from "../components/header/Header.svelte";
	import Overlay from "../components/layout/Overlay.svelte";
	import Viewport from "../components/layout/Viewport.svelte";
	import NavBar from "../components/navbar/NavBar.svelte";
	import AboutPanel from "../components/page/AboutPanel.svelte";
	import ProjectsPanel from "../components/page/ProjectsPanel.svelte";
	import ShowcasePanel from "../components/page/ShowcasePanel.svelte";
</script>

<Overlay />
<Header />
<NavBar />
<div class="bg-yellow-200">
	<Viewport viewportId="fansite-showcase">
		<div class="w-full absolute mx-auto pt-16">
			<ShowcasePanel />
		</div>
	</Viewport>
</div>
<div class="bg-c-light-blue">
	<Viewport viewportId="fansite-about">
		<div class="w-full absolute mx-auto pt-16">
			<AboutPanel />
		</div>
	</Viewport>
</div>
<div class="bg-c-raisin-black text-slate-100">
	<Viewport viewportId="fansite-projects">
		<div class="w-full absolute mx-auto pt-16">
			<ProjectsPanel />
		</div>
	</Viewport>
</div>