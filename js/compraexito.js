//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let msgArray = "";

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            msgArray = resultObj.data;
        }
        document.getElementById("exito").innerHTML = msgArray.msg;
    });
    
});