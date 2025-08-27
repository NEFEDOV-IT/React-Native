import { Text, TextProps, StyleSheet } from "react-native"
import { COLORS } from "@/constants/ui";
import React from "react";

type StyledProps = TextProps;
export const StyledText: React.FC<StyledProps> = ({ style, ...props}) => {
  return <Text style={[styles.base, style]} {...props} />
}

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  }
})
