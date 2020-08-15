//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function validate(value, name) {
    if (value == "" || value == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su " + name;
      return false;
    }
  }

  function validateForm() {
    var x = document.forms["login-form"]["usuario"].value;
    if (x == "" || x == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su usuario";
      return false;
    }

    var x = document.forms["login-form"]["password"].value;
    if (x == "" || x == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su contraseña";
      return false;
    }
  }

  function redirect() {
    if(validateForm()) {
    window.location.href = "https://raw.githubusercontent.com/brauliorrcp/repo-jap-2020/master/index1.html";
    }
  }

