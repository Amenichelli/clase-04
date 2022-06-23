const Contenedor = require('./Contenedor.js');
console.clear();

const productos = new Contenedor('contenedor.txt');

//Pruebo el método save
productos.save({
    title: 'title',
    price: 100,
    thumbnail: 'url de la foto del producto'
});