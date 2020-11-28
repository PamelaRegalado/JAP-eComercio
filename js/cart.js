var articulo = {};
let productCost = 0;
let productCount = 0;
let comissionPercentage = 0.13;
let MONEY_SYMBOL = "$";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let PESO_SYMBOL = "UYU ";
let PERCENTAGE_SYMBOL = '%';
let SumaDeSubtotales=0;




function ShowArticulo(articulo) {

    let htmlContentToAppend = "";

    for (let i = 0; i < articulo.length; i++) {
        let art = articulo[i];

        htmlContentToAppend += `
        <tr>
        <td><img src=` + art.src +` class="img-thumbnail w-25"></td>
        <td>`+ art.name + `</td>
        <td>` + art.currency + `</td>
        <td><span id="unitCost${i}">` + art.unitCost + `</span></td>
        <td><input type="number" class="form-control cantidad" onChange="Subtotal(${i})" min="1" value="` + art.count + `" id="countCart${i}"></td>
        <td><small id="subtotal${i}" class="text-muted">` + art.count * art.unitCost + `</small></td>
        <td class="text-right"><button onclick="eliminarArticulos(` + i + `)" class="fas fa-trash-alt"></button></td>
        </tr>
        
        
    `
     if(art.currency == "USD"){
       SumaDeSubtotales += art.count * art.unitCost *40
    } else{
       SumaDeSubtotales += art.count * art.unitCost
    }
 };


    document.getElementById("art-list-container").innerHTML = htmlContentToAppend;

}



function Subtotal(i) {
    var cantidad = document.getElementById("countCart" + i).value;
    var unitCost = document.getElementById("unitCost" + i).innerHTML;
    var subtotal = cantidad * unitCost;
    console.log(articulo[i]);
    
    if(articulo[i].currency == "USD"){
    
        SumaDeSubtotales -= articulo[i].count * articulo[i].unitCost * 40  ; //primero se resta
        articulo[i].count = cantidad;  // con esto actualizo
        SumaDeSubtotales += articulo[i].count * articulo[i].unitCost * 40 ;
        }else{
            SumaDeSubtotales -= articulo[i].count * articulo[i].unitCost ; //primero se resta
            articulo[i].count = cantidad;  // con esto actualizo
            SumaDeSubtotales += articulo[i].count * articulo[i].unitCost ;

        }
     
    document.getElementById("subtotal" + i).innerHTML = subtotal; 
    updateTotalCosts();

}

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    

    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = MONEY_SYMBOL + SumaDeSubtotales;
    let comissionToShow = Math.round(comissionPercentage * SumaDeSubtotales);
    let totalCostToShow = MONEY_SYMBOL + (comissionToShow + SumaDeSubtotales);
    
    

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;
    
}

// Función para mostrar badge de productos en Mi Carrito (barra navegador)
var cartProduct = []
function badgesCarrito() {
    document.getElementById("navMiCarrito").innerHTML = `<span class="badge badge-primary">` + cartProduct.length + `</span>`
    badgesCarrito();
}

//función para eliminar elmento del carrito

function eliminarArticulos(posicion){
    articulo.splice(posicion,1);
    ShowArticulo();
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok")
        articulo=resultObj.data.articles;
        ShowArticulo(resultObj.data.articles);

    });
    
    document.getElementById("Premium").addEventListener("change", function(){
        comissionPercentage = 0.15;
        updateTotalCosts();
    });
    
    document.getElementById("Express").addEventListener("change", function(){
        comissionPercentage = 0.07;
        updateTotalCosts();
    });

    document.getElementById("Standard").addEventListener("change", function(){
        comissionPercentage = 0.03;
        updateTotalCosts();
    });
    
    
});
     