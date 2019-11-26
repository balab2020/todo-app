import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoController } from './todo.controller';
import { AppService } from './app.service';
import { TodoService } from './todo.service';
@Module({
  imports: [],
  controllers: [
    AppController,
    TodoController
  ],
  providers: [
    AppService,
    TodoService
  ]
})
export class AppModule { }
