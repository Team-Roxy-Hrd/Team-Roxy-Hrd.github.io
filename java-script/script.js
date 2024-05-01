document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".films-containar");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    leftArrow.addEventListener("click", function() {
        container.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

    rightArrow.addEventListener("click", function() {
        container.scrollBy({
            left: 300, 
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".tv-shows-containar");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    leftArrow.addEventListener("click", function() {
        container.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

    rightArrow.addEventListener("click", function() {
        container.scrollBy({
            left: 300, 
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".anime-containar");
    const leftArrow = document.querySelector(".arrow-left-anime");
    const rightArrow = document.querySelector(".arrow-right-anime");

    leftArrow.addEventListener("click", function() {
        container.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

    rightArrow.addEventListener("click", function() {
        container.scrollBy({
            left: 300, 
            behavior: "smooth"
        });
    });
});

const movies = [
    {
        name: "hassan elmasry",
        url: "show-1.html"
    },
    {
        name: "harons",
        url: "show-1.html",
    },
    {
        name: "hareva",
        url: "show-1.html"
    },
    {
        name: "yogiho",
        url: "show-1.html"
    },
    {
        name: "osrorah",
        url: "show-1.html"
    },
    {
        name: "hexa",
        url: "show-1.html"
    },
    
];

const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');

function displaySearchResults(searchTerm) {
    searchResultsContainer.innerHTML = '';

    if (searchTerm === '') {
        searchResultsContainer.style.display = 'none';
        return;
    }

    const foundMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));

    foundMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('search-result');
        movieElement.innerHTML = `
            <h3>${movie.name}</h3>
        `;
        movieElement.addEventListener('click', () => {
            window.location.href = movie.url;
        });
        searchResultsContainer.appendChild(movieElement);
    });

    searchResultsContainer.style.display = 'block';
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    displaySearchResults(searchTerm);
});



