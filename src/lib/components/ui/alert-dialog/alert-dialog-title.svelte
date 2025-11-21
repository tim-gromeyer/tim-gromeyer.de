<script lang="ts">
// biome-ignore lint/style/useImportType: `AlertDialogPrimitive` is used as a value.
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import { cn } from "$lib/utils.js";

let {
	ref = $bindable(null),
	class: className,
	...restProps
}: AlertDialogPrimitive.TitleProps = $props();
</script>

<AlertDialogPrimitive.Title
	bind:ref
	data-slot="alert-dialog-title"
	class={cn("text-lg font-semibold", className)}
	{...restProps}
/>
