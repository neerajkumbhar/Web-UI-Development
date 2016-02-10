function checkAnswer(qType, quesNo){

  var arrOfAns = [4, 1, 1, 2];

  var tempQuesAnsd = parseInt(localStorage.getItem("questionsAnswered"));

  var ansArray = JSON.parse(localStorage.getItem("ans"));

  // ansArray = JSON.parse(ansArray);

  var radioId = "radio" + arrOfAns[quesNo - 1];

  localStorage.setItem("questionsAnswered", tempQuesAnsd + 1);



  if(quesNo == 3){
    if(document.getElementById('radio1').checked == true && document.getElementById('radio2').checked){
      ansArray[1] = ansArray[1] + 1;
      localStorage.setItem("ans",JSON.stringify(ansArray));
    }

  }


  if(document.getElementById(radioId).checked == true && quesNo != 3){

    if(qType == "quant") { ansArray[0] = ansArray[0] + 1; }
    if(qType == "read") { ansArray[1] = ansArray[1] + 1; }
    if(qType == "av") { ansArray[2] = ansArray[2] + 1; }

    localStorage.setItem("ans",JSON.stringify(ansArray));

    var tempCorrectAnsCnt = parseInt(localStorage.getItem("correctAnsCnt",0));

    localStorage.setItem("correctAnsCnt",tempCorrectAnsCnt + 1);
  }
}