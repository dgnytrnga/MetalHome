const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * (slides[0].offsetWidth + 20); // 20px marjinal
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Otomatik kaydırma başlatma
const interval = setInterval(nextSlide, 3000); // 3 saniyede bir döngü yapacak

// Ekrandan çıkarsa otomatik kaydırma işlemini durdurma
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// Ekrana geri geldiğinde otomatik kaydırma işlemini yeniden başlatma
carouselContainer.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});

// Sayfa yüklendiğinde carousel'ı başlatma
updateCarousel();
