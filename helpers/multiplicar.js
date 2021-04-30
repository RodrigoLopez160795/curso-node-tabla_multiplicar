const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar = false,hasta) =>{
    try{
    
        let salida = '';
        for (let i = 1;i<=hasta;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log('==============='.rainbow);
            console.log(`   Tabla del ${base}`.america);
            console.log('==============='.rainbow);
            console.log(salida.bgMagenta.brightGreen);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        
        return `tabla ${base}.txt`;
    }catch(err){
        throw err;
    }
   
}

module.exports = {
    crearArchivo
}