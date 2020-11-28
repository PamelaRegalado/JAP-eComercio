const http = require ('http'); //estoy usando la librería htpp

const express = require('express');

const app= express(); //creo la app

var fs= require ('fs'); //obteniendo acceso al sistema de archivos
const cors= require('cors');
var bodyParser = require ('body-Parser'); //obtengo la libreria

//body parser for parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get ('/',function(req,res){ //res(hago mi  peticion) y res(tengo que responder)
    res.send('Bienvenidos a mi servidor');
});

//LOS DEL CARRITO
const articulos = require ('./json/cart/654.json'); //  compra susuki y pino
const pino = require ('./json/cart/987.json'); // compra pino
const compra = require ('./json/cart/buy.json'); //  mensaje compra realizada con exito
//LOS DE CATEGORÍA
const autos = require ('./json/category/1234.json'); // categoria autos
const todos= require ('./json/category/all.json'); // todas las categorias
//LOS DE PRODUCTOS
const producto = require ('./json/product/5678.json'); // product - chevrolet
const comentarios= require('./json/product/5678-comments.json');// comentarios de los usuarios
const descripciones = require ('./json/product/all.json');// descripcion, precio de los autos
const publicacion= require ('./json/product/publish.json'); // publicacion realizada con éxito


app.get('/articulos',function(req,res){ 
    res.json(articulos);
});

app.get('/pino',function(req,res){ 
    res.json(pino);
});
app.get('/compra',function(req,res){ 
    res.json(compra);
});
app.get('/autos',function(req,res){ 
    res.json(autos);
});

app.get('/todos',function(req,res){ 
    res.json(todos);
});
app.get('/producto',function(req,res){ 
    res.json(producto);
});
app.get('/comentarios',function(req,res){ 
    res.json(comentarios);
});
app.get('/descripciones',function(req,res){ 
    res.json(descripciones);
});
app.get('/publicacion',function(req,res){ 
    res.json(publicacion);
});

app.put('/publicacion', (req, res)=>{
    res.send('El PUT se hizo bien');
});

app.post("/prueba", function (req, res) {
    res.send("El post se hizo bien");
});

const servidor=  http.createServer(app); //con esto creo el servidor
const puerto= 3000;
servidor.listen(puerto);
console.debug('Funcionando en puerto'+ puerto);
module.exports = app;