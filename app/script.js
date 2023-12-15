const burger = document.getElementsByClassName('burger__btn')[0];
const left_nav = document.getElementsByClassName('left__nav')[0];
burger.onclick = function () {
    left_nav.classList.toggle('active');
};

let currentImage = "image2";

function changeImage(imageId) {
  const imageElement = document.getElementById(imageId);

  if (currentImage === imageId) {
    // Якщо натискане зображення вже є зображенням "3", то не робимо нічого
    return;
  }

  // Замінюємо зображенням "3"
  imageElement.src = "img/line-chart-check.svg";

  // Замінюємо попереднє зображення на зображення "1" або "2"
  const previousImageElement = document.getElementById(currentImage);
  previousImageElement.src = "img/line-chart-not-check.svg";

  // Оновлюємо поточне зображення
  currentImage = imageId;
  
}
