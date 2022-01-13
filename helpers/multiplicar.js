const fs = require('fs');

const crearArchivo = ( numero = 5 ) => {
    console.clear()
    console.log('=========================')
    console.log(`       TABLA DEL ${ numero }       `)
    console.log('=========================')

    let salida = '' ;

    for (let i = 0; i < 10; i++) {
        
        salida += `${numero} x ${ i+1 } = ${ numero * (i+1)}\n`;
        
    }

    fs.writeFileSync(`tabla-${numero}.txt`, salida);

    console.log(`tabla-${numero}.txt creado`);

}

module.exports = {
    crearArchivo
}