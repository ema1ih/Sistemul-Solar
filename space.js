
/********* MODAL GALERIE & ABONARE **********/

var modalGalerie = document.getElementById("modal-galerie");
var modalAbonare = document.getElementById("modal-abonare");

var closeButtons = document.getElementsByClassName("closeButton"); // 0 - galeria, 1 - abonarea

closeButtons[0].style.cursor = "pointer";
closeButtons[1].style.cursor = "pointer";

closeButtons[0].onclick=function(){
      modalGalerie.style.display = "none";
}
closeButtons[1].onclick=function(){
      modalAbonare.style.display = "none";
}

var imagini = document.querySelectorAll(".img");

for(let index = 0; index < imagini.length; index++)
{
  imagini[index].style.cursor = "pointer";
  imagini[index].onclick = function ()
  {
    var poza = document.getElementById("poza");
    modalGalerie.style.display = "block";
    poza.src = "pics/" + (index + 1) + ".jpg";
  }
}
/************ RANDOM CORP ****************/
var randomBtn = document.getElementById("randomPlanet");

randomBtn.onclick = function()
{
  var par = document.getElementById("planets");
  var corp = document.createElement("IMG");

  var nr = Math.floor(Math.random() * 33) + 1;

  corp.src = "pics/corpuri/" + nr + ".jpg";
  corp.style.width = "10%";
  corp.style.borderRadius = "20%";

  par.appendChild(corp);

  corp.onclick = function()
  {
    par.removeChild(this);
  }

}
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
    //alert(str);
    //alert(str + window.find(str));
    if(!window.find(str))
      {
        searchBar.style.borderColor = "#d60c0c";
      }
      else {
        searchBar.style.borderColor = "grey";
      }
}
/************ MEDIA QUERY MENIU MIC **************/

var meniuMic = document.getElementById("meniuMic");
var meniuMare =  document.getElementsByClassName("meniu_dropdown")[0];


function deschideMeniu(){
  meniuMare.style.display = "inline-block";
  meniuMic.onclick = inchideMeniu;
}

function inchideMeniu(){
  meniuMare.style.display = "none";
  meniuMic.onclick = deschideMeniu;
}
/*****************************************/

window.onload = function()
{
    //modalAbonare.style.display = "block";

    meniuMic.onclick = deschideMeniu;
    searchSubmit.onclick = function(){
      findOnPage(searchBar.value);
    }

}

/*********** ABONARE BUTON ***********/

document.getElementById("subButon").onclick = subscribe;

function subscribe()
{
  var ok = 1; // daca e completat ok
  var email = document.getElementById("email").value;
  var emailErrorText = document.getElementById("emailErrorText");
  var policyErrorText = document.getElementById("policyErrorText");

  emailErrorText.innerHTML = "";
  policyErrorText.innerHTML = "";
  document.getElementById("subText").innerHTML="";

  if(email=="")
      { emailErrorText.innerHTML = "Câmp obligatoriu."; ok=0; }
  if(document.getElementById("policyCheck").checked == false)
      { policyErrorText.innerHTML = "Trebuie sa fiți de acord cu politica."; ok=0; }

  if(ok==1)
        {
          document.getElementById("subText").innerHTML = "Un link de confirmare a fost trimis la " + email + ".";
        }

}
