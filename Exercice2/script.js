let fruits = ["Pomme", "Banane","Orange","Kiwi","Ananas"];
function addArrayValue(){
  let addNewFruit = document.getElementById("addNewFruit").value;
  fruits.unshift(addNewFruit);
  alert(addNewFruit + " est ajouté");
}

function showArrayValue() { 
  alert(fruits);
 }