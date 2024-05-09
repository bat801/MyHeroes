window.onload = function() {
    var photos = document.querySelectorAll('.photo-gallery img');

    photos.forEach(function(photo) {
        photo.addEventListener('click', function(event) {
                event.preventDefault(); // Предотвращаем стандартное действие ссылки
                if (this.classList.contains('enlarged')) {
                    this.style.width = '200px'; // Возвращаем обычный размер
                    this.style.height = '200px';
                    this.classList.remove('enlarged');
                } else {
                    this.style.width = '1000px'; // Увеличиваем размер
                    this.style.height = '1000px';
                    this.classList.add('enlarged');
                }
        });
    });
    var photos = document.querySelectorAll('.medal-gallery img');

    photos.forEach(function(photo) {
        photo.addEventListener('click', function(event) {
                event.preventDefault(); // Предотвращаем стандартное действие ссылки
                if (this.classList.contains('enlarged')) {
                    this.style.width = '100px'; // Возвращаем обычный размер
                    this.style.height = '200px';
                    this.classList.remove('enlarged');
                } else {
                    this.style.width = '400px'; // Увеличиваем размер
                    this.style.height = '800px';
                    this.classList.add('enlarged');
                }
        });
    });
};
    