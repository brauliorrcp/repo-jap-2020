//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_2).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartArray = resultObj.data;
            showCartProduct(cartArray.articles);
        }
    });

});


function showCartProduct(array) {

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let product = array[i];

        if (product.currency == "USD") {
            product.unitCost = product.unitCost * 40;
            product.currency = "UYU";
        }

    

    htmlContentToAppend += `
        
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
            <img src="` + product.src + `" alt="` + product.name + `" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ product.name +`</h4>
                <small class="text-muted">` + product.currency + " " + product.unitCost + ` </small>
            </div>
            <label>Cantidad</label>
            <input id="inputcant`+i+`" onchange="precioTotal()" name="cantidad" type="number" value="` + product.count + `" min="1" max="1000" step="1"></input>

            <div>Subtotal por producto: UYU <span id="porproducto`+i+`"></span>  </div>
            <div style="display:none;" class=""> `+ product.count + " " + "x" + " " + product.currency +` <span name="costounit"> `+ product.unitCost + `</span> </div> 
        </div>
        
    </div>
</div>
`

        document.getElementById("prodselec").innerHTML = htmlContentToAppend;
       
}

    precioTotal();
}

function precioTotal() {

    let cantidad = document.getElementsByName("cantidad");
    let costo = document.getElementsByName("costounit");
    let suma = 0;

    for (let i = 0; i < cantidad.length; i++)  {
        suma += parseInt(costo[i].innerHTML) * parseInt(cantidad[i].value);
        document.getElementById("porproducto"+i).innerHTML = parseInt(costo[i].innerHTML) * parseInt(cantidad[i].value);
    }
    document.getElementById("total").innerHTML = suma;

    document.getElementById("premium").checked = false;
    document.getElementById("express").checked = false;
    document.getElementById("standard").checked = false;


}



function validarCampos() {
    //Método de envío

    //Dirección y país
    var x = document.forms["envioform"]["direccion"].value;
    if (x == "") {
      document.getElementById("errordir").innerHTML = "Debe ingresar su dirección";
      document.getElementById("direccion").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errordir").innerHTML = "";
      document.getElementById("direccion").style.borderColor = "green";
    }

    var y = document.forms["envioform"]["pais"].value;
    if (y == "") {
      document.getElementById("errorpais").innerHTML = "Debe ingresar su país";
      document.getElementById("pais").style.borderColor = "red";
      return false;
    } else {
        document.getElementById("errorpais").innerHTML = "";
        document.getElementById("pais").style.borderColor = "green";
    }

    //Método
    var radios = document.getElementsByName("envio");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        document.getElementById("errormetodo").innerHTML = "Debe elegir un método de envío";
        return formValid;
    } else {
        document.getElementById("errormetodo").innerHTML = ""; 
        return formValid;
    }
}

function validarPago() {
    var radiospago = document.getElementsByName("pago");
    var formValid2 = false;

    var i = 0;
    while (!formValid2 && i < radiospago.length) {
        if (radiospago[i].checked) formValid2 = true;
        i++;        
    }

    if (!formValid2) {
        document.getElementById("errorpago").innerHTML = "Debe elegir una forma de pago";
        return formValid2;
    } else {
        document.getElementById("errorpago").innerHTML = ""; 
        return formValid2;
    }
}

function validarTodo() {
    if(validarCampos() && validarPago()) {
        location.href = "compraexito.html";
    }
}

function datosTarjeta() {
    let nombre = $("#exampleModal1 #nombretarj").val().trim()
    document.getElementById("datostarj1").innerHTML = "Nombre: " + nombre;

    let apellido = $("#exampleModal1 #apetarj").val().trim()
    document.getElementById("datostarj2").innerHTML = "Apellido: " + apellido;

    let numero = $("#exampleModal1 #numtarj").val().trim()
    document.getElementById("datostarj3").innerHTML = "Número de la tarjeta: " + numero;

    let codigo = $("#exampleModal1 #codtarj").val().trim()
    document.getElementById("datostarj4").innerHTML = "Código de seguridad: " + codigo;

    $('#exampleModal1').modal('hide')
}

function datosBanco() {
    let nombre = $("#exampleModal2 #nombank").val().trim()
    document.getElementById("datostarj5").innerHTML = "Nombre: " + nombre;

    let apellido = $("#exampleModal2 #apebank").val().trim()
    document.getElementById("datostarj6").innerHTML = "Apellido: " + apellido;

    let numero = $("#exampleModal2 #numbank").val().trim()
    document.getElementById("datostarj7").innerHTML = "Número de cuenta: " + numero;

    let codigo = $("#exampleModal2 #codbank").val().trim()
    document.getElementById("datostarj8").innerHTML = "Contraseña: " + codigo;

    $('#exampleModal2').modal('hide')
}

function precioFinal(envio) {

    let subtotal = document.getElementById("total").innerHTML;
    let costoenvio = parseInt(subtotal) * envio;
    let total = parseInt(subtotal) + costoenvio;

    document.getElementById("totalfinal").innerHTML = total;
    document.getElementById("totalenvio").innerHTML = costoenvio;
    

}