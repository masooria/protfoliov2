function software_developer(first_name, last_name) {
  this.name = {
    first: first_name,
    last: last_name
  };
}
function fetch_my_prog_langs() {
  return ["JavaScript", "Python", "Bash"];
}

function fetch_my_nat_langs() {
  return ["English", "Telugu", "Hindi"];
}
function fetch_my_interest() {
  return [
    "Natural Language Processing",
    "Machine Learning",
    "Cloud Infrastructure",
    "Computer Games",
    "Film Making"
  ];
}
const Me = new software_developer("Surya", "Iriventi");

Me.experience = calculate_experience((start_date = "2016-04-26T04:40:23.828Z"));

Me.skills = {
  programming_languages: fetch_my_prog_langs(),
  natural_languages: fetch_my_nat_langs(),
  interests: fetch_my_interest()
};

console.log(Me);
function calculate_experience() {
  start_date = new Date("2016-04-26T04:40:23.828Z");
  var today = new Date();
  days = Math.floor((today - start_date) / (1000 * 3600 * 24));
  years = Math.floor(days / 365);
  rem_days1 = days % 365;
  months = Math.floor(rem_days1 / 30);
  rem_days2 = rem_days1 % 30;
  return {
    years: years,
    months: months,
    days: rem_days2
  };
}
