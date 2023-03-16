<script>
	import ProjectItem from "../elements/ProjectItem.svelte";
    import IntersectionObserver from "../elements/IntersectionObserver.svelte";
</script>

<IntersectionObserver let:intersecting top={0}>
    <div class="fade-in {intersecting ? 'is-visible' : ''}">
        <h1 class="uppercase text-center text-2xl font-8bit">Projects</h1>
        <p class="my-3 font-p8bit text-center text-sm">
            This is a list of the fan projects we made for Bae!<br />
            (This isn't a complete list of fan projects, just ones done by the Bae's Sewer Rats Discord)
        </p>
		<div class="max-w-5xl m-auto z-20 mt-5 h-4/5">
            <div class="grid grid-cols-3 gap-4">
                <ProjectItem
                    title="Bae's 2nd Not-Birthday"
                    description="Message Kudoboard and Cameo from Jeanne's voice actor (Grey Delisle-Griffin) from Bayonetta"
                    url="https://www.kudoboard.com/boards/xpLMwLTZ#view"
                />
                <ProjectItem
                    title="1st Bae-nniversary"
                    description="Bae-nniversary artbook"
                />
                <ProjectItem />
            </div>
        </div>
    </div>
</IntersectionObserver>