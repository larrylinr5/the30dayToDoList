import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'; // service
import { Todo } from './todo.model'; // class

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }


  /**
   * 新增代辦事項
   */
  addTodo(inputRef: HTMLInputElement): void {
    console.log(inputRef.value);
    const todo = inputRef.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  getList(): Todo[] {
    return this.todoListService.getList();
  }
  /**
   * 移除待辦事項
   */
  remove(index: number): void {
    this.todoListService.remove(index);
  }

  /**
   * 開始編輯待辦事項
   */
  edit(todo: Todo): void {
    todo.editable = true;
  }

  /**
   * 更新待辦事項
   * todo - 原本的待辦事項 newTitle - 新的事項名稱
   */
  update(todo: Todo, newTitle: string): void {

    if (!todo.editing) {
      return;
    }

    const title = newTitle.trim();

    // 如果有輸入名稱則修改事項名稱
    if (title) {
      todo.setTitle(title);
      todo.editable = false;

      // 如果沒有名稱則刪除該項待辦事項
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }

  }

  /**
   * 取消編輯狀態
   *
   * @param {Todo} todo - 欲取消編輯狀態的待辦事項
   * @memberof TodoListComponent
   */
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }
}
