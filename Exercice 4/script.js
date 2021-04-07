 function colorFrenchFlagQuiz() { 
    let askAboutColorFrenchFlag = prompt("Quel est la première couleur du drapeau français ?")
      if (askAboutColorFrenchFlag == "bleu") {
          alert("Bien joué")
      }
      else if (askAboutColorFrenchFlag == "blanc"){
          alert("La couleur blanche est en deuxiéme position")
      }
      else if (askAboutColorFrenchFlag == "rouge"){
        alert("La couleur rouge est en derniere position")
      }
      else{
        alert("Veuillez vérifier votre réponse")
      }
      return ;
   }      
   colorFrenchFlagQuiz();