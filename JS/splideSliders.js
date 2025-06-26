  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#kitchens-slider', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();

    new Splide('#bedrooms-slider', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();

    new Splide('#wardrobes-slider', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();
});