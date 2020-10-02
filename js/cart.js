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
            <input onchange="precioTotal()" name="cantidad" type="number" value="` + product.count + `" min="1" max="1000" step="1"></input>

            <div class="">` + product.count + " " + "x" + " " + product.currency +` <span name="costounit"> `+ product.unitCost + `</span> </div> 
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
    }
    document.getElementById("total").innerHTML = suma;
}
