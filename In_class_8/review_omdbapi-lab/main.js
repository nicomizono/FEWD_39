var form = document.querySelector("#movie-search-form");
form.addEventListener("submit", formSubmitted);

function fromSubmitted(event){
  event.preventDefault();
  var query = document.querySelector("query");
  var url= "http://www.omdbapi.com/?s="+ query.value;
  $.get(url, movieResults);
}

function movieResults(results){
  results["Search"].forEach(movieResults);
}

function displayMovie(movie){
  var item = document.createElement("li");
  var movie = document.createElement("div");
  var link = document.createElement("a");
  var release = document.createElement("div")

  var name = movie["title"];
  link.textContent = name;
  var year = movie["year"];
  release.textContent = year;

  item.setAttribute("class","movies");
  movie.setAttribute("class","movie-title");
  release.setAttribute("class", "movie-release-date");

  var url = "http://www.imdb.com/title"+movie[imdbID]
  link.setAttribute("href" url);
  link.setAttribute("target","blank");

  item.appendChild(movie);
  item.appendChild(release);
  movie.appendChild(link);

  var ul = document.querySelector("#movies").appendChild(item);

}













//1. On the form, when the user hits submit, add an event listener. --> when this event happens, we prevent the default action.
//2. In order to search the OMDB database, we need to access it with a URL.
//3. Create the URL by concatenating the URL + whatever value is in the input field.
//4. make a requet to OMDB for info (ajax call and JSON results are returned)
//4a. Call back function: $.get(url, moveResults) - you get the data from the URL, and place the data into the next function to run
//4b. form.addEventListener("submit", formSubmitted) ("add an event Listener on the form, on "submit" of this form, do the next function)
//4c. array.forEach(dosomething) (for each item in the array, take ONE of those items and do something).
//
// displayEachMovie
// 1. Create 4 elements (li, div, div, a)
// 2. Set attributes to all of the elements
// 3. Append to the appropriate parent element
