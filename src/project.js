export class Project{
    constructor(name){
        this.name = name;
        this.toDos =[];
    }

    addToDo(toDo){
        this.toDos.push(toDo);
    }

    removeToDo(title){
        const index = this.toDos.findIndex(toDo => toDo.title === title);

        // Si encontramos el todo, lo eliminamos
        if (index !== -1) {
            this.toDos.splice(index, 1);  // Elimina 1 elemento en la posición 'index'
        } else {
            console.log('ToDo not found');
        }
    }

    

    getToDos(){
       return this.toDos; 
    }
}