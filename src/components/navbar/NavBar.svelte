<script>
	import NavBarButton from "./NavBarButton.svelte";
</script>
<style>
</style>

<nav class="py-4 text-lg uppercase flex flex-row top-20 h-36 w-full items-center absolute font-8bit text-slate-100">
    <!-- <div class="sticky basis-1/3 bg-red-600 border-y-4 border-yellow-300 ring-2 ring-black my-4 h-fit z-40"> -->
    <div class="sticky basis-1/3 bg-red-700 border-y-4 border-yellow-300 my-4 h-fit z-40">
        <ul class="flex space-x-3">
            <NavBarButton label={"Showcase"} viewportId={"fansite-showcase"} />
            <NavBarButton label={"About"} viewportId={"fansite-about"} />
            <NavBarButton label={"Projects"} viewportId={"fansite-projects"} />
        </ul>
    </div>
    <!-- <div class="sticky basis-1/3 h-full bg-red-600 border-4 border-yellow-300 ring-2 ring-black rounded-lg z-50 pixel-corners"> -->
    <div class="sticky basis-1/3 h-full bg-red-900 rounded-lg z-50 pixel-corners">
        <h1 class="text-center">insert the logo here</h1>
    </div>
    <!-- <div class="sticky basis-1/3 bg-red-600 border-y-4 border-yellow-300 ring-2 ring-black my-4 h-fit z-40"> -->
    <div class="sticky basis-1/3 bg-red-700 border-y-4 border-yellow-300 my-4 h-fit z-40">
        <ul class="flex space-x-3 justify-end">
            <NavBarButton label={"YTC"} />
            <NavBarButton label={"TWT"} />
            <NavBarButton label={"SPT"} />
            <NavBarButton label={"MSX"} />
        </ul>
    </div>
</nav>