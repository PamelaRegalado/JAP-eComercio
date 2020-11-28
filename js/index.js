//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("boton").addEventListener("click", function () {
        usuario = document.getElementById("usuario").value;
        contraseña = document.getElementById("contraseña").value;
        modifUsuario = document.getElementById("usuario").placeholder = "Ingresa tu usuario";
        modifContraseña = document.getElementById("contraseña").placeholder = "Ingresa tu contraseña";
        //alert(usuario);
        //alert(contraseña);
        if (usuario != "" && contraseña != "") {
            window.open("inicio.html");
            //location.href="index.html"; 
            //document.location.href = '/index.html';  
            //window.location.replace("index.html");

            //index.html
            localStorage.setItem('usuario', usuario);
            // document.getElementById("labelUsuario").value = window.opener.usuario;
            //document.getElementById("labelContraseña").value = window.opener.usuario;
            localStorage.setItem('contraseña', contraseña);
        } else {
            return modifUsuario || modifContraseña;

        }


    }
    )
});





