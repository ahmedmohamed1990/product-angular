
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[];
  filerto: any[];
  constructor() {
    this.todos = [];
    this.filerto = [];
  }

  ngOnInit(): void {}

  add(event: any) {
    if (!event.value) return;
    this.todos.push({ id: this.todos.length, name: event.value });
    this.filerto = this.todos;
    event.value = '';
  }

  delete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.filerto = this.todos;
  }

  filter(to: string) {
    this.filerto = this.todos.filter((todo) => todo.name.includes(to));
  }
}
