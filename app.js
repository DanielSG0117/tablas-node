const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
console.clear();


// console.log(process.argv);
//console.log(argv)

// console.log('base: yargs', argv.base); 
//console.log(process.argv);

// const [ , ,arg3 = 'base = 5'] = process.argv;
// const[, numero=5] = arg3.split('=');

//console.log(base);
//const numero = 6

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); 

//Imprime las tablas de multiplicar de 1 al 10 
// for(let i = 1; i<= 10; i++){
//     console.log(`Tabla del ${i}`);
//     for(let j = 1; j<=10; j++){
//         const resultado = i*j
//         console.log(`${i} * ${j} = ${resultado}`);
//     }
//     console.log('\n');
// }






