(function () {
  const $timer = document.querySelector('#timer');
  const $setter = document.querySelector('#setter > select');
  let interval = null;

  for (let i = 5; i <= 60; i += 5) {
    const $option = document.createElement('option');
    $option.innerHTML = i;
    $setter.appendChild($option);
  }

  $setter.selectedIndex = window.localStorage.getItem('simpletimer_optionindex') || 0;
  let time = Number($setter.value);
  $timer.innerText = time;

  function ticker() {
    interval = setInterval(function () {
      time -= 1;
      $timer.innerText = time;

      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  ticker();

  $setter.addEventListener('change', function () {
    clearInterval(interval);

    window.localStorage.setItem('simpletimer_optionindex', this.selectedIndex);
    time = Number(this.value);

    $timer.innerText = time;
    ticker();
  });
}());