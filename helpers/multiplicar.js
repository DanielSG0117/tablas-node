
const colors = require('colors');
const fs = require('node:fs');

const crearArchivo = async (numero = 5, listar, hasta = 10) => {

    try {
        let salida = ''; 
        let consola = '';

        for (i = 1; i <= hasta; i++) {
            const resultado = numero * i;
            salida += (`${numero} * ${i} = ${resultado} \n`);
            consola += (`${numero} * ${i} = ${colors.green(resultado)} \n`);
        }
        if (listar) {
            console.log('===================='.green)
            console.log(`Tabla del`, colors.green(numero));
            console.log('====================.'.green)
            console.log(consola)
        }

        // fs.writeFile(`Tabla-${numero}.txt`, salida, (err) =>{
        //     if(err) throw err;
        //     console.log(`Tabla del ${numero} creada`)
        // })

        fs.writeFileSync(`./salida/Tabla-${numero}.txt`, salida)
        return `Tabla-${numero}.txt`

    } catch (error) {
        throw error;
    }


}


module.exports = {
    crearArchivo
}