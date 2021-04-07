let x = 0;
function incrementFunction() {
    y = x++;
    document.getElementById("click").innerHTML = "Vous avez cliqué : " + y;
    return y
  }
