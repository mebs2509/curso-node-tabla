//const { crearArchivo } = require('./helpers/multiplicar2')
const { Console } = require('console');
const { crearArchivo } = require('./helpers/multiplicar2');

console.clear()

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');
// console.log( base );

// console.log(process.argv);

// const numero = 3;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));