import fs from "fs";
const todosPath = "todos.json";

type Todo = {
    id: number;
    title: string;
}

function getTodos(): Todo[] {
    if (!fs.existsSync(todosPath)) {
        return [];
    }

    const todos = fs.readFileSync(todosPath, "utf8");
    return JSON.parse(todos.toString()) as Todo[];
}

function listTodos(): void {}

function saveTodos(todos: Todo[]): void {
    fs.writeFileSync(todosPath, JSON.stringify(todos));
}

function removeTodo(id: number): void {}

function addTodo(task: string): void {
    const todos: Todo[] = getTodos();

}

