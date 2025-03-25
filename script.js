document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const serviceCard = document.querySelector(".service-card");

  let currentIndex = 0;
  const slideCount = slides.length;

  // При клике на карту услуг
  serviceCard.forEach(
    addEventListener("click", () => {
      window.open("tel:+79966165509");
    }),
  );
  // Создаем точки для навигации
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Функция для перехода к конкретному слайду
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  // Функция обновления слайдера
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Кнопка "Назад"
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  });

  // Кнопка "Вперед"
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  });

  // Автопрокрутка (опционально)
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }, 5000);

  // Останавливаем автопрокрутку при наведении
  slider.parentElement.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  // Возобновляем автопрокрутку при уходе курсора
  slider.parentElement.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }, 3000);
  });
});
