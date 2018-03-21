// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";
let my_name = "Bonnie";
let your_name = "Kyle";

if (my_name === "Ben") {
  renderOutput("That's Ben!");
} else if (my_name === "Bonnie") {
  renderOutput("Yep, that's me!");
}
else {
  renderOutput("I must be someone else");
}

function helloWorld() {
  renderOutput("Hello World!");
}

function helloName(name) {
  renderOutput("Hello " + name);
}

helloName("Bonnie");

function todaysHours(days_hours) {
  renderOutput(days_hours);
}

hours.forEach(todaysHours);