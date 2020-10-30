//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

miStorage = window.localStorage;

var datosUsuario = {
    "name": "",
    "age": null,
    "mail": "",
    "cel": "",
}

function datosPerfil() {

    let nombre = document.getElementById("nomyap").value ;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;

    localStorage.setItem("nomyap", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("email", email);
    localStorage.setItem("tel", tel);

    datosUsuario.name = localStorage.getItem("nomyap");
    datosUsuario.age = localStorage.getItem("edad");
    datosUsuario.mail = localStorage.getItem("email");
    datosUsuario.cel = localStorage.getItem("tel");

document.getElementById("mostrarnombre").innerHTML = localStorage.getItem("nomyap");
document.getElementById("mostraredad").innerHTML = localStorage.getItem("edad");
document.getElementById("mostrarmail").innerHTML = localStorage.getItem("email");
document.getElementById("mostrartel").innerHTML = localStorage.getItem("tel");

}

document.getElementById("mostrarnombre").innerHTML = localStorage.getItem("nomyap");
document.getElementById("mostraredad").innerHTML = localStorage.getItem("edad");
document.getElementById("mostrarmail").innerHTML = localStorage.getItem("email");
document.getElementById("mostrartel").innerHTML = localStorage.getItem("tel");


function borrarDatos() {

    localStorage.clear();

    document.getElementById("mostrarnombre").innerHTML = "";
    document.getElementById("mostraredad").innerHTML = "";
    document.getElementById("mostrarmail").innerHTML = "";
    document.getElementById("mostrartel").innerHTML = "";

}



