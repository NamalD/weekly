<script>
  import moment from "moment";
  import TrackerEntry from "./TrackerEntry";

  export let trackerEntries;
  export let entryOptions;

  const setValue = (entry, newValue) => {
    entry.value = newValue;
    trackerEntries = [...trackerEntries];
  };
</script>

{#each trackerEntries as trackerEntry}
  <div class="column has-text-centered">
    <p class="title is-5">{trackerEntry.day}</p>
    <TrackerEntry
      value={trackerEntry.value}
      {entryOptions}
      setValue={newValue => setValue(trackerEntry, newValue)} />
  </div>
{/each}
