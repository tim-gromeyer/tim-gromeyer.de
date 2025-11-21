<script lang="ts">
// biome-ignore lint/style/useImportType: `AlertDialogPrimitive` is used as a value.
import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

let { ref = $bindable(null), ...restProps }: AlertDialogPrimitive.TriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger bind:ref data-slot="alert-dialog-trigger" {...restProps} />
