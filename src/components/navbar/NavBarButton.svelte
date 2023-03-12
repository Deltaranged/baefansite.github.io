<script>
import { scrollIntoView } from "../page/scrollIntoView";

    export let label = 'Button';
    export let viewportId = 'viewport_id';
    export let href = 'localhost:5173';
    export let is_active = false;
</script>

<li>
    <a href={`#${viewportId}`} class="block px-5 py-3 rounded-md ${is_active ? 'bg-sky-500 text-white' : 'bg-slate-50'}" on:click|preventDefault={scrollIntoView}>
    {label}
    </a>
</li>