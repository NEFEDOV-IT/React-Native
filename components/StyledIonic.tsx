import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface IonicProps {
  color?: string;
  size?: number;
  checked?: boolean;
  name?: ComponentProps<typeof Ionicons>["name"];
}
const StyledIonic = (props: IonicProps) => {
  return (
    <Ionicons
      name={props?.checked ? "checkmark-circle" : "ellipse-outline"}
      size={props?.size || 24}
      color={props?.color || "white"}
      {...props}
    />
  );
};

export default StyledIonic;
