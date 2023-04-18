import getMovieDataHtml from "./getMovieDataHtml.js";


let moviesFromLocalStoregeArr = []
const watchHolder = document.querySelector(".watch-list")
const watchListEmptyEls = document.querySelector(".watch-list-empty-data")


const movieDataArr = JSON.parse(localStorage.getItem("myWatchList"))
if (movieDataArr){
    watchListEmptyEls.style.visibility = 'hidden';
    moviesFromLocalStoregeArr =  movieDataArr.map((movieData) => {
        return getMovieDataHtml(movieData, "remove", "Remove")
    }) 
}
watchHolder.innerHTML = moviesFromLocalStoregeArr.join("");
 
 /**
  * TODO:
    1 Get imdbID from button
    2 Get moviesData from localstorege
    3 Filter movieData to get new array without movie with imdbID received from button 
    4 Set new array to localstorege as new moviesData
    5 Re render list of watchList 
  */
 function removeButtonOnClick(e) {
  const imdbID = e.target.dataset.remove;
  const movieDataArr = JSON.parse(localStorage.getItem("myWatchList"));
    const movieDataArrNew = movieDataArr.filter((movieData) => {
    return movieData.imdbID !== imdbID;
  });
  localStorage.setItem("myWatchList", JSON.stringify(movieDataArrNew));
  const watchHolder = document.querySelector(".watch-list");
     const test = movieDataArrNew.map((movieData) => {
    return getMovieDataHtml(movieData, "remove", "Remove");
  });
    
  watchHolder.innerHTML = test.join("");
  renderRemoveButton();
 } 
 
function renderRemoveButton() {
  const removeButtonsArr = document.querySelectorAll(".remove-from-watchlist");
    removeButtonsArr.forEach((removeButton) => {
    removeButton.addEventListener("click", removeButtonOnClick);
  });
}
renderRemoveButton();
