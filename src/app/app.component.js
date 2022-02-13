"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { NgModel } from '@angular/forms';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo App';
        this.todo = {
            id: 0,
            description: ""
        };
        this.todos = [];
    }
    AppComponent.prototype.onAdd = function (todo) {
        var id = this.todos[this.todos.length - 1] ? this.todos[this.todos.length - 1].id + 1 : 1;
        var description = "";
        var newTodo = { id: id, description: description };
        this.todo = newTodo;
        this.todos.push(this.todo);
    };
    AppComponent.prototype.onSelect = function (todo) {
        this.todo = todo;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>{{ title }}</h1>\n    <div class=\"row\">\n      <div class=\"col\">\n        <label for=\"inputTodo\">Todo</label>\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <input [(ngModel)]=\"todo.description\" class=\"form-control\" />\n          </div>\n          <button class=\"btn btn-block btn-primary col-4\" (click)=\"onAdd(todo)\">ADD</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <ul class=\"todos\">\n          <li *ngFor=\"let data of todos\" [class.selected]=\"data === todo\" (click)=\"onSelect(data)\">\n            <span class=\"badge\">{{ data.id }}</span>{{ data.description }}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .todos {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .todos li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: 0.3em 0 0em 0;\n      border-radius: 4px;\n    }\n    .todos li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .todos li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .todos .text {\n      position: relative;\n      top: -3px;\n    }\n    .todos .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 1.2em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var TODOS = [
    { id: 1, description: "Hello World Todo" },
    { id: 2, description: "Hello World Todo2" },
    { id: 3, description: "Todo 3" },
    { id: 4, description: "Todo 4" },
    { id: 5, description: "Todo 5" },
];
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=app.component.js.map