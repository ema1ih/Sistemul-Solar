var modalGalerie = document.getElementById("modal-galerie");

var closeButton = document.getElementsByClassName("closeButton")[0];

closeButton.style.cursor = "pointer";

closeButton.onclick=function(){ 
      this.parentNode.style.display = "none";
}

var poza = document.getElementById("img_pluto");

poza.style.cursor = "pointer";
poza.onclick = function (event){
  modalGalerie.style.display = "block";
  event.stopPropagation();
}

var figure = document.getElementsByClassName("poza_dreapta")[0];

figure.style.cursor = "pointer";
figure.onclick = function() {
  window.open("regiuneaTransneptuniană.html");
}
