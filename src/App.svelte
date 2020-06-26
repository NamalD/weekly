<script>
  // CSS
  import "bulma/css/bulma.css";

  // Components
  import Title from "./Title.svelte";
  import Week from "./Week.svelte";

  const state = {
    trackerName: "Walkies 🐶",
    date: "2020-06-26"
  };
</script>

<style>

</style>

<Title trackerName={state.trackerName} />
<Week date={state.date} />
