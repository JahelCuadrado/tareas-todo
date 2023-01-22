const Tarea = require("./tarea");


class Tareas {

    _listado = {};

    get listadoArray(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(descripcion=''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas =[]){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompletoTareas(){
        this.listadoArray.map((valor, indice) => {
            let indiceStr = ((indice+1)+': ').toString();
            let estadoTarea = valor.completadoEn ? 'Completada'.green : 'Pendiente'.red;
            console.log(indiceStr.green, valor.descripcion, ' :: ', estadoTarea);
        });
    }

    listarPendientesCompletadas(completadas=true){
        let tareasCompletadas = completadas
            ? this.listadoArray.filter( tarea => tarea.completadoEn )
            : this.listadoArray.filter( tarea => !tarea.completadoEn)

        tareasCompletadas.map((valor, indice) => {
                let indiceStr = ((indice+1)+': ').toString();
                let estadoTarea = valor.completadoEn ? 'Completada'.green : 'Pendiente'.red;
                console.log(indiceStr.green, valor.descripcion, ' :: ', estadoTarea);
        }); 
    }

}

module.exports = Tareas;