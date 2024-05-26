enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
    return true;
  } else {
    return false;
  }
};

console.log(isWeekend(DayOfWeek.Friday)); // false
console.log(isWeekend(DayOfWeek.Sunday)); // true
