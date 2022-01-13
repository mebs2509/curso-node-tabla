const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( numero = 5 , listar = true, hasta = 10) => {
   try {   

    let salida = '' ;
    let consola = '';

    for (let i = 0; i < hasta; i++) {
        
        salida += `${numero} x  ${ i+1 } = ${ numero * (i+1)}\n`;
        consola+= `${numero} ${ 'x'.green } ${ i+1 } ${ '='.green } ${ numero * (i+1)}\n`;
    }

    if (listar) {
        console.log('========================='.green);
        console.log('        TABLA DEL:'.green,colors.blue(numero));
        console.log('========================='.green);
        console.log(consola) ;
    }    

    fs.writeFileSync(`./archivos/tabla-${numero}.txt`, salida);

    return `tabla-${numero}.txt`;

   } catch (err) {
       throw err;
   }
    
}

module.exports = {
    crearArchivo
}