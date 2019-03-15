/************ FIND ON PAGE *******************/
var searchSubmit = document.getElementById("search-icon");
var searchBar =  document.getElementById("search-bar");

searchBar.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {
        searchSubmit.click();
    }
});

function findOnPage(str)
{ 
    if(!window.find(str))
      {
        searchBar.style.borderColor = "#d60c0c";
      }
      else {
        searchBar.style.borderColor = "grey";
      }
}

searchSubmit.onclick = function(){
  findOnPage(searchBar.value);
}
