import { ToDo } from "./todo";
import { Project } from "./project";

export class ToDoList{
    constructor(){
        if (ToDoList.instance) {
            return ToDoList.instance;  // Si ya existe, devuelve la instancia única
        }

        this.globalToDos = [];
        this.projects = [];

        ToDoList.instance = this;  // Guarda la instancia para futuros usos
        return this;
    }

    getToDos(){
        return this.globalToDos;
    }

    getProjects(){
        return this.projects;
    }

    addToDo(toDo){
        this.globalToDos.push(toDo);
    }

    removeToDo(toDo){
        this.globalToDos.pop(toDo);
    }

    addProject(project){
        this.projects.push(project);
    }

    removeProject(project){
        this.projects.pop(project);
    }

    toggleCompleted(title){
        const index = this.globalToDos.findIndex(toDo => toDo.title === title);

        // Si encontramos el todo
        if (index !== -1) {
            this.globalToDos.at(index).toggleCompleted();  
        } else {
            console.log('ToDo not found');
        }
    }

    changePriority(title, newPriority){
        const index = this.globalToDos.findIndex(toDo => toDo.title === title);

        // Si encontramos el todo
        if (index !== -1) {
            this.globalToDos.at(index).changePriority(newPriority);     
        } else {
            console.log('ToDo not found');
        }
    }


}

