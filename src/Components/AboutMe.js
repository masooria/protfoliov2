import React from "react";

export const about_me_after = `
software_developer {
  name: { first: 'Surya', last: 'Iriventi' },
  experience: { years: 3, months: 11, days: 8 },
  skills: {
    programming_languages: [ 'JavaScript', 'Python', 'Bash' ],
    natural_languages: [ 'English', 'Telugu', 'Hindi' ],
    interests: [
      'Natural Language Processing',
      'Machine Learning',
      'Cloud Infrastructure',
      'Computer Games',
      'Film Making'
    ]
  }
}`;

// export default about_me;

// console.log(Me);
// function calculate_experience() {
//   start_date = new Date("2016-04-26T04:40:23.828Z");
//   var today = new Date();
//   days = Math.floor((today - start_date) / (1000 * 3600 * 24));
//   years = Math.floor(days / 365);
//   rem_days1 = days % 365;
//   months = Math.floor(rem_days1 / 30);
//   rem_days2 = rem_days1 % 30;
//   return {
//     years: years,
//     months: months,
//     days: rem_days2
//   };
// }

export function about_me_before() {
  return (
    <pre id="typewriter">
      <span className="var">function </span>
      <span className="names">software_developer</span>(
      <span className="args">first_name, last_name</span>) {"{"}
      {"\n"}
      {"  "}
      <span className="this">this</span>.name = {"{"}
      {"\n"}
      {"    "}first: <span className="args">first_name</span>,{"\n"}
      {"    "}last: <span className="args">last_name</span>
      {"\n"}
      {"  "}
      {"}"};{"\n"}
      {"}"}
      {"\n"}
      <span className="var">const</span> <span className="name2">Me</span> ={" "}
      <span className="var">new</span>{" "}
      <span className="names">software_developer</span>(
      <span className="args">"Surya", "Iriventi"</span> );{"\n"}
      <span className="name2">Me</span>.experience ={" "}
      <span className="names">calculate_experience</span>({"\n"}
      {"                      "}(
      <span className="args">start_date = "2016-04-26T04:40:23.828Z"</span>
      ));
      {"\n"}
      {"\n"}
      <span className="name2">Me</span>.skills = {"{"}
      {"\n"}
      {"  "}programming_languages:{" "}
      <span className="names">fetch_my_prog_langs</span>(),
      {"\n"}
      {"  "}natural_languages: <span className="names">fetch_my_nat_langs</span>
      (),{"\n"}
      {"  "}interests: <span className="names">fetch_my_interest</span>(){"\n"}
      {"}"}
      {"\n"}
      <span className="var">console.log(</span>
      <span className="name2">Me</span>
      <span className="var">)</span>{" "}
      <span className="comments">
        // Run this code by clicking button below
      </span>
    </pre>
  );
}
