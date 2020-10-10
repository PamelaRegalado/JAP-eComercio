var product = {};
var comment= {};
let arrayproductos = [];
let arraycomentarios = [];
let arrayRelacionados = [];
function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
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

function showComment()  {
    let htmlContentToAppend ="";
    
    for (let i=0 ; i < arraycomentarios.length; i ++) {
    let comment= arraycomentarios[i];

    var stars =` <span class="fa fa-star checked"></span>`;
    var noStars = `<span class= "fa fa-star"></span>`;


     htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="">
            <div class="d-flex">
            <div class="starsRating">
            ` + stars.repeat(comment.score) + noStars.repeat(5-comment.score) +   `
        </div>          
        </div><br>
        <span class=""><strong> `+ comment.user +`</strong></span>
        <p class=""><br>` + comment.description + `</p>
        <small class="text-muted"> ` + comment.dateTime + `</small>
        </div>
        </div>
        `;
      
        document.getElementById("prod-list-comments").innerHTML = htmlContentToAppend;
    }
    
}
        
        

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok")
            arrayproductos = resultObj.data;
    });
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;
            var posicion = -1;

            let productNameHTML = document.getElementById("productName");
            let prouctDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");


            arrayRelacionados = product.relatedProducts;

            productNameHTML.innerHTML = product.name;
            prouctDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;

            //Muestro las imagenes en forma de galería
             cargarRelacionados(arrayRelacionados);




        }     
        

    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok")
            arraycomentarios = resultObj.data;
            showComment();
    });
});

    
function cargarRelacionados(arreglo) {
    let htmlContentToAppend = "";
    for (let i = 0; i < arreglo.length; i++) {
        posicion = arreglo[i];


//alert(arrayproductos.length);

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                <div class="col-3">
                <img src="` + arrayproductos[posicion].imgSrc + `" alt="` + arrayproductos[posicion].description + `" class="img-thumbnail">
            </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ arrayproductos[posicion].name + `</h4>
                            <small class="text-muted">` + arrayproductos[posicion].cost + arrayproductos[posicion].currency + `</small>
                        </div>
                        <p class="mb-1">` + arrayproductos[posicion].description + `</p>
                    </div>
                </div>
            </a>
            `

    }
    document.getElementById("relatedProductsContainer").innerHTML = htmlContentToAppend;
}
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("Miperfil").addEventListener("click",function(){
        location.href="my-profile.html";

    })});
    document.addEventListener("DOMContentLoaded", function(e){
        document.getElementById("Carrito").addEventListener("click",function(){
            location.href="cart.html";
    
        })});

        document.addEventListener("DOMContentLoaded", function(e){
            document.getElementById("Salir").addEventListener("click",function(){
                location.href="index.html";
        
            })});

document.addEventListener("DOMContentLoaded",function(e){
    document.getElementById("enviarEstrellas").addEventListener("click", function(){
        
        alert("Su calificación fue enviada con exito");


    })});


          




        
            
            





