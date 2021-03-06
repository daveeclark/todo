import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date){
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  // todos = [
  //   new Todo(1, 'Learn to Dance', true, new Date()),
  //   new Todo(2, 'Become an Angular Expert', false, new Date()),
  //   new Todo(3, 'Visit the Islands', false, new Date()),
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('username').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('username', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])
    this.todoService.updateTodo('username', id, todo).subscribe (
      response => {
        console.log(response);
        this.message = `Update of Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
  

}
