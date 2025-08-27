import { StatusBar, StyleSheet, View } from "react-native";
import { Header } from "@/layout/Header";
import { COLORS } from "@/constants/ui";
import { useState } from "react";
import { ITodo } from "@/types/todo";
import { TodoList } from "@/layout/TodoList/TodoList";
import TodoCreator from "@/layout/TodoCreator";

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

export default function Index() {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

  const addTodo = (title: ITodo["title"]) => {
    setTodos([...todos, { id: todos.length + 1, title, isCompleted: false }]);
  };

  const completedTodos = todos.filter((item) => item.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
