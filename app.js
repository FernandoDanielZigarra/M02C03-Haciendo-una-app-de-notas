const tareas = require('./tareas.json');

const process = require('process');

const listarTarea = require("./funcionesDeTareas");

let n




if(process.argv[2] !== undefined){
    n = process.argv[2].toLowerCase();
    switch (n){
        case "listar":
            listarTarea(tareas);
        break;
        default:
            console.log("No entiendo que quieres hacer.")
    }
}else{
    console.log("Atención - Tienes que pasar una acción.");
}