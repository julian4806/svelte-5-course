<script lang="ts">
  import type { Snippet } from "svelte";
  import { render } from "svelte/server";

  let {
    name,
    children,
    secondChild,
  }: {
    name: string;
    children: Snippet;
    secondChild: Snippet;
  } = $props();
</script>

<div class="header">
  <h1>
    {name ? name + "'s" : "..."} Form
  </h1>

  {@render children()}

  <h3>{@render secondChild('Scott')}</h3>
  <h3>{@render secondChild('Josh')}</h3>
</div>

<style>
  .header {
    font-family: sans-serif;
    font-style: italic;
  }
</style>
