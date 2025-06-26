 document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        let currentIndex = 0;

        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * (slideWidth + 10)}px)`;
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) currentIndex--;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) currentIndex++;
            updateCarousel();
        });
});
   
