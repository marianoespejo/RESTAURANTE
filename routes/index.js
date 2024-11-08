var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");


router.get('/', function(req, res, next) { 
  res.render('home', {head_title: "Principal"});
});


router.get('/celebraciones', function(req, res, next) {
  res.redirect("/celebraciones.html");
});


router.get('/contacta-con-nosotros', function(req, res, next) {
  res.render("contacto", {head_title: "Contacto"});
});

router.post('/contacta-con-nosotros', function(req, res, next) {
  console.log( req.body )
  datos.addContacto( req.body.nombre, req.body.email, req.body.mensaje, req.body.info );
  res.redirect('/contacta-con-nosotros');
});



router.get('/home', function(req, res, next) {
  const imagenes = datos.getAllPosts();
  res.render("galeria",{head_title:"Galerias de imágenes", imagenes:imagenes});
});


router.get('/galeria', function(req, res, next) {
  const imagenes = datos.getAllPosts();
  res.render("galeria",{head_title:"Galerias de imágenes", imagenes:imagenes});
});




