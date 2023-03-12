<script>
    export let viewportId = 'viewport_id';
</script>

<div id={viewportId} class="w-full h-screen max-h-screen min-h-[700px] overflow-y-auto z-0">
    <slot></slot>
</div>