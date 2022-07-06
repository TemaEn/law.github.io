'use strict';

// меню бургер

const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};

// спойлеры

const accordions = document.querySelectorAll(".footer__headline"); // кнопки открывающие спойлер
const panels = document.querySelectorAll('.panel'); // содержимое (все)

if (accordions.length > 0) {
	for (let index = 0; accordions.length > index; index++) {
		const accordion = accordions[index]; // определенная кнопка

		accordion.addEventListener('click', function (e) {
			deleteActive();
			let panel = e.target.nextElementSibling; // обращение к определенной панели
			if (panel.style.maxHeight) { // если открыт, закрываем
				closeAccordions(); // закрываем остальные спойлеры
				panel.style.maxHeight = null;
			} else { // если закрыт, открываем
				closeAccordions();
				e.target.classList.toggle("_active"); // добавление класса для подсветки
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}

function closeAccordions() { // функция закрытия остальных спойлеров, убираем класс актив
	panels.forEach(item => {
		item.style.maxHeight = null;
	});
}

function deleteActive() { // удаляем класс актив у спойлеров
	accordions.forEach(item => {
		item.classList.remove('_active');
	});
}