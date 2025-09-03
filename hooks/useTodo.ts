import { useState } from "react";
import { ITodo } from "@/types/todo";

const defaultTodos: ITodo[] = [
  {
    id: 1,
    title: "Buy Milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Buy Car",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Buy Bread",
    isCompleted: false,
  },
];
export const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);
  const completedTodos = todos.filter((item) => item.isCompleted);

  const onAddTodo = (title: ITodo["title"]) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }]);
  };

  const onDeleteTodo = (id: ITodo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheckTodo = (id: ITodo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const onUpdateTitle = (id: ITodo["id"], title: ITodo["title"]) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  return {
    onAddTodo,
    onDeleteTodo,
    onCheckTodo,
    onUpdateTitle,
    todos,
    completedTodos,
  };
};
