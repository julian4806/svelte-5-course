<script lang="ts">
  import { createState } from "./state.svelte";
  import type { Snippet } from "svelte";
  import { render } from "svelte/server";

  let { name }: { name: string } = $props();

  const myState = createState();
</script>

<div class="header">
  <h1>
    {name ? name + "'s" : "..."} Form
  </h1>

  <button onclick={myState.up}>{myState.value}</button>
  <input bind:value={myState.value} />
</div>

<style>
  .header {
    font-family: sans-serif;
    font-style: italic;
  }
</style>
