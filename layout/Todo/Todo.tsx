import { FC, useState } from "react";
import { ITodo } from "@/types/todo";
import { StyledText } from "@/components/StyledText";
import { StyleSheet, Vibration, View } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
import EditTodoModal from "@/layout/Modals/EditTodoModal";
import DeleteTodoModal from "@/layout/Modals/DeleteTodoModal";

interface ITodoProps extends ITodo {
  onCheckTodo: (todo: ITodo["id"]) => void;
  onDeleteTodo: (todo: ITodo["id"]) => void;
  onUpdateTitle: (todo: ITodo["id"], title: ITodo["title"]) => void;
}

export const Todo: FC<ITodoProps> = ({
  title,
  id,
  isCompleted,
  onCheckTodo,
  onUpdateTitle,
  onDeleteTodo,
}) => {
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  const onPressCheck = () => {
    onCheckTodo(id);
  };

  const onPressDelete = () => {
    setIsDeleteModal(true);
  };

  const confirmDelete = () => {
    onDeleteTodo(id);
    Vibration.vibrate(50);
  };

  const onPressEdit = () => {
    setIsEditModal(true);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />
        <StyledText
          onPress={onPressCheck}
          style={[
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {title}
        </StyledText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon={"pencil"} size={"small"} onPress={onPressEdit} />
        <EditTodoModal
          isOpen={isEditModal}
          onClose={() => setIsEditModal(false)}
          onUpdateTodo={(title) => onUpdateTitle(id, title)}
          title={title}
        />
        <StyledButton
          icon={"trash"}
          size={"small"}
          variant={"delete"}
          onPress={onPressDelete}
        />
        <DeleteTodoModal
          isOpen={isDeleteModal}
          onClose={() => setIsDeleteModal(false)}
          onDeleteTodo={confirmDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
