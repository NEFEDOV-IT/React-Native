import { FC } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { StyledText } from "@/components/StyledText";
import StyledModal from "@/components/StyledModal";
import StyledButton from "@/components/StyledButton";

interface IDeleteTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteTodo: () => void;
}
const DeleteTodoModal: FC<IDeleteTodoModalProps> = ({
  isOpen,
  onClose,
  onDeleteTodo,
}) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant={"heading"}>Delete Todo</StyledText>
        <StyledText variant={"subtitle"}>
          Are you sure you want to delete this todo?
        </StyledText>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          variant={"secondary"}
          label={"Cancel"}
          onPress={onClose}
        />
        <StyledButton label={"Delete"} onPress={onDeleteTodo} />
      </View>
    </StyledModal>
  );
};

export default DeleteTodoModal;

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    marginTop: 20,
  },
});
