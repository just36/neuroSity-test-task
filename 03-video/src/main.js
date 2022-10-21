const video = document.querySelector('.video-timer'),
  videoTime = document.querySelector('.video-time');

video.addEventListener('click', () =>
  video.paused ? video.play() : video.pause()
);

video.addEventListener('ended', function () {
  video.currentTime = 0;
});

video.addEventListener('timeupdate', function () {
  videoTime.innerText = secondsToTime(video.currentTime);
});

// рассчет отображаемого времени
function secondsToTime(time) {
  let fulltime,
    h = Math.floor(time / (60 * 60)),
    dm = time % (60 * 60),
    m = Math.floor(dm / 60),
    ds = dm % 60,
    s = Math.ceil(ds);
  if (s === 60) {
    s = 0;
    m = m + 1;
  }
  if (s < 10) {
    s = '0' + s;
  }
  if (m === 60) {
    m = 0;
    h = h + 1;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (h === 0) {
    fulltime = m + ':' + s;
  } else {
    fulltime = h + ':' + m + ':' + s;
  }
  return fulltime;
}
