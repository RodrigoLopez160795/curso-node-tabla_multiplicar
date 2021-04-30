const argv = require('yargs')
                .options({
                    'b':{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'Muestra la base'
                    },
                    'l':{
                        alias:'listar',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla'
                    },
                    'h':{
                        alias:'hasta',
                        type:'number',
                        demandOption:true,
                        describe:'Muestra hasta donde se genera la tabla'
                    }
                })
                .check((argv,options)=>{
                    if(isNaN(argv.base)){
                        throw 'La base tiene que ser un numero'
                    }

                    return true;
                })
                .argv;

module.exports = argv;