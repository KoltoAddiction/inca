var currentVersion = "0.0.6a" //Version Number!!

var countDownDate = new Date("May 26, 2023 12:00:00").getTime();
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if(days == "53") {
    document.getElementById("lunchtoday").innerHTML = "Pizza, Fruit, Veggies";
  } else if (days == "52") {
    document.getElementById("lunchtoday").innerHTML = "Spud Bowl (Popcorn Chicken, Corn, Mashed Potatoes), Fruit";
  } else if (days == "51") {
    document.getElementById("lunchtoday").innerHTML = "Italian Dunkers, Caesar Salad, Oranges";
  } else if (days == "50") {
    document.getElementById("lunchtoday").innerHTML = "Cinnamon Rolls, Egg Bake, Grapes";
  } else if (days == "49") {
    document.getElementById("lunchtoday").innerHTML = "No School Lunch Today (Or I Fell Off)";
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
