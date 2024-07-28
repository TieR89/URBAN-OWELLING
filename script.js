// Функция для переключения языка
function toggleLanguage() {
  const ruElements = document.querySelectorAll('.lang-ru');
  const enElements = document.querySelectorAll('.lang-en');
  const langSwitch = document.querySelector('.lang-switch a');

  if (langSwitch.textContent === 'EN') {
    // Переключение на английский
    ruElements.forEach(el => (el.style.display = 'none'));
    enElements.forEach(el => (el.style.display = 'inline'));
    langSwitch.textContent = 'RU';
    document.documentElement.lang = 'en';
  } else {
    // Переключение на русский
    ruElements.forEach(el => (el.style.display = 'inline'));
    enElements.forEach(el => (el.style.display = 'none'));
    langSwitch.textContent = 'EN';
    document.documentElement.lang = 'ru';
  }
}

document.querySelectorAll('.product-card').forEach(card => {
  const price = card.querySelector('.price');
  const oldPrice = card.querySelector('.old-price');

  if (oldPrice) {
    price.classList.add('orange');
  } else {
    price.classList.add('black');
  }
});
