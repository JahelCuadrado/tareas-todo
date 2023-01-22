require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {

    let opt ='';
    const tareas = new Tareas();
    
    
    do {

        //imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                
                const descripcion = await leerInput('Descripción: ')
                tareas.crearTarea(descripcion);
                console.log(descripcion);

                break;
            case '2':

                console.log('\n');
                tareas.listadoArray.forEach(valor => {
                    console.log(valor);
                })
                
                break;
            case '3':
                
                break;
            case '4':
                
                break;
            case '5':
                
                break;
            case '6':
                
                break;
            case '7':
                
                break;
        
            default:
                break;
        }

        await pausa();
    } while ( opt !== '0');

}

main();