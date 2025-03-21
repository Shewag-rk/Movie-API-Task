// function for calling movies API in frontend:
function movieListFromAPI(){
    const movieListDiv = document.querySelector(".movieLists")
    const navItem =  document.querySelector('.navItem');
    // console.log(movieListDiv);
    const movies = new XMLHttpRequest();
    movies.open("GET", "https://mimic-server-api.vercel.app/movies");
    movies.onload = () =>{
        if(movies.status === 200){
            const genresObj = {
                28: "Action",
                80: "Crime",
                53: "Thriller",
                18: "Drama",
                10751: "Family",
                35: "Comedy",
                12: "Adventure",
                36: "History",
                10749: "Romance",
                14: "Fantasy"
            }
            const moviesObj = JSON.parse(movies.response);
                  // console.log(moviesObj);
            moviesObj.forEach(item => {
                movieListDiv.innerHTML +=`
                <div class="movieGrid">
                <img src="${item.poster_path}"></img>
                <div class="movieInfo">
                    <div class="leftInfo">
                    <p>${item.original_title}</p>
                    <p>Tamil</p>
                    <p>${item.popularity}</p>
                    <p>${item.adult}</p>
                    </div>
                </div>
                <div class="rightInfo">
                    <p>${item.vote_average}</p>
                    <p>${item.genre_ids.map((num => genresObj[num]))}</p>
                </div>
                </div>
                `
                const usernameDisplay = JSON.parse(window.localStorage.getItem('userValues'));
                usernameDisplay.forEach(item =>{
                // console.log(item.userID);
                    navItem.innerHTML =`
                    <input type="text" id="searchBox" placeholder="Search for movies...">
                    <p>Hello ${item.userName}</p>
                    <button class="addMoviesBtn">Add Movie</button>
                    `
                })

            });
        }
    }
    movies.send();
}
movieListFromAPI()

