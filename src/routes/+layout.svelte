<script lang="ts">
import "../app.css";
import { ModeWatcher } from "mode-watcher";
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
</script>

<ModeWatcher />

<div class="relative flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
