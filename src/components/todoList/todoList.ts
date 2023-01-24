import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {
  @Prop({ default: () => [] }) todos!: string[];
  todoInput = "";

  addTodo() {
    if (this.todoInput) {
      this.todos.push(this.todoInput);
      this.todoInput = "";
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  completeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
