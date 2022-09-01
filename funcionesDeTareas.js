const listarTareas = (tareas) => {
    tareas.forEach((tarea,index) => {
        console.log(`${index + 1} - Titulo: ${tarea.titulo} - Estado: ${tarea.estado}`);
    });
}

module.exports = listarTareas;