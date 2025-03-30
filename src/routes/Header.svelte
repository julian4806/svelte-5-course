<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    name,
    children,
  }: {
    name: string;
    children: Snippet;
  } = $props();
</script>

<div class="header">
  <h1>
    {name ? name + "'s" : "..."} Form
  </h1>

  {@render children()}
</div>

<style>
  .header {
    font-family: sans-serif;
    font-style: italic;
  }
</style>
