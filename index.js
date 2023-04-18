import getMovieDataHtml from "./getMovieDataHtml.js";
const submitBtn = document.getElementById("sbm-btn");
submitBtn.addEventListener("click", getMovie);

const startImgEl = document.getElementById("start-search-img");
const startTextImgEl = document.getElementById("start-search-text");
const notFound = document.querySelector(".no-search-found-text");
const movieData = document.querySelector(".display-content");
const watchlistBtn = document.getElementById("watchlist-btn");
let html = "";
let watchListArr = [];
let watchListFromLocalStorage = "";

async function getMovie() {
  const usersInput = document.getElementById("search-bar").value;
  const responce = await fetch(
    `https://www.omdbapi.com/?t=${usersInput}&apikey=2c88a4f5`
  );
  const data = await responce.json();

  startImgEl.style.visibility = "hidden";
  startTextImgEl.style.visibility = "hidden";

  if (data.Response === "False") {
    notFound.innerHTML = `<p>Unable to find what you’re looking for. Please try another search.</p>`;
  } else {
    movieData.innerHTML = getMovieDataHtml(data, "add", "WatchList");

    addToWatchList(data);
  }
}

export function addToWatchList(foundMovie) {
  const addtoWatchListBtn = document.getElementById("watchlist-btn-add");
  addtoWatchListBtn.addEventListener("click", () => {
    watchListFromLocalStorage = JSON.parse(localStorage.getItem("myWatchList"));
    if (watchListFromLocalStorage) {
      watchListArr = watchListFromLocalStorage;
    }
    watchListArr.push(foundMovie);

    localStorage.setItem("myWatchList", JSON.stringify(watchListArr));
  });
}
