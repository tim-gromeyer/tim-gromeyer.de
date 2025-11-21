<script lang="ts">
// biome-ignore lint/style/useImportType: Svelte-check needs this to be a value import
import { Dialog as SheetPrimitive } from "bits-ui";

let { ref = $bindable(null), ...restProps }: SheetPrimitive.TriggerProps = $props();
</script>

<SheetPrimitive.Trigger bind:ref data-slot="sheet-trigger" {...restProps} />
