const d = document.querySelector('.day-num');
const mt = document.querySelector('.month-num');
const y = document.querySelector('.year-num');
const dText = document.querySelector('.day-name')
const mtText = document.querySelector('.month-name')

setInterval(() => {
  const date = new Date();
  monthDay = date.getDate();
  weekDay = date.getDay();
  month = date.getMonth();
  year = `20\n22`

  //console.log(date.getDate())

  y.innerText = year
  var monthNum
  var monthText
  switch (month) {
    case 0:
      monthNum = '1'
      monthText = 'January'
      break
    case 1:
      monthNum = '2'
      monthText = 'Frebuary'
      break
    case 2:
      monthNum = '3'
      monthText = 'March'
      break
    case 3:
      monthNum = '4'
      monthText = 'April'
      break
    case 4:
      monthNum = '5'
      monthText = 'May'
      break
    case 5:
      monthNum = '6'
      monthText = 'June'
      break
    case 6:
      monthNum = '7'
      monthText = 'July'
      break
    case 7:
      monthNum = '8'
      monthText = 'August'
      break
    case 8:
      monthNum = '9'
      monthText = 'September'
      break
    case 9:
      monthNum = '10'
      monthText = 'October'
      break
    case 10:
      monthNum = '11'
      monthText = 'January'
      break
    case 11:
      monthNum = '12'
      monthText = 'January'
      break
  }
  mt.innerText = monthNum
  mtText.innerText = monthText

  var dayText
  switch (weekDay) {
    case 0:
      dayText = "Sunday"
      break;
    case 1:
      dayText = "Monday";
      break;
    case 2:
      dayText = "Tuesday";
      break;
    case 3:
      dayText = "Wednesday";
      break;
    case 4:
      dayText = "Thursday";
      break;
    case 5:
      dayText = "Friday";
      break;
    case 6:
      dayText = "Saturday";
  }
  d.innerText = monthDay
  dText.innerText = dayText
}, 1000)