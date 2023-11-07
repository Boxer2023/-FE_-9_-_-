// Задача 1.
// Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона 
// на зеленый и уменьшать его до размеров 100х100px.

// const button = document.querySelector('.btn');
// const square = document.querySelector('.square');

// button.addEventListener('click', function() {
//     square.style.backgroundColor = 'green';
//     square.style.width = '100px';
//     square.style.height = '100px';
// });

// Задача 2.
// Создать кнопку и розовый квадрат с размерами 200х200px. 
// При клике на кнопку менять цвет на синий и выводить в 
// консоль обновленный цвет квадрата.

// const button = document.querySelector('.btn');
// const square = document.querySelector('.square');

// button.addEventListener('click', function() {
//     square.style.backgroundColor = 'blue';
//     console.log('Цвет квадрата обновлен на синий.');
// });

// Задача 3.
// Создать кнопку и квадрат с размерами 150х150px. 
// При клике на кнопку увеличивать высоту и ширину 
// квадрата на 20px

// Находим с помощью querySelector кнопку и квадрат
// const button = document.querySelector('.btn');
// const square = document.querySelector('.square');

// Задаем начальные значения ширины и высоты
// let width = 150;
// let height = 150;
// // Вешаем на кнопку слушатель события для кнопки
// button.addEventListener('click', function() {
// //  Увеличиваем ширину и высоту на 20 пикселей   
//     width += 20;
//     height += 20;

// //  Применяем новые значения квадрату
//     square.style.width = width + 'px';
//     square.style.height = height + 'px';
// });

// Задача 4.
// Создать кнопку и div с классом root. При клике на кнопку 
// в div создается параграф синего цвета. Текст параграфа 
// произвольный.

// const paragraphButton = document.querySelector('.paragraph-button');
// const root = document.querySelector('.root');

// paragraphButton.addEventListener('click', function() {
//     const paragraph = document.createElement('p'); // Создаем элемент <p>
//     paragraph.textContent = 'Это параграф синего цвета'; // Устанавливаем текст в параграф
//     paragraph.style.color = 'blue'; // Устанавливаем цвет текста
//     root.appendChild(paragraph); // Добавляем параграф в элемент с классом "root"
// });

// Задача 5.
// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди 
// параграфы синего и зеленого цветов. Первый цвет синий.

// const paragraphButton = document.querySelector('.paragraph-button');
// const root = document.querySelector('.root');
// const colors = ['blue', 'green']; // Массив цветов
// let currentIndex = 0; // Индекс текущего цвета

// paragraphButton.addEventListener('click', function() {
//     // Создаем элемент <p>
//     const paragraph = document.createElement('p'); 
//     // Устанавливаем текст в параграф
//     paragraph.textContent = 'Новый параграф'; 
//     // Устанавливаем цвет текста из массива цветов
//     paragraph.style.color = colors[currentIndex];
//     // Переходим к следующему цвету
//     currentIndex = (currentIndex + 1) % colors.length;
//     // Добавляем параграф в элемент с классом "root"
//     root.appendChild(paragraph); 
// });
    
    
