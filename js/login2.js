function validateOnblur(value, name) {
    if (value == "" || value == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su " + name;
      return false;
    }
  }

function validateU() {

  var x = document.forms["login-form"]["usuario"].value;
    if (x == "" || x == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su usuario";
      return false;
    }
  }

  function validateP() {
    var x = document.forms["login-form"]["password"].value;
    if (x == "" || x == null) {
      document.getElementById("error").innerHTML = "Debe ingresar su contraseña";
      return false;
    }
  }

  function validateTodo() {
    if(validateU()) {
      return true;
  }
}

  function redirect() {
    if(validateU && validateP) {
      return location.href = "index1.html";
    }
  }