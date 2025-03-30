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
  <p>Step: {formState.step + 1}</p>

  {#if formState.error}
    <p class="error">
      {formState.error}
    </p>
  {/if}

  {#if formState.step === 0}
    <div>
      <label for="name">Your Name</label>
      <input type="text" id="name" bind:value={formState.name} />
    </div>
    <button
      onclick={() => {
        if (formState.name !== "") {
          formState.step++;
          formState.error = "";
        } else {
          formState.error = "Your name is empty. Please write your name.";
        }
      }}>Next</button
    >
  {:else if formState.step === 1}
    <div>
      <label for="birthday">Your birthday</label>
      <input type="date" id="birthday" bind:value={formState.birthday} />
    </div>
    <button
      onclick={() => {
        if (formState.birthday !== "") {
          formState.step++;
          formState.error = "";
        } else {
          formState.error =
            "Your birthday is empty. Please write your birthday.";
        }
      }}>Next</button
    >
  {/if}
</main>

<style>
  .error {
    color: #ff0000;
  }
  button {
    cursor: pointer;
    user-select: none;
  }
</style>
