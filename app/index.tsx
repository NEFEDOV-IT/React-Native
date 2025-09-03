import { StatusBar, StyleSheet, View } from "react-native";
import { Header } from "@/layout/Header";
import { COLORS } from "@/constants/ui";
import { useState } from "react";
import { ITodo } from "@/types/todo";
import { TodoList } from "@/layout/TodoList/TodoList";
import TodoCreator from "@/layout/TodoCreator";
import { useTodo } from "@/hooks/useTodo";

export default function Index() {
  const {
    todos,
    completedTodos,
    onDeleteTodo,
    onCheckTodo,
    onAddTodo,
    onUpdateTitle,
  } = useTodo();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onDeleteTodo={onDeleteTodo}
        onUpdateTitle={onUpdateTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
