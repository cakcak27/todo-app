import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col">
        <label for="inputTodo">Todo</label>
        <div class="row">
          <div class="col-8">
            <input [(ngModel)]="todo.description" class="form-control" />
          </div>
          <button class="btn btn-block btn-primary col-4" (click)="onAdd(todo)">ADD</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="todos">
          <li *ngFor="let data of todos" [class.selected]="data === todo" (click)="onSelect(data)">
            <span class="badge">{{ data.id }}</span>{{ data.description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .todos {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .todos li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: 0.3em 0 0em 0;
      border-radius: 4px;
    }
    .todos li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .todos li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .todos .text {
      position: relative;
      top: -3px;
    }
    .todos .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 1.2em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent  {
  title = 'Todo App';

  todo:Todo = {
    id: 0,
    description: ""
  }

  todos:Todo[] = [];


  onAdd(todo: Todo): void {
    let id = this.todos[this.todos.length-1] ? this.todos[this.todos.length-1].id + 1 : 1
    let description = ""
    let newTodo: Todo = { id, description }
    this.todo = newTodo
    this.todos.push(this.todo)
  }

  onSelect(todo: Todo): void {
    this.todo = todo;
  }

}
const TODOS: Todo[] =[
  { id: 1, description: "Hello World Todo" },
  { id: 2, description: "Hello World Todo2" },
  { id: 3, description: "Todo 3" },
  { id: 4, description: "Todo 4" },
  { id: 5, description: "Todo 5" },
]

export class Todo{
  id: number;
  description: string;
}
