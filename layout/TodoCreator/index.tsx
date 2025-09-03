import { Keyboard, StyleSheet, View } from "react-native";
import { ITodo } from "@/types/todo";
import { FC, useEffect, useState } from "react";
import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS } from "@/constants/ui";

interface IProps {
  onAddTodo: (text: ITodo["title"]) => void;
}
const TodoCreator: FC<IProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text.trim()) {
      setInputError(true);
      return;
    }
    Keyboard.dismiss();
    onAddTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError && text) {
      setInputError(false);
    }
  }, [inputError, text]);

  return (
    <View style={styles.container}>
      <StyledTextInput
        value={text}
        onChangeText={setText}
        placeholder={"Add a task..."}
        placeholderTextColor={COLORS.PLACEHOLDER}
        isError={inputError}
      />
      <StyledButton
        label={"+"}
        onPress={onPressAdd}
        disabled={inputError}
        size={"large"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});

export default TodoCreator;
