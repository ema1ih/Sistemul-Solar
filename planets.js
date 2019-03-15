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


/************ ROTIRE IMAGINE **************/

var deg = 0, rotateInt;
var img = document.getElementById("img_transform");

window.onload = function()
{
  rotateInt = setInterval(rotateFunc, 50, "img_transform");
  sageata.onclick = deschideMeniu;
  setInterval(deschideMeniuMare,1000);
}

function rotateFunc(img_id)
{
  deg += 1;
  var system = document.getElementById(img_id);
  system.style.transform = "rotate(" + deg + "deg)";
}

img.onclick = function()
{
  clearInterval(rotateInt);
  img.style.cursor = "auto";
}
