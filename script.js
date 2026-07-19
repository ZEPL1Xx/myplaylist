const songItems = document.querySelectorAll('.song-item');

songItems.forEach(item => {
    // Делаем курсор "рукой", чтобы было понятно, что на элемент можно нажать
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
        const author = item.getAttribute('data-author');
        alert(`Автор: ${author}`);
    });
});