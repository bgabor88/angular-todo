import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First TODO element',
        completed: false,
      },
      {
        content: 'Second TODO',
        completed: true,
      },
    ];
  }

  toggleDone(id:number):void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id:number):void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
