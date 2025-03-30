<script lang="ts">
  import Header from "./Header.svelte";

  let formState = $state({
    name: "",
    birthday: "",
    step: 0,
    error: "",
  });
</script>

<main>
  <Header name={formState.name}>
    <p>Hello</p>
  </Header>

  <p>Step: {formState.step + 1}</p>

  {@render formStep({
    question: "What's your name",
    id: "name",
    type: "text",
  })}

  {#if formState.error}
    <p class="error">
      {formState.error}
    </p>
  {/if}
</main>

{#snippet formStep({
  question,
  id,
  type,
}: {
  question: string;
  id: string;
  type: string;
})}
  <article>
    <div>
      <label for={id}>{question}</label>
      <input {type} {id} bind:value={formState[id]} />
    </div>
  </article>
{/snippet}

<style>
  .error {
    color: #ff0000;
  }
  button {
    cursor: pointer;
    user-select: none;
  }
</style>
