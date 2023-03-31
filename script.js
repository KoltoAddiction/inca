var countDownDate = new Date("May 26, 2023 15:15:00").getTime();
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
  
  if(days == "57") {
    document.getElementById("lunchtoday").innerHTML = "Italian Pasta-n-Sauce, Garlic Bread, Roasted Veggies";
  } else if (days == "56") {
    document.getElementById("lunchtoday").innerHTML = "Hamburger, Fries or Tots, Fruit";
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
