import "./CountDown.css";

const CountDown = () => {
  var countDownDate = new Date("June 26, 2023 14:00:00").getTime();
  let now, distance, days, hours, minutes, seconds;
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);

  return <p id="demo"></p>;
};

export default CountDown;
