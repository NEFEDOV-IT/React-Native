import { ITodo } from "@/types/todo";
import { FC, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledModal from "@/components/StyledModal";
import { StyledText } from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS } from "@/constants/ui";
import StyledButton from "@/components/StyledButton";

interface IEditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateTodo: (title: ITodo["title"]) => void;
  title: ITodo["title"];
}

const EditTodoModal: FC<IEditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdateTodo,
  title,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [isInputError, setIsInputError] = useState(false);
  const onPressSave = () => {
    if (!updatedTitle) return setIsInputError(true);
    onUpdateTodo(updatedTitle);
    onClose();
  };

  useEffect(() => {
    if (isInputError && updatedTitle) {
      setIsInputError(false);
    }
  }, [isInputError, updatedTitle]);

  useEffect(() => {
    setUpdatedTitle(title);
  }, [isOpen]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant={"heading"}>Edit Todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            isError={isInputError}
            placeholder={"Edit todo..."}
            placeholderTextColor={COLORS.PLACEHOLDER}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton
            variant={"secondary"}
            label={"Cancel"}
            onPress={onClose}
          />
          <StyledButton
            label={"Save"}
            onPress={onPressSave}
            disabled={isInputError}
          />
        </View>
      </View>
    </StyledModal>
  );
};

export default EditTodoModal;

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});
