import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { StyledText } from "@/components/StyledText";
import React, { ComponentProps, FC } from "react";
import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import StyledIonic from "@/components/StyledIonic";

interface IPropsButton extends TouchableOpacityProps {
  label?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "delete";
  disabled?: boolean;
}
const StyledButton: FC<IPropsButton> = ({
  label,
  icon,
  size,
  variant = "primary",
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        size === "small" ? styles.small : null,
        variant === "delete" ? styles.delete : null,
      ]}
      disabled={disabled}
      {...props}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && (
        <StyledIonic name={icon} size={14} color={COLORS.PRIMARY_TEXT} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyledButton;
