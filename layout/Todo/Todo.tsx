import { FC } from "react";
import { ITodo } from "@/types/todo";
import { StyledText } from "@/components/StyledText";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";

export const Todo: FC<ITodo> = ({ title, isCompleted }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={() => {}} />
        <StyledText
          style={[
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {title}
        </StyledText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon={"pencil"} size={"small"} />
        <StyledButton icon={"trash"} size={"small"} variant={"delete"} />
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
