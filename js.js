const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',//vertical, horizontal
    loop: true,//false, true - круговой
    speed: 500,//скороасть
    effect: 'slider',// slider, flip, fade, cube, cards, coverflow
    // slidesPerView: 2,// Количество фото на экране
    // centeredSlides: true,// Слайд по середине
    // initialSlide:1,// Слайд при загрузке
    // freeMode: true,// нет возврата при перелстывании по экрану
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
       clickable: true,// Кликабельность подстветки
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*
    autoplay: {
      delay: 500,
    },
    */
  });