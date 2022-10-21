const btn = document.querySelector('.btn'),
  text = Array.from(document.querySelectorAll('.text'));

const throttle = (fn, ms) => {
  let isThrottle = false;
  return function () {
    if (isThrottle) {
      return;
    }
    fn.apply(this, arguments);
    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;
    }, ms);
  };
};

function onClickBtn(el) {
  el.forEach((item) => item.classList.toggle('text-more'));
}

onClickBtn = throttle(onClickBtn, 1000);

btn.addEventListener('click', () => onClickBtn(text));
