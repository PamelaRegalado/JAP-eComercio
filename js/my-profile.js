var usuario={};

function guardar(){
    var usuario={}; //defino el usuario
    var nombre=document.getElementById('nombre').value;//obtengo los valores
    var apellido=document.getElementById('apellido').value;
    var edad=document.getElementById('edad').value;
    var dirección=document.getElementById('dirección').value;
    var telefono=document.getElementById('tel').value;
    
    
    
    usuario.nombre= nombre;//guardo los valores
    usuario.apellido= apellido;
    usuario.edad= edad;
    usuario.dirección=dirección;
    usuario.telefono= telefono;
    

    localStorage.setItem("lista",JSON.stringify(usuario)); //Guardo la lista en localStorage
    //mostrar(perfil);//llamo a la funcion para mostrar los datos
    console.log("aca estamos")
    muestro();

}

function muestro(){
    var perfil = JSON.parse(localStorage.getItem("lista"));
    document.getElementById("muestroPerfil").innerHTML= `
    <h1>Nombre:` + perfil.nombre + ` </h1>
    <p>Apellido:` + perfil.apellido + `</p>
    <p>Edad: ` + perfil.edad + `</p>
    <p>Dirección:` + perfil.dirección + `</p>
    <p>Telefono:` + perfil.telefono + `</p>`;
    console.log("devuelta");
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function (e) {
    
    
     var usuario={}; //defino el usuario
    if( nombre!=null && telefono!=null &&  apellido!=null){
        muestro();
    } else{
        ("");
    
    }

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
    