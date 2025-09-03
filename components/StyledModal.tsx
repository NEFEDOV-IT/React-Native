import { FC, ReactNode } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { COLORS } from "@/constants/ui";

interface IStyledModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const StyledModal: FC<IStyledModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType={"fade"}
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.contentContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default StyledModal;

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
