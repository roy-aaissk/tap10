let count = 0;
let time = 10000;
const decrementTime = 1000;
const btn = document.getElementById('js-tapBtn');
const remainingTime = document.getElementById('js-time');
const startBtn = document.getElementById('js-startBtn');

btn.addEventListener('click', function () {
  count++;
  console.log(count);
});

startBtn.addEventListener('click', (event) => {
  btn.disabled = event.target.checked;

  startBtn.disabled = true;
  countDown();
});

function countDown() {
  setInterval(() => {
    if (time <= 0) {
      clearInterval(countDown);
      document.getElementById('result-count').textContent = count;
      return;
    }
    time = time - decrementTime;
    document.getElementById('js-time').innerHTML = Math.floor(time / 1000) % 60;
  }, 1000);
}

remainingTime.textContent = Math.floor(time / 1000) % 60;
