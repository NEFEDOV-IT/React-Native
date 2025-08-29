import { ITodo } from "@/types/todo";
import { FC } from "react";
import { Animated, View } from "react-native";
import FlatList = Animated.FlatList;
import { Todo } from "@/layout/Todo/Todo";

interface IPropsTodos {
  todos: ITodo[];
  onCheckTodo: (todo: ITodo["id"]) => void;
  onDeleteTodo: (todo: ITodo["id"]) => void;
  onUpdateTitle: (todo: ITodo["id"], title: ITodo["title"]) => void;
}
export const TodoList: FC<IPropsTodos> = ({
  todos,
  onCheckTodo,
  onUpdateTitle,
  onDeleteTodo,
}) => {
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
            onCheckTodo={onCheckTodo}
            onUpdateTitle={onUpdateTitle}
            onDeleteTodo={onDeleteTodo}
          />
        )}
      />
    </View>
  );
};
