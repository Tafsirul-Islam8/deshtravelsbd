const track = document.getElementById('sliderTrack');
        const dotItems = document.querySelectorAll('.dotItem');
        const totalSlides = 3;
        let currentIndex = 0;
        let autoSlideInterval;
        function updateSlider(instant = false) {
            if (instant) {
                track.classList.add('noTransition');
            } else {
                track.classList.remove('noTransition');
            }
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dotItems.forEach((dot, index) => {
                if (index === (currentIndex % totalSlides)) {
                    dot.classList.add('activeDot');
                } else {
                    dot.classList.remove('activeDot');
                }
            });
        }
        function nextSlide() {
            currentIndex++;
            updateSlider(false);
            if (currentIndex === totalSlides) {
                setTimeout(() => {
                    currentIndex = 0;
                    updateSlider(true);
                }, 1000);
            }
        }
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000);
        }
        dotItems.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider(false);
                clearInterval(autoSlideInterval);
                startAutoSlide();
            });
        });
        startAutoSlide();