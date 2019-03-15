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

window.onload = function()
{
    sageata.onclick = deschideMeniu;
    setInterval(deschideMeniuMare,1000);
}
