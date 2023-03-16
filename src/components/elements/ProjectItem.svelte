<script>
    export let title = "More coming soon!";
    export let description = "...";
    export let url = "#";
</script>

<a href="{url}"
   target="{url == '#' ? '' : '_blank'}"
   rel="{url == '#' ? '' : 'noreferrer noopener'}">
    <div class="pixel-corners border-t-8 border-slate-100 hover:border-black h-40 bg-c-ucla-blue text-center px-3">
		<h1 class="uppercase mt-4 text-lg font-8bit">{title}</h1>
        <p class="mt-2 text-xs font-p8bit">{description}</p>
    </div>
</a>