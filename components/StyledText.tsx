import { Text, TextProps, StyleSheet } from "react-native";
import { COLORS } from "@/constants/ui";
import React from "react";

interface StyledProps extends TextProps {
  variant?: "primary" | "title" | "subtitle" | "heading" | "small";
}
export const StyledText: React.FC<StyledProps> = ({
  style,
  variant,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === "title" ? styles.title : null,
        variant === "subtitle" ? styles.subTitle : null,
        variant === "heading" ? styles.heading : null,
        variant === "small" ? styles.small : null,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "300",
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
});
