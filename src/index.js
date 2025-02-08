import { ToDo } from "./todo";
import { Project } from "./project";

import { ToDoList } from "./todolist";
import { setUpDom } from "./dom";

import './styles.css'

console.log("HOLA");

//const globalToDos = [];

//function getGlobalToDos(){
//    return globalToDos;
//}

/*
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

*/

const myToDoList = new ToDoList();

//prueba
// Crear algunos ToDos de prueba
const toDo1 = new ToDo("Comprar leche", "Ir al supermercado", "2025-02-10", "Alta");
const toDo2 = new ToDo("Hacer ejercicio", "Ir al gimnasio", "2025-02-12", "Media");
const toDo3 = new ToDo("Estudiar JavaScript", "Repasar closures y promesas", "2025-02-15", "Baja");

myToDoList.addToDo(toDo1);
myToDoList.addToDo(toDo2);
myToDoList.addToDo(toDo3);

const project1 = new Project("Proyecto de trabajo");
project1.addToDo(toDo1);


setUpDom(myToDoList);



