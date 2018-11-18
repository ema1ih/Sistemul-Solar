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
/***********************************/

window.onload = function()
{
    //modalAbonare.style.display = "block";

    meniuMic.onclick = deschideMeniu;


}

/********** QUIZ BUTON *********/


document.getElementById("verificaQuizButon").onclick = verificaQuiz;

function changeLabel(lab)
{
  lab.style.borderRadius="15px";
  lab.style.borderColor="#279153";
  lab.style.borderStyle="solid";
  lab.style.borderWidth="1px";
  lab.style.color="white";
}

function verificaQuiz()
{
  var answers = [1,0,2,2,2,4,1,0,3,4];
  var result = 0;


  var allLabels = document.querySelectorAll("label");
  for(let j=0; j<document.forms.length; j++)
  {
      allLabels[5*j+answers[j]].style.background="#99d8b3";
      changeLabel(allLabels[5*j+answers[j]]);

      if((document.forms[j])[answers[j]].checked) result++;
        else
            for(var index=0;index<5;index++)
              if((document.forms[j])[index].checked==true)
                  {
                    allLabels[5*j+index].style.background="#ed3d3d";
                    changeLabel(allLabels[5*j+index]);
                    break;
                  }

  }


  for(let index = 0; index < allLabels.length; index++)
      allLabels[index].removeAttribute("for");


  document.getElementById("scor").innerHTML = "Scorul tău este: " + result + "/10";

}
