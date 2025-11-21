<script lang="ts">
// biome-ignore lint/style/useImportType: Svelte-check needs this to be a value import
import { Dialog as SheetPrimitive } from "bits-ui";

let { ref = $bindable(null), ...restProps }: SheetPrimitive.CloseProps = $props();
</script>

<SheetPrimitive.Close bind:ref data-slot="sheet-close" {...restProps} />
