<script lang="ts">
    import Youtube from "svelte-youtube-embed";
    import IntersectionObserver from "../elements/IntersectionObserver.svelte";
</script>

<IntersectionObserver let:intersecting top={0}>
    <div class="fade-in {intersecting ? 'is-visible' : ''}">
        <h1 class="uppercase text-center text-2xl font-8bit">About</h1>
        <div class="max-w-5xl m-auto z-20 mt-5 h-4/5">
            <div class="flex flex-row font-p8bit">
                <div class="basis-1/3 p-5 text-justify">
                    This is a fansite for the VTuber Hakos Baelz. Vestibulum ac metus tincidunt, rutrum nunc sed, elementum felis. Vivamus ut pulvinar libero. Sed venenatis lorem a urna consectetur dictum. Aenean iaculis lobortis libero sed eleifend. Nulla facilisi. Donec sapien velit, ornare ultricies iaculis in, accumsan vel lectus. Nam eleifend nec eros quis ullamcorper. Proin auctor porta elementum. 
                </div>
                <div class="basis-2/3 flex flex-col p-5">
                    <!-- <div class="basis-1 bg-blue-400 pb-1">
                        hi
                    </div>
                    <div class="basis-1 bg-yellow-400 pt-1">
                        bruh
                    </div> -->
                    <!-- Latest video? -->
                    <Youtube id="lmmUH01W9_w" />
                </div>
            </div>
        </div>
    </div>
</IntersectionObserver>