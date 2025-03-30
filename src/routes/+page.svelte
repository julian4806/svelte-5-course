<script lang="ts">
  import Header from "./Header.svelte";
  let name = $state("Scott");
  let status: "OPEN" | "CLOSED" = $state("OPEN");
  let full_name = $derived(`${name} Tolinski`);
  /*
  function toggle() {
    status = status === "OPEN" ? "CLOSED" : "OPEN";
  }
  */
  function onclick() {
    status = status === "OPEN" ? "CLOSED" : "OPEN";
  }
</script>

<Header {name} fake_name="Wess" />

<h2>{full_name}</h2>

<input type="text" bind:value={name} />

<p>
  The store is now {status}
</p>
<button {onclick}>Toggle Status</button>
<hr />
<button
  onclick={() => {
    status = status === "OPEN" ? "CLOSED" : "OPEN";
  }}>Toggle Status inline-function</button
>

<style>
  button {
    cursor: pointer;
    user-select: none;
  }
</style>
