import { Injectable } from '@nestjs/common';
import Todo from './models/Todo';

export interface ITodoService {
    getAll(): Todo[];
}

@Injectable()
export class TodoService implements ITodoService {   

    private todos: Todo[] = [
        new Todo('My first todo task'),
        new Todo('My first completed todo task', true)
    ];

    addTodo(newTodo: Todo): Todo {
        const todo = new Todo(newTodo.task, newTodo.completed);
        this.todos.push(todo);
        return todo;
    }

    getAll(): Todo[] {
        return this.todos;
    }
     
    completeTodo(id: number): Todo {
        const todo = this.todos.filter(t => t.id === id)[0];
        todo && (todo.completed = true);
        return todo;
    }

}
