/*
사이에 있는 모든 것은 주석입니다.
*/
'use strinct'; 

/* Today */
var x = setInterval(function() {
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    // let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    // let milliseconds = today.getMilliseconds(); // 밀리초
    document.getElementById("today").innerHTML = 'today: ' + year + '/' + month + '/' + date + '   ' + hours + ':' + minutes + ':' + seconds 
}, 1000);


/* Countup Timer */
// Set the date we're counting down to
var countDownDate = new Date("Jun 8, 1993 09:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counttime").innerHTML = "Since my birth: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counttime").innerHTML = "EXPIRED";
  }
}, 1000);




