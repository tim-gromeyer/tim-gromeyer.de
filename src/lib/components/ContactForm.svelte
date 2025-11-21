<script lang="ts">
import { CircleCheck, CircleX, Send } from "lucide-svelte";
import { enhance } from "$app/forms";
import * as AlertDialog from "$lib/components/ui/alert-dialog";
import { Button } from "$lib/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";
import { Textarea } from "$lib/components/ui/textarea";
import type { ActionResult } from "@sveltejs/kit";

let form: HTMLFormElement;
let submitting = false;
let dialogOpen = false;
let dialogTitle = "";
let dialogDescription = "";
let result: ActionResult | undefined;
</script>

<section id="contact" class="w-full bg-muted/30 py-24 md:py-32">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-[600px]">
			<div class="relative rounded-3xl border bg-muted/50 p-8 md:p-12">
				<div
					class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
				></div>
				<Card class="bg-background/60 backdrop-blur-sm">
					<CardHeader>
						<CardTitle>Kontakt aufnehmen</CardTitle>
						<CardDescription>
							Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Schreiben Sie mir eine
							Nachricht.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							bind:this={form}
							method="POST"
							action="?/contact"
							class="grid gap-4"
							use:enhance={() => {
								submitting = true;
								return async ({ result: r }) => {
									result = r;
									if (result?.type === "success" && result.data?.success) {
										dialogTitle = "Nachricht gesendet!";
										dialogDescription = "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden.";
									} else if (result?.type === 'failure') {
										dialogTitle = "Fehler";
										dialogDescription = result.data?.error || "Leider konnte die Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut.";
									} else {
										dialogTitle = "Unerwarteter Fehler";
										dialogDescription = "Ein unerwarteter Fehler ist aufgetreten.";
									}

									dialogOpen = true;
									submitting = false;
								};
							}}
						>
							<div class="grid gap-2">
								<Label for="name">Name</Label>
								<Input id="name" name="name" placeholder="Ihr Name" required disabled={submitting} />
							</div>
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="name@example.com"
									required
									disabled={submitting}
								/>
							</div>
							<div class="grid gap-2">
								<Label for="message">Nachricht</Label>
								<Textarea
									id="message"
									name="message"
									placeholder="Ihre Nachricht..."
									rows={5}
									required
									disabled={submitting}
								/>
							</div>
							<Button type="submit" class="w-full" disabled={submitting}>
								<Send class="mr-2 h-4 w-4" />
								{submitting ? 'Wird gesendet...' : 'Nachricht senden'}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

<AlertDialog.Root
	bind:open={dialogOpen}
	onOpenChange={(open) => {
		if (!open && result?.type === 'success' && result.data?.success) {
			form.reset();
		}
	}}
>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="flex items-center">
				{#if result?.type === 'success' && result.data?.success}
					<CircleCheck class="mr-2 h-6 w-6 text-green-500" />
				{:else}
					<CircleX class="mr-2 h-6 w-6 text-red-500" />
				{/if}
				{dialogTitle}
			</AlertDialog.Title>
			<AlertDialog.Description>
				{dialogDescription}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>OK</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
