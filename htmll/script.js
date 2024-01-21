document.querySelector('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        var targetId = e.target.getAttribute('href').substring(1);

        var sections = document.querySelectorAll('section');

        sections.forEach(function (section) {
            if (section.id !== targetId) {
                section.classList.add('hidden');
            }
        });

        var targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.remove('hidden');
            setTimeout(function () {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        if (targetId !== 'menu') {
            var menuImages = document.querySelectorAll('#menu img');
            menuImages.forEach(function (image) {
                image.style.display = 'none';
            });
        } else {
            var menuImages = document.querySelectorAll('#menu img');
            menuImages.forEach(function (image) {
                image.style.display = 'block';
            });
        }
    }
});
