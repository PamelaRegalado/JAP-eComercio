//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

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
    