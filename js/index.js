//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("boton").addEventListener("click",function(){
    usuario= document.getElementById("inputUsuario").value;
    contraseña= document.getElementById("inputContraseña").value;
    modifUsuario= document.getElementById("inputUsuario").placeholder= "Ingresa tu usuario";
    modifContraseña= document.getElementById("inputContraseña").placeholder= "Ingresa tu contraseña";
//alert(usuario);
//alert(contraseña);
    if(usuario!="" && contraseña!=""){        
        window.open("inicio.html");
        //location.href="index.html"; 
        //document.location.href = '/index.html';  
        //window.location.replace("index.html");

        //index.html
        localStorage.setItem('usuario', usuario);
       // document.getElementById("labelUsuario").value = window.opener.usuario;
        //document.getElementById("labelContraseña").value = window.opener.usuario;
        localStorage.setItem('password', contraseña);
 } else{    
    return modifUsuario|| modifContraseña;
    
}


}
)});

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



    