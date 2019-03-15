document.getElementById("link").onclick = function()
{
  window.open("https://ro.wikipedia.org/wiki/Sistemul_solar","width=200,height=100","_blank");
}

document.getElementById("verificaQuizButon").onclick = verificaQuiz;

function verificaQuiz()
{

  this.style.display = "none";

  var answers = [1,0,2,2,2,4,1,0,3,4];
  var result = 0;

  var cercuri = document.getElementsByClassName("cerc");
  var labels = document.getElementsByClassName("labelRadio");

  for(let j=0; j<document.forms.length; j++) //pentru fiecare intrebare
  {
      var correctLabel = 5*j + answers[j];
      cercuri[correctLabel].classList.add("checkLabel", "correctLabel"); // raspunsul corect devine verde
      labels[correctLabel].style.color = "white";

      if((document.forms[j])[answers[j]].checked) result++; // daca ai raspuns corect
        else // daca ai gresit
            for(var index=0;index<5;index++)
              if((document.forms[j])[index].checked==true) // pentru label-ul care a fost apasat
                  {
                    var checkedLabel = 5*j + index;
                    cercuri[checkedLabel].classList.add("checkLabel", "wrongLabel"); // devine rosu 
                    break;
                  }
  }

  for(let index = 0; index < cercuri.length; index++) // nu se mai poate apasa pe label-uri
      {
        labels[index].removeAttribute("for");
        labels[index].style.cursor = "auto";
      }

  document.getElementById("scor").innerHTML = "Scorul tău este: " + result + "/10";

}
