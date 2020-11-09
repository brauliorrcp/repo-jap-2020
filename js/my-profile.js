//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    datosUsuario = JSON.parse(localStorage.getItem("JSONDatos"));

    document.getElementById("mostrarnombre").innerHTML = datosUsuario.name;
    document.getElementById("mostraredad").innerHTML = datosUsuario.age;
    document.getElementById("mostrarmail").innerHTML = datosUsuario.mail;
    document.getElementById("mostrartel").innerHTML = datosUsuario.cel;

});

document.getElementById("nombredeperfil").innerHTML = miStorage.getItem("usuario");

let milocStorage = window.localStorage;


function datosPerfil2() {

    var datosUsuario = {
        "name": document.getElementById("nomyap").value,
        "age": document.getElementById("edad").value,
        "mail": document.getElementById("email").value,
        "cel": document.getElementById("tel").value,
    }

    if(validarUsuario()) {
    localStorage.setItem("JSONDatos", JSON.stringify(datosUsuario));

    location.href = "my-profile.html";
}}


function borrarDatos() {

    localStorage.clear();

    document.getElementById("mostrarnombre").innerHTML = "";
    document.getElementById("mostraredad").innerHTML = "";
    document.getElementById("mostrarmail").innerHTML = "";
    document.getElementById("mostrartel").innerHTML = "";

}



function validarUsuario() {
    var x = document.getElementById("nomyap").value;
    if (x == "") {
        document.getElementById("errorperfil").innerHTML = "Debe ingresar su nombre y apellido";
        document.getElementById("nomyap").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errorperfil").innerHTML = "";
      document.getElementById("nomyap").style.borderColor = "green";
    }

    var y = document.getElementById("edad").value;
    if (y == "") {
      document.getElementById("errorperfil").innerHTML = "Debe ingresar su edad";
      document.getElementById("edad").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errorperfil").innerHTML = "";
        document.getElementById("edad").style.borderColor = "green";
    }

    var y = document.getElementById("email").value;
    if (y == "") {
      document.getElementById("errorperfil").innerHTML = "Debe ingresar su email";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errorperfil").innerHTML = "";
        document.getElementById("email").style.borderColor = "green";
    }

    var y = document.getElementById("tel").value;
    if (y == "") {
      document.getElementById("errorperfil").innerHTML = "Debe ingresar su teléfono";
      document.getElementById("tel").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errorperfil").innerHTML = "";
        document.getElementById("tel").style.borderColor = "green";
        return true;
    }
}



