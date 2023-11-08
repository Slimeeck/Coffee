// JavaScript-код для вашої сторінки
document.querySelector('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        // Отримайте ідентифікатор анкора з посилання
        var targetId = e.target.getAttribute('href').substring(1);

        // Знайдіть всі розділи на сторінці
        var sections = document.querySelectorAll('section');

        // Закрийте всі розділи, окрім вибраного
        sections.forEach(function (section) {
            if (section.id !== targetId) {
                section.classList.add('hidden');
            }
        });

        // Знайдіть вибраний розділ і розкрийте його
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.remove('hidden');
            setTimeout(function () {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        // Приховати картинки у розділі "Меню," якщо не обрано "Меню"
        if (targetId !== 'menu') {
            var menuImages = document.querySelectorAll('#menu img');
            menuImages.forEach(function (image) {
                image.style.display = 'none';
            });
        } else {
            // Показати картинки у розділі "Меню"
            var menuImages = document.querySelectorAll('#menu img');
            menuImages.forEach(function (image) {
                image.style.display = 'block';
            });
        }
    }
});
