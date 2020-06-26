<script>
  import "bulma/css/bulma.css";

  import Title from "./Components/Title.svelte";
  import Week from "./Components/Week.svelte";
  import Tracker from "./Components/Tracker.svelte";

  const state = {
    trackerName: "Walkies 🐶",
    date: "2020-06-26",
    trackerEntries: [
      { date: "2020-06-0", day: "Monday", value: "N" },
      { date: "2020-06-1", day: "Tuesday", value: "U" },
      { date: "2020-06-2", day: "Wednesday", value: "N" },
      { date: "2020-06-3", day: "Thursday", value: null },
      { date: "2020-06-4", day: "Friday", value: null },
      { date: "2020-06-5", day: "Saturday", value: "U" },
      { date: "2020-06-6", day: "Sunday", value: null }
    ],
    entryOptions: ["N", "U", null]
  };
</script>

<div>
  <Title trackerName={state.trackerName} />
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <Week date={state.date} />
          <div class="columns">
            <Tracker
              trackerEntries={state.trackerEntries}
              entryOptions={state.entryOptions} />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
