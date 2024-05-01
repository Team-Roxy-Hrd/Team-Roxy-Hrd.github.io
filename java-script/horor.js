const movies = [
    {
         name: "spider man", //name of film 
        url: "show-1.html", //view of film
    },
    //add more films...
    {
         name: "Insidious", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "ELJOKER", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Death Whisperer", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Sinister", //name of film 
         url: "show-1.html", //view of film
       
    },
    //add more films...
    {
         name: "The Pyramid", //name of film 
         url: "show-1.html", //view of film
       
    },
    //add more films...
    {
         name: "Batman", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "The Purge", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "spZombieland 2", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "From Dusk Till Dawn", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "spidYou Are Not My Mother", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "World War Z", //name of film 
         url: "show-1.html", //view of film
       
    },
    //add more films...
    {
         name: "Underworld: Awakening", //name of film
         url: "show-1.html", //view of film 
        
    },
    //add more films...
    {
         name: "Resident Evil: The Final Chapter", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Blade", //name of film 
         url: "show-1.html", //view of film
       
    },
    //add more films...
    {
         name: "American Psycho", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Warm Bodies", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Little Monsters", //name of film 
         url: "show-1.html", //view of film
    
    },
    //add more films...
    {
         name: "Jennifer's Body", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Haunted Mansion", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "spRun Rabbit Run", //name of film 
         url: "show-1.html", //view of film
      
    },
    //add more films...
    {
         name: "Gothika", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Ma", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Creep", //name of film
         url: "show-1.html", //view of film 
       
    },
    //add more films...
    {
         name: "The Silence of the Lambs", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "King Kong", //name of film
         url: "show-1.html", //view of film 
        
    },
    //add more films...
    {
         name: "No Way Up", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "Enemy", //name of film 
         url: "show-1.html", //view of film
        
    },
    //add more films...
    {
         name: "The Exorcist: Believer", //name of film
         url: "show-1.html", //view of film 
    },
    //add more films...
    {
         name: "Misery", //name of film 
         url: "show-1.html", //view of film
    },
    //add more films...
   
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
