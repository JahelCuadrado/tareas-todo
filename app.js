require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {

    let opt ='';
    const tareasDB = leerDB();
    const tareas = new Tareas();


    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    
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

                console.log();
                tareas.listadoCompletoTareas();
                
                
                break;
            case '3':

                console.log();
                tareas.listarPendientesCompletadas(true);
                
                break;
            case '4':

                console.log();
                tareas.listarPendientesCompletadas(false);
                
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

        //guardarDB(tareas.listadoArray);

        await pausa();
    } while ( opt !== '0');

}

main();