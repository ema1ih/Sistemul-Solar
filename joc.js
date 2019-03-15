function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  // daca nu este deja o planeta in spatiul respectiv & daca nu ai apasat pe 'verifica' inca
  if(ev.target.children.length==1 && checkPlanets.style.display != "none")
  {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); // data = numele planetei
    document.getElementById(data).parentElement.children[1].innerHTML = ""; // sterge figcaption-ul de la planeta care a fost pusa acum
    document.getElementById(data).setAttribute("draggable",false);
    ev.target.appendChild(document.getElementById(data));
    ev.target.children[0].innerHTML = data; // scrie numele planetei puse in spatiul respectiv
  }
}

var checkPlanets = document.getElementById("verificaPlaneteButon");

checkPlanets.onclick = function()
{

  this.style.display = "none";

  var answers = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
  var result = 0;

  var allLabels = document.querySelectorAll(".planet");

  for(let j=0; j<allLabels.length; j++)
  {
      allLabels[j].className = "planet_wrong";
      if(allLabels[j].children[1] != null) // daca este pusa o planeta
      {
        if(allLabels[j].children[1].id == answers[j]) // daca numele ei este raspunsul corect
          {
            result++;
            allLabels[j].classList.add("planet_correct");
          }
      }

  }

  document.getElementById("scor").innerHTML = "Scorul tău este: " + result + "/8";

}
