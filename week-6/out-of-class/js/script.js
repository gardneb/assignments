"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

function days_hours(data) {
  let separate = data.split(": ");
  let day = separate[0];
  let times = separate[1];
  if (times === "closed") {
    renderOutput("On " + day + " the library is " + times);
 } else {
    renderOutput("On " + day + " the hours are " + times);
  }
}

function dailyHours(hours) {
  hours.forEach(days_hours);
}

dailyHours(hours);
