import { Injectable } from '@angular/core';

import { Todo } from './todo.model'; //class

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  private list: Todo[] = [];

  add(title: string): void {

    // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  getList(): Todo[] {
    return this.list;
  }

  /**
   * 移除待辦事項
   */
  remove(index: number): void {
    this.list.splice(index, 1);
  }

}
