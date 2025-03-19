document.addEventListener('DOMContentLoaded', function(){
    let mainContainer = document.getElementById('mainContainer');
    let moviesList = document.getElementById('moviesLists');

    let moviesLists = new XMLHttpRequest()
    moviesLists.open('GET', "https://mimic-server-api.vercel.app/movies");
    moviesLists.onload = () => {
        if(moviesLists.status === 200){
            let respone = JSON.parse(moviesLists.response);
            respone.forEach(element => {
                // console.log(respone)
                let movieContainer = document.createElement('div');
                movieContainer.className = "movieGrid";
                movieContainer.id = "induvialMovie"
                moviesList.append(movieContainer);
                let moviePoster = document.createElement('img')
                moviePoster.src = element.poster_path;
                movieContainer.append(moviePoster)
                let movieTitle = document.createElement('p');
                movieTitle.innerText = element.original_title;
                movieContainer.append(movieTitle);
                let movieVoteAverage = document.createElement('small');
                movieVoteAverage.innerText = element.vote_average;
                movieContainer.append(movieVoteAverage);
                
                let popupDiv = document.getElementById('popupDiv');
                let closePopup = document.getElementById('closePopup');
                let popFlag = false;

                movieContainer.addEventListener("click",()=>{
                    popupDiv.style.display = "block";
                    popupDiv.innerHTML +=`
                    <img src=${element.poster_path}></img>
                    <h1>${element.title}</h1>
                    `
                    removePopDiv()
                })
            });
        }
    }
    console.log(moviesLists)
    moviesLists.send();
})


function removePopDiv(){
    closePopup.addEventListener("click", ()=>{
        popupDiv.innerText=""
        popupDiv.style.display = "none";
     })
}