const clock = document.querySelector('.clock')
const calendar = document.querySelector('.calendar')
const calBtn = document.querySelector('.calBtn')
const clkBtn = document.querySelector('.clkBtn')
const divCal = document.querySelector('.calBtnDiv')
const divClk = document.querySelector('.clkBtnDiv')

clkBtn.addEventListener('click', () => {
  clock.style.display = 'flex';
  calendar.style.display = 'none';

  divClk.classList.add('active');
  divCal.classList.remove('active');

  clkBtn.classList.remove('left');
  calBtn.classList.add('right')
})

calBtn.addEventListener('click', () => {
  calendar.style.display = 'flex';
  clock.style.display = 'none';

  divClk.classList.remove('active');
  divCal.classList.add('active');

  clkBtn.classList.add('left');
  calBtn.classList.remove('right')
})