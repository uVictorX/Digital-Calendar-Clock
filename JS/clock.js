const h = document.querySelector(".hour_num");
const m = document.querySelector(".min_num");
const s = document.querySelector(".sec_num");
const am_pm = document.querySelector(".am_pm");
const hText = document.getElementById('hTxt')
const mText = document.getElementById('minTxt')
const sText = document.getElementById('secTxt')

setInterval(() => {
  let date = new Date(),
  hour = date.getHours(),
  minutes = date.getMinutes(),
  second = date.getSeconds();


  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? hour = 12 : hour;

  h.innerText = hour;
  m.innerText = minutes;
  s.innerText = second;  
  am_pm.innerText = d;

  //checking hours
  /*if (h > '1') { 
    hText.innerText = 'Hours'
  } else {
    hText.innerText = "Hour"
  }*/
  if (hour != 1) {
    hText.innerText = 'Hours'
  } else {
    hText.innerText = 'Hour'
  }

  //checking minutes
  /*if (m > '1') {
    mText.innerText = 'Minutes'
  } else {
    mText.innerText = 'Minute'
  }*/
  if (minutes != 1) {
    mText.innerText = 'Minutes'
  } else {
    mText.innerText = 'Minute'
  }

  //checking seconds
  /*if (s > '1') {
    sText.innerText = 'Seconds'
  } else {
    sText.innerText = 'Second'
  }*/
  if (second != 1) {
    sText.innerText = 'Seconds'
  } else {
    sText.innerText = 'Second'
  }
}, 1000)