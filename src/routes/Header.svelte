<script lang="ts">
  import type { Snippet } from "svelte";
  import { render } from "svelte/server";

  let { name }: { name: string } = $props();
</script>

<div class="header">
  <h1>
    {name ? name + "'s" : "..."} Form
  </h1>
</div>

<style>
  .header {
    font-family: sans-serif;
    font-style: italic;
  }
</style>
