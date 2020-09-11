//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});


var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productCurrencyHTML = document.getElementById("moneda");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.cost;
            productCurrencyHTML.innerHTML = category.currency;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});

var categoriesArray = [];

function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action" onclick="desplegar(LIST_URL2)">
            <div class="row">
                <div class="col-3">
                <div>  `+ category.score + ` </div>
                    <div>  `+ category.user + ` </div> <small> ` + category.dateTime + ` </small> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">

                    </div>
                    <div> ` + category.description + ` </div>
                </div>
            </div>
        </div>
        `

        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }
   
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});



function validateComment() {


    var x = document.getElementById("comentario").value;
      if (x == "") {
        document.getElementById("errorcomment").innerHTML = "Debe ingresar su comentario";
        document.getElementById("comentario").style.borderColor = "red";
        return false;
      } else {
        document.getElementById("errorcomment").innerHTML = "";
        document.getElementById("comentario").style.borderColor = "green";
        return true;
      }
}

function validateStars() {
    var radios = document.getElementsByName("estrellas");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        document.getElementById("errorEstrellas").innerHTML = "Debe ingresar su valoración";
        return formValid;
    } else {
        document.getElementById("errorEstrellas").innerHTML = ""; 
        return formValid;
    }
}

function validarMensaje() {

    if(validateComment() && validateStars()) {
        document.getElementById("mensajeCorrecto").innerHTML = "Su mensaje se envió correctamente"; 
    } else {
        document.getElementById("mensajeCorrecto").innerHTML = ""; 
    }}


