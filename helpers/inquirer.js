const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea nueva`
            }
            ,
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            }
            ,
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            }
            ,
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            }
            ,
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            }
            ,
            {
                value: '6',
                name: `${'6.'.green} Borrar Tarea`
            }
            ,
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
];


const pausaEnter = [
    {
        name: 'enter',
        type: 'input',
        message: `Pulsa ${'ENTER'.green} para continuar`,
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.green); 
    console.log(' Seleccione una opción'.white) 
    console.log('=======================\n'.green); 
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}



const pausa = async() =>{
    console.log('\n');
    await inquirer.prompt(pausaEnter);
}



const leerInput = async(mensaje) =>{
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'Por favor, ingrese un valor.'
                }
                return true;
            }
        }
    ];

    const {descripcion} = await inquirer.prompt(question);
    return descripcion;
}


const listadoTareasBorrar = async( tareas = []) => {
    const choices = tareas.map( (tarea, id) => {
        const idx = (id+1 ).toString().green
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`,
        }  
    });

    choices.unshift({
        value:'0',
        name:'0. '.green + 'Cancelar.'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];
    const { id } = await inquirer.prompt(preguntas);
    return id;
}


const confirmar = async(message) =>{

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}


const listadoTareasChecklist = async( tareas = []) => {
    const choices = tareas.map( (tarea, id) => {
        const idx = (id+1).toString().green
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`,
            checked: tarea.completadoEn ? true : false
        }  
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasChecklist
}