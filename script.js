var currentVersion = "0.1.0" //Version Number!!

var countDownDate = new Date("May 26, 2023 12:00:00").getTime();
var lunchDate = new Date ("May 26, 2023 15:15:00").getTime()
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var currentTheme = 0;

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  var lunchdistance = lunchDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  lunchDays = Math.floor(lunchdistance / (1000 * 60 * 60 * 24));

  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  
  
  if(lunchDays == "46") {
    document.getElementById("lunchtoday").innerHTML = "No School Lunch Today (Or I Fell Off)";
  } else if (lunchDays == "45") {
    document.getElementById("lunchtoday").innerHTML = "Pizza Pockets (Grilled Cheese w/sauce, pepperoni & cheese),Veggies w/Ranch, Fruit";
  } else if (lunchDays == "44") {
    document.getElementById("lunchtoday").innerHTML = "Salisbury Steak, Mashed Potatoes, Green Beans";
  } else if (lunchDays == "43") {
    document.getElementById("lunchtoday").innerHTML = "Italian Meatball Sub, Dessert, Fruit, Veggies";
  } else if (lunchDays == "42") {
    document.getElementById("lunchtoday").innerHTML = "Chick-fil-A Sandwich, Fries, Fruit";
  } else {
    document.getElementById("lunchtoday").innerHTML = "No School Lunch Today (Or I Fell Off)";
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "FREE";
  }
  
  var curDate = new Date();
  
  var dd = curDate.getDate();
  var mm = curDate.getMonth() + 1;
  var yyyy = curDate.getFullYear();
  
  if (mm < 10) {mm = "0" + mm;}
  if (dd < 10) {dd = "0" + dd;}
  
  document.getElementById("currentdate").innerHTML = yyyy + "." + mm + "." + dd;
  document.getElementById("websitename").innerHTML = "Kolto's State of the INCA v" + currentVersion;

  var hr = curDate.getHours();

  if (hr >= 18) {
    document.getElementById("greeting").innerHTML = "Good Evening, Traveler";
  } else if (hr >= 12) {
    document.getElementById("greeting").innerHTML = "Good Afternoon, Traveler";
  } else if (hr >= 6) {
    document.getElementById("greeting").innerHTML = "Good Morning, Traveler";
  } else {
    document.getElementById("greeting").innerHTML = "Go To Sleep, Traveler. Your Health Falters At This Hour.";
  }
}, 1000);

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate-now;
  
  document.getElementById("ms").innerHTML="or " + distance + "ms";
  
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("ms").innerHTML = "";
  }

}, 1);

function cycleTheme(){
  if (currentTheme == 0) {
    document.getElementById("pagestyle").setAttribute("href", "./styles/tangostyle.css");
    document.getElementById("theme").setAttribute("title", "Tango Theme");
    document.getElementById("theme").innerHTML = "<img src='./src/tango.png' alt='changetheme'>";
    currentTheme = 1;
  } else if (currentTheme == 1) {
    document.getElementById("pagestyle").setAttribute("href", "./styles/fernstyle.css");
    document.getElementById("theme").setAttribute("title", "Fern Theme");
    document.getElementById("theme").innerHTML = "<img src='./src/fern.png' alt='changetheme'>";

    currentTheme = 2;
  } else if (currentTheme == 2) {
    document.getElementById("pagestyle").setAttribute("href", "./styles/rosestyle.css");
    document.getElementById("theme").setAttribute("title", "Rose Theme");
    document.getElementById("theme").innerHTML = "<img src='./src/rose.png' alt='changetheme'>";

    currentTheme = 3;
  } else if (currentTheme == 3) {
    document.getElementById("pagestyle").setAttribute("href", "./styles/titaniumstyle.css");
    document.getElementById("theme").setAttribute("title", "Titanium Theme");
    document.getElementById("theme").innerHTML = "<img src='./src/titanium.png' alt='changetheme'>";

    currentTheme = 4;
  } else if (currentTheme == 4) {
    document.getElementById("pagestyle").setAttribute("href", "./styles/waveformstyle.css");
    document.getElementById("theme").setAttribute("title", "Waveform Theme");
    document.getElementById("theme").innerHTML = "<img src='./src/waveform.png' alt='changetheme'>";

    currentTheme = 0;
  }
};
