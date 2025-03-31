<script lang="ts">
  import Header from "./Header.svelte";

  let formState = $state({
    answers: {},
    step: 0,
    error: "",
  });

  $inspect(formState.step);

  const questions = [
    {
      question: "What is your name?",
      id: "name",
      type: "text",
    },
    {
      question: "What is your birthday?",
      id: "birthday",
      type: "date",
    },
    {
      question: "What is your favorite color?",
      id: "color",
      type: "color",
    },
  ];

  function nextStep(id: string) {
    if (formState.answers[id]) {
      formState.step++;
      formState.error = "";
    } else {
      formState.error = `Please fill out the form input`;
    }
  }

  // onMount
  $effect(() => {
    console.log("on mounting");

    return () => {
      // when unmounted / destroyed
      // before effect reryns
      console.log("on unmounted");
    };
  });

  $effect(() => {
    // This will re-run, when formState.step has changed
    console.log("formState", formState.step);

    // don't create state beased of other state, in effect
    // use $derived()
    return () => {
      // brefore effect re-runs
      console.log("before formState reruns", formState.step);
    };
  });
</script>

<main>
  <Header name={formState.answers.name} />

  {#if formState.step >= questions.length}
    <p>Form submitted, thank you!</p>
  {:else}
    <p>Step: {formState.step + 1}</p>
  {/if}

  <!-- {#each questions as question (question.id)} -->
  {#each questions as question, index (question.id)}
    {#if formState.step === index}
      {@render formStep(question)}
    {/if}
  {/each}
  <!-- {#each questions as { id, question, type } (id)}
    {@render formStep({ question, id, type })}
  {/each} -->

  {#if formState.error}
    <p class="error">
      {formState.error}
    </p>
  {/if}
</main>

<br /><br />
<hr />
<small>{JSON.stringify(formState)}</small>

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
      <input {type} {id} bind:value={formState.answers[id]} />
    </div>
    <button onclick={() => nextStep(id)}> Next </button>
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
