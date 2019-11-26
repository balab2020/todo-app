import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import Todo from './models/Todo';

@Controller('todos')
export class TodoController {
    constructor(private readonly appService: TodoService) { }

    @Get()
    getAll(): Todo[] {
        return this.appService.getAll();
    }

    @Get('/completed')
    getAllCompleted(): Todo[] {
        return this.appService.getAll().filter(t => t.completed);
    }

    @Get(':id')
    getById(@Param() params): Todo {
        const { id } = params;
        return this.getAll().filter(i => i.id === Number(id))[0];
    }

    @Post()
    async create(@Body() todo: Todo) {
        console.error(todo);
        return this.appService.addTodo(todo);        
    }

    @Put('/complete/:id')
    complete(@Param() params):Todo {
        return this.appService.completeTodo(Number(params.id));
    }

}
