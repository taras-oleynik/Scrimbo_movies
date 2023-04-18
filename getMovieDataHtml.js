export default function getMovieDataHtml(data, action, btnName){ 
    return `   <div id="movie-data" class="movie-data">         
                        <div class="main-poster">
                                <img src="${data.Poster}"/>
                            </div>
                            <div class="empty-div"></div>             
                            <div class="movie-datails-info">
                                <div class="title-imdb">
                                    <div class="movie-title">
                                        ${data.Title}
                                    </div>
                                    <div class="movie-imdb-icon">
                                        <img src="images/Icon-imdb.png"/>
                                    </div>
                                    <div class="movie-imdb">
                                        ${data.imdbRating}
                                    </div>
                                </div>
                                <div class="tech-data">
                                    <div class="runtime">${data.Runtime}</div>
                                    <div class="ganre">${data.Genre}</div>
                                    <div class="watchlist-icon"> 
                                    <div class="remove-from-watchlist" id="${action === "add" ? "watchlist-btn-add" : "watchlist-btn-remove"}" data-remove="${data.imdbID}"></div>   
                                    </div>
                                    <div class="watchlist-btn"><a href="watchlist.html">${btnName}</div></a>
                                </div> 
                                <div class="short-descrp">
                                    ${data.Plot}
                                </div>                
                            </div>
                    </div>
                         <hr/>
                      ` 
}
//found in arr title filter all false/ true data-title="${data.Title}" 