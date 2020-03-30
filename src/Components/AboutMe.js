import React from "react";

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

export function about_me_after() {
  return (
    <pre id="code_space">
      <span className="var">software_developer</span> {"{"}
      {"\n"}
      {"  "}
      <span className="names">name</span>: {"{"} first:{" "}
      <span className="args">'Surya'</span>, last:{" "}
      <span className="args">'Iriventi'</span> {"}"},{"\n"}
      {"  "}
      <span className="names">experience</span>: {"{"} years:
      <span className="args"> 3</span>, months: <span className="args">11</span>
      , days: <span className="args">8</span>
      {"}"},{"\n"}
      {"  "}
      <span className="names">skills</span>: {"{"}
      {"\n"}
      {"    "}programming_languages: [{" "}
      <span className="args">'JavaScript', 'Python', 'Bash'</span> ],
      {"\n"}
      {"    "}natural_languages: [{" "}
      <span className="args">'English', 'Telugu', 'Hindi'</span> ],{"\n"}
      {"    "}interests: [{"\n"}
      <span className="args">
        {"      "}'Natural Language Processing',{"\n"}
        {"      "}'Machine Learning',{"\n"}
        {"      "}'Cloud Infrastructure',{"\n"}
        {"      "}'Computer Games',{"\n"}
        {"      "}'Film Making'{"\n"}
      </span>
      {"    "}]{"\n"}
      {"  "}
      {"}"}
      {"\n"}
      {"}"}
    </pre>
  );
}
