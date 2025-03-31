<script lang="ts">
  import { createState, ScottState } from "./state.svelte";
  import type { Snippet } from "svelte";
  import { render } from "svelte/server";

  let { name }: { name: string } = $props();

  const myState = createState();
  const myState2 = new ScottState();
</script>

<div class="header">
  <h1>
    {name ? name + "'s" : "..."} Form
  </h1>

  <div>
    <button onclick={myState.up}>{myState.value}</button>
    <input bind:value={myState.value} />
    <small>&nbsp;numbers only</small>
  </div>
  <hr />
  <div>
    <button onclick={() => myState2.up()}>{myState2.value}</button>
  </div>
</div>

<style>
  .header {
    font-family: sans-serif;
    font-style: italic;
  }
</style>
