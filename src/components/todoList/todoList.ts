import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {
  @Prop({ default: () => [] }) todos!: string[];
  todoInput = "";
  editingIndex = -1;

  public addTodo() {
    if (this.todoInput) {
      this.todos.push(this.todoInput);
      this.todoInput = "";
    }
  }
  public deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
  public editTodo(index: number) {
    this.editingIndex = index;
  }
  public completeTodo(index: number) {
    const todo = this.todos[index];
    if (todo.startsWith("<s>")) {
      this.todos.splice(index, 1, todo.slice(3, -4));
    } else {
      this.todos.splice(index, 1, `<s>${todo}</s>`);
    }
  }
}
