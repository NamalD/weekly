<script>
  import moment from "moment";
  import {
    formatSameMonth,
    formatDifferentMonths
  } from "./helpers/dateFormat.js";

  export let date;

  let dateMoment = moment(date);
  let startDate = dateMoment.clone().day("Monday");
  let endDate = dateMoment.clone().day("Friday");

  let weekFormat =
    startDate.month() == endDate.month()
      ? formatSameMonth(startDate, endDate)
      : formatDifferentMonths(startDate, endDate);
</script>

<h1 class="title">{weekFormat}</h1>
