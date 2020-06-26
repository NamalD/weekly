<script>
  import moment from "moment";
  import {
    formatSameMonth,
    formatDifferentMonths
  } from "../helpers/dateFormat.js";

  export let date;

  const dateMoment = moment(date);
  const startDate = dateMoment.clone().day("Monday");
  const endDate = dateMoment.clone().day("Friday");

  const weekFormat =
    startDate.month() == endDate.month()
      ? formatSameMonth(startDate, endDate)
      : formatDifferentMonths(startDate, endDate);
</script>

<p class="title">{weekFormat}</p>
