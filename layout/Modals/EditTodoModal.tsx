import { ITodo } from "@/types/todo";
import { FC } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

interface IEditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateTodo: (title: ITodo["title"]) => void;
}

const EditTodoModal: FC<IEditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdateTodo,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType={"fade"}
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View></View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditTodoModal;
