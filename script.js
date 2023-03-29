var countDownDate = new Date("May 26, 2023 15:15:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var date = getDate();
  
  if (date == 29)) {
  document.getElementByID("lunchtoday").innerHTML = "Lunch Today: Swedish Meatballs, Biscuit or Buttered Noodles, Green Beans, Dessert";
  }

  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "FREE";
  }
}, 1000);

function retrieveDate() {
    const month = getDate().toLocaleString('default', { month: 'long' });
    document.getElementById("date").innerHTML = getDate().toString() + month + getFullYear().toString();
    console.log(test);


};
