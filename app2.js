//const { crearArchivo } = require('./helpers/multiplicar2')
const { Console } = require('console');
const { crearArchivo } = require('./helpers/multiplicar2');

console.clear()

const numero = 3;

crearArchivo(numero)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));