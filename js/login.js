//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function validateForm() {
    var x = document.forms["login-form"]["usuario"].value;
    if (x == "" || x == null) {
      alert("Email must be filled out");
      return false;
    }

    var y = document.forms["login-form"]["password"].value;
    if (y == "" || y == null) {
      alert("Password must be filled out");
      return false;
    }

  }