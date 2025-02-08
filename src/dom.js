
import { ToDo } from "./todo";
import { Project } from "./project";
import { ToDoList } from "./todolist";


let toDoList;
export function setUpDom(instance){
    toDoList = instance;
    displayToDos();
}


//crea el HTML de un solo ToDo
function createToDoElement(toDo, index){
    const toDoElement = document.createElement("div");
    toDoElement.classList.add("toDo");

    toDoElement.innerHTML=`
        <h3>${toDo.title}</h3>
        <p>Descripción: ${toDo.description}</p>
        <p>Fecha de vencimiento: ${toDo.dueDate}</p>
        <p>Prioridad: ${toDo.priority}</p>
        <label>
            <input type="checkbox" class="completedCheckbox" data-index="${index}" ${toDo.completed ? "checked" : ""}>
            Completado
        </label>
        <button class="removeToDoButton" data-index="${index}">Eliminar</button>
    `;

    return toDoElement;

}

//mostrar todos los ToDos
function displayToDos(){
    const toDoContainer = document.getElementById("toDo-container");
    toDoContainer.innerHTML = "";

    toDoList.getToDos().forEach((element,index) => {
        const toDoElement = createToDoElement(element, index);
        
        // Añadir el evento para eliminar ToDo
        const removeButton = toDoElement.querySelector(".removeToDoButton");
        removeButton.addEventListener("click", () => {
            removeToDo(index);  // Eliminar el ToDo
        });

        // Añadir el evento para cambiar el estado de completado
        const checkbox = todoElement.querySelector(".completedCheckbox");
        checkbox.addEventListener("change", () => {
            toggleCompleted(index);  // Cambiar el estado de completado
        });

         // Añadir el nuevo ToDo al contenedor
        toDoContainer.appendChild(toDoElement);

    });


}