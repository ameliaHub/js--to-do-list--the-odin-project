
import { ToDo } from "./todo";
import { Project } from "./project";

//crea el HTML de un solo ToDo
function createToDoElement(toDo, index){
    const toDoElement = document.createElement("div");
    toDoElement.classList.add("toDo");

    toDoElement.innerHTML=`
        <h3>${todo.title}</h3>
        <p>Descripción: ${todo.description}</p>
        <p>Fecha de vencimiento: ${todo.dueDate}</p>
        <p>Prioridad: ${todo.priority}</p>
        <label>
            <input type="checkbox" class="completedCheckbox" data-index="${index}" ${todo.completed ? "checked" : ""}>
            Completado
        </label>
        <button class="removeToDoButton" data-index="${index}">Eliminar</button>
    `;

    return toDoElement;

}

//mostrar todos los ToDos
function displayToDos(toDoList){
    const toDoContainer = document.getElementById("toDo-container");
    toDoContainer.innerHTML = "";

    Project.getToDos().forEach((element,index) => {
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