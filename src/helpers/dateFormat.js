export const formatSameMonth = (startDate, endDate) =>
  `${startDate.format("Do")} - ${endDate.format("Do MMMM")}`;

export const formatDifferentMonths = (startDate, endDate) =>
  `${startDate.format("Do MMMM")} - ${endDate.format("Do MMMM")}`;