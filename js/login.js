//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

function validateOnblur(value, name) {
    if (value == "" || value == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su " + name; 
      return false;
    }
  }

function validateForm() {

  var x = document.forms["login-form"]["usuario"].value;
    if (x == "") {
      document.getElementById("error").innerHTML = "Debe ingresar su usuario";
      document.getElementById("usuario").style.borderColor = "red";
      return false;
    }

    var x = document.forms["login-form"]["password"].value;
    if (x == "") {
      document.getElementById("error").innerHTML = "Debe ingresar su contraseña";
      document.getElementById("password").style.borderColor = "red";
      return false;
    }
  }



  function redirect() {

    var usuario = document.getElementById("usuario").value; 
    sessionStorage.setItem("usuario", usuario); 

    var x = document.forms["login-form"]["usuario"].value;
    var y = document.forms["login-form"]["password"].value;

    if((x !== "") && (y !== "")){
      return location.href = "index1.html";
    }


  }

