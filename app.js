const numero = 5
const fs = require('fs');


console.clear()
console.log('=========================')
console.log(`       TABLA DEL ${numero}       `)
console.log('=========================')

let salida = '' ;

for (let i = 0; i < 10; i++) {
    
    salida += `${numero} x ${ i+1 } = ${ numero * (i+1)}\n`;
    
}

// fs.writeFile(`tabla-${numero}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${numero}.txt creado`)
// })

fs.writeFileSync(`tabla-${numero}.txt`, salida);