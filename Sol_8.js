
function daysBetweenDates(date1, date2) {
  const d1 = new Date(`${date1}T00:00:00Z`);
  const d2 = new Date(`${date2}T00:00:00Z`);

  const difference = Math.abs(d1.getTime() - d2.getTime());

  return difference / (1000 * 60 * 60 * 24);
}