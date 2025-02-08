
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


    // Añadir el evento para eliminar ToDo
    const removeButton = toDoElement.querySelector(".removeToDoButton");
    removeButton.addEventListener("click", () => {
        toDoList.removeToDo(toDo);  // Eliminar el ToDo
        displayToDos();
    });

    // Añadir el evento para cambiar el estado de completado
    const checkbox = toDoElement.querySelector(".completedCheckbox");
    checkbox.addEventListener("change", () => {
        toDoList.toggleCompleted(toDo);  // Cambiar el estado de completado
        displayToDos();
    });

    return toDoElement;

}

//mostrar todos los ToDos
function displayToDos(){
    const toDoContainer = document.getElementById("toDo-container");
    toDoContainer.innerHTML = "";

    toDoList.getToDos().forEach((element,index) => {
        const toDoElement = createToDoElement(element, index);
        
        // Añadir el nuevo ToDo al contenedor
        toDoContainer.appendChild(toDoElement);

    });


}


//crear y añadir el boton "Nuevo ToDo"
function createAddToDoButton(){
    const btnContainer = document.getElementById("button-container");
    const addToDoBtn = document.createElement("button");
    addToDoBtn.textContent = "Nuevo ToDo";
    addToDoBtn.id = "addToDoButton";

    addToDoBtn.addEventListener("click", () =>{
        showToDoForm();
    })

    btnContainer.appendChild(addToDoBtn);
}

function showToDoForm(){
    document.body.appendChild(createForm());

    const formContainer = document.getElementById("formContainer");
    const toDoDialog = document.getElementById("toDoDialog");
    const toDoForm = document.getElementById("toDoForm");
    const cancelButton = document.getElementById("cancelButton");

    toDoDialog.showModal();

    // Evento para cerrar el formulario
    cancelButton.addEventListener("click", () => {
        toDoDialog.close();
        formContainer.remove(); // Eliminar el formulario del DOM después de cerrarlo
    });

    // Evento para manejar el envío del formulario
    toDoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addNewToDo();
        toDoDialog.close();
        formContainer.remove(); // Eliminar el formulario del DOM después de agregar el ToDo
    });
}


function createForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";
    formContainer.innerHTML = `
        <dialog id="toDoDialog">
            <form id="toDoForm">
                <label for="title">Título:</label>
                <input type="text" id="title" required>

                <label for="description">Descripción:</label>
                <input type="text" id="description" required>

                <label for="dueDate">Fecha de vencimiento:</label>
                <input type="date" id="dueDate" required>

                <label for="priority">Prioridad:</label>
                <select id="priority">
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>

                <button type="submit">Agregar</button>
                <button type="button" id="cancelButton">Cancelar</button>
            </form>
        </dialog>
    `;

    return formContainer;
}

function addNewToDo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    const newToDo = new ToDo(title, description, dueDate, priority);
    toDoList.addToDo(newToDo);

    displayToDos();
}


