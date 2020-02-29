export class Todo {
  constructor(title: string) {
    this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
  }
  /**
   * 事項名稱
   */
  private title = '';

  /**
   * 完成與否
   */
  private completed = false;

  /**
   * 是否處於編輯模式
   */
  private editMode = false;

  /**
   * 此事項是否已經完成
   */
  get done(): boolean {
    return this.completed;
  }

  /**
   * 取得事項名稱
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * 來回切換完成狀態
   */
  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  /**
   * 取得此事項是否處於編輯模式
   */
  get editing(): boolean {
    return this.editMode;
  }

  /**
   * 設定此事項是否可被編輯
   */
  set editable(bl: boolean) {
    this.editMode = bl;
  }

  /**
   * 設定事項名稱
   */
  setTitle(title: string): void {
    this.title = title;
  }

  /**
   * 設定是否完成
   */
  setCompleted(completed: boolean): void {
    this.completed = completed;
  }
}
