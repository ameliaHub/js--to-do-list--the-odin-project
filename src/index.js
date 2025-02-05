import { ToDo } from "./todo";
import { Project } from "./project";

console.log("HOLA");

const project = new Project("Prueba");

const toDo1 = new ToDo('Comprar leche', 'Comprar leche en el supermercado', '2025-02-05', 'alta'); 
const toDo2 = new ToDo('Estudiar para el examen', 'Estudiar neurofisiología para el examen de mañana', '2025-02-06', 'media');

project.addToDo(toDo1);
project.addToDo(toDo2);

console.log({...project, toDos: JSON.parse(JSON.stringify(project.toDos))});

project.removeToDo('Comprar leche');
console.log('Después de eliminar:');
console.log({...project, toDos: JSON.parse(JSON.stringify(project.toDos))});

project.changePriority("Estudiar para el examen", "ELEVADA");
console.log("Después de cambiar prioridad");
console.log({...project, toDos: JSON.parse(JSON.stringify(project.toDos))});

project.toggleCompleted("Estudiar para el examen");
console.log("Después de marcar completo");
console.log({...project, toDos: JSON.parse(JSON.stringify(project.toDos))});