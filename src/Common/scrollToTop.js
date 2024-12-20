const scrollToTop = () => {
  let offset = 150;
  let progressWrap = document.querySelector('.progress-wrap');
  let progressPath = document.querySelector('.progress-wrap path');

  if (!progressWrap || !progressPath) {
    console.error('No se encontraron elementos .progress-wrap o .progress-wrap path');
    return;
  }

  let pathLength = progressPath.getTotalLength();
  const updateProgress = () => {
    let scroll = window.scrollY;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  updateProgress();
  window.addEventListener('scroll', updateProgress);

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > offset) {
      progressWrap.classList.add('active-progress');
    } else {
      progressWrap.classList.remove('active-progress');
    }
  });

  progressWrap.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  });
};

export default scrollToTop;

