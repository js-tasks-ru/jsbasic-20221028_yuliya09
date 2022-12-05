function initCarousel() {
  let carousel = document.querySelector('.carousel'),
      carousel__inner = document.querySelector('.carousel__inner'),
      slideWidth = document.querySelector('.carousel__slide').offsetWidth,
      arrow_left = document.querySelector('.carousel__arrow_left'),
      arrow_right = document.querySelector('.carousel__arrow_right'),
      trans = 0,
      maxTrans = -slideWidth*3

  arrow_left.style.display = 'none'

  carousel.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_left') && trans < 0)
      trans += slideWidth
    if (event.target.closest('.carousel__arrow_right') && trans > maxTrans)
      trans -= slideWidth

    arrow_right.style.display = trans == maxTrans ? 'none' : ''
    arrow_left.style.display = trans == 0 ? 'none' : ''

    carousel__inner.style.transform = `translateX(${trans}px)`
  })
}
