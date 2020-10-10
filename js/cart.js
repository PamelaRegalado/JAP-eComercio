var articulo={};

function ShowArticulo(articulo){

    let htmlContentToAppend = "";
    htmlContentToAppend += `
        <div class="row">
            <div class="col-3">
                <img src="` + articulo.src + `" alt="` + articulo.name + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ articulo.name +`</h4>
                    <small class="text-muted">` + articulo.currency + `<span id="unitCost">`+ articulo.unitCost  + `</span>`+ `</small>
                    <div>
                    <input type="number" class="form-control cantidad" onChange="Subtotal(${articulo.unitCost})"  min="1" value="` + articulo.count + `" id="countCart">
                    <br>
                    <br>
                    <h3 class="mb-1"> Subtotal </h3>
                    <small id="subtotal" class="text-muted">` + articulo.count*articulo.unitCost + `</small>

                    </div>
                </div>
                </div>
        </div>
    `


document.getElementById("art-list-container").innerHTML = htmlContentToAppend;
}

function Subtotal(){
    var cantidad= document.getElementById("countCart").value;
    var unitCost= document.getElementById("unitCost").innerHTML;
   console.log(cantidad);
   var subtotal= cantidad*unitCost;
   console.log(subtotal);
   document.getElementById("subtotal").innerHTML= subtotal;
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        console.log(resultObj.data.articles);
        ShowArticulo(resultObj.data.articles[0]);
        
        
        
    });
    
});




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

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
    