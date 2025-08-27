import { ITodo } from "@/types/todo";
import { FC } from "react";
import { Animated, View } from "react-native";
import FlatList = Animated.FlatList;
import { Todo } from "@/layout/Todo/Todo";

interface IPropsTodos {
  todos: ITodo[];
}
export const TodoList: FC<IPropsTodos> = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <Todo
            title={item.title}
            isCompleted={item.isCompleted}
            id={item.id}
          />
        )}
      />
    </View>
  );
};
