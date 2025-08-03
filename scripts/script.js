const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enable: true,
      onlyInViewport: true,
    },
});

function scrolling() {
  const anchors = document.querySelectorAll('a.scroll-to');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

function render() {
  scrolling()
}

render();