 const fs = require('fs')

const archivo = './db/tareas.json'
 
 const guardarDB = (data) => {
    fs.writeFile(archivo, JSON.stringify(data), (err) =>{
        if(err) throw err;
        console.log('Tarea Guardada!');
    })
 }

 const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
        
    }
    const data = fs.readFileSync(archivo ,'utf-8')
    return JSON.parse(data);
 }

 module.exports = {
    guardarDB,
    leerDB
 }