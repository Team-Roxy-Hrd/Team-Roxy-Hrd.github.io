const searchInput = document.getElementById('search');
const movies = document.querySelectorAll('.film');

searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    movies.forEach(film => {
        const movieName = film.querySelector('h4').textContent.toLowerCase();
        if (movieName.includes(searchText)) {
            film.style.display = 'block';
        } else {
            film.style.display = 'none';
        }
    });
});