const firstTask = document.querySelector("p");
firstTask.style.fontColor = "light blue";

const secondTask = document.querySelector("h1");
secondTask.style.fontSize = "48px";

firstTask.innerHTML =
  "Hipster Ipsum:<br><br>Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

const fourthOrFifthTaskILostCount = document.querySelector("#item-13");
fourthOrFifthTaskILostCount.style.opacity = "0.5";

const nextTask = document.querySelector("#item-3");
nextTask.innerHTML = 'I say, "Hi!"';

const alteredImg = document.querySelector("img");
alteredImg.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
alteredImg.style.height = "300px";

const myImg = document.querySelector("#pepsibird");
myImg.style.height = "300px";

const allForOne = document.querySelectorAll("li");

const lastOne = allForOne[15];
lastOne.setAttribute("class", "item");
lastOne.id = "item-16";
lastOne.innerHTML = "Won't get fooled again.";
