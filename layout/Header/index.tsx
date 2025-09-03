import { StyleSheet, View } from "react-native";
import { StyledText } from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { FC } from "react";
import { getFullFormattedDate } from "@/helpers/date";

interface IHeaderProps {
  totalTodos: number;
  completedTodos: number;
}
export const Header: FC<IHeaderProps> = ({ totalTodos, completedTodos }) => {
  const formatedDateNow = getFullFormattedDate(new Date());
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText variant={"heading"}>Todo app</StyledText>
        <StyledText variant={"subtitle"}>{formatedDateNow}</StyledText>
      </View>
      <StyledText>
        Completed {completedTodos} / {totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
