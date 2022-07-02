var testimonialThumbs = new Swiper(".testimonial-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
  });
  var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  