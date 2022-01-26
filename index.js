
var deadline = new Date("Jan 26, 2022 06:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      "Goal Achieved! Happiest Republic Day";
    document.getElementById("cycle").style.animationPlayState = "paused";
    document.getElementById("cycle").src ="a.jpg";
    document.getElementById("info").innerHTML=
    "Due to Covid-19 situation, the 72-hour cycling plan of 9th-A could not be  conducted, so this site is a little replacement for it. The cycle will keep going till 26th January, when the timer stops. ";
    document.getElementById("bold").innerHTML="The plan was succesful";
    
  }
}, 1000);
