
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

/************ MENIU MIC **************/

var sageata = document.getElementById("meniuMic");
var meniu =  document.getElementsByClassName("meniu_dropdown")[0];
var ok = 0;

function deschideMeniu(){
  meniu.style.display = "block";
  sageata.onclick = inchideMeniu;
}

function inchideMeniu(){
  meniu.style.display = "none";
  sageata.onclick = deschideMeniu;
}

function deschideMeniuMare(){
  if(window.innerWidth > 680)
    {
      meniu.style.display = "block";
      ok=1;
    }
  if(window.innerWidth <= 680 && ok == 1)
    {
      meniu.style.display = "none";
      ok=0;
    }
}

/*****************************************/

window.onload = function()
{
    modalAbonare.style.display = "block";

    if(localStorage.getItem("day") != null)
        {
          document.getElementById("last-vis").innerHTML = "Ultima vizită: " + localStorage.getItem("day") + "/" + localStorage.getItem("month") + "/" + localStorage.getItem("year");
        }

    var d = new Date();
    localStorage.setItem("day",d.getDate());
    localStorage.setItem("month",d.getMonth() + 1);
    localStorage.setItem("year",d.getFullYear());

    sageata.onclick = deschideMeniu;
    setInterval(deschideMeniuMare,1000);
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
