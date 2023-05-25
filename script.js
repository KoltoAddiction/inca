var currentVersion = "0.1.4" //Version Number!!

var countDownDate = new Date("May 26, 2023 12:00:00").getTime();
var lunchDate = new Date("May 26, 2023 12:00:00").getTime();
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var currentTheme = 0;

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate-now;
  
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance >= 0) {
      document.getElementById("clock").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      
      document.getElementById("ms").innerHTML="or " + distance + "ms";
    }
    else if (distance < 0) {
    var thetaDate = new Date("August 23, 2023 08:15:00").getTime();
    var thetaDistance = thetaDate - now;
    document.getElementById("clock").innerHTML = "LIBERATION";
    document.getElementById("ms").innerHTML = "for " + thetaDistance + "ms";
    }
  
  var lunchdistance = lunchDate - now;
  
  lunchDays = Math.floor(lunchdistance / (1000 * 60 * 60 * 24));
  
  if(lunchDays == "4") {
    document.getElementById("lunchtoday").innerHTML = "Pizza, Veggies, Fruit";
  } else if (lunchDays == "3") {
    document.getElementById("lunchtoday").innerHTML = "Chicken Nuggets, Fries or Tots, Fruit, Dessert";
  } else if (lunchDays == "2") {
    document.getElementById("lunchtoday").innerHTML = "Chef’s Choice";
  } else if (lunchDays == "1") {
    document.getElementById("lunchtoday").innerHTML = "Cinnamon Rolls, Breakfast Item, Fruit";
  } else if (lunchDays == "0") {
    document.getElementById("lunchtoday").innerHTML = "Current Objective: Survive";
  } else if (lunchdistance < 0) {
    document.getElementById("lunchtoday").innerHTML = "Objective Complete. See You Next Time! :)";
  } else {
    document.getElementById("lunchtoday").innerHTML = "No School Lunch Today (Or I Fell Off)";
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

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("vcopy").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://labs.bible.org/api/?passage=random", true);
xhttp.send();
