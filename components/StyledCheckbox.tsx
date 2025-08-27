import { FC } from "react";
import { TouchableOpacity } from "react-native";
import StyledIonic from "@/components/StyledIonic";
import { COLORS } from "@/constants/ui";

interface StyledCheckboxProps {
  checked: boolean;
  onCheck: () => void;
}

const StyledCheckbox: FC<StyledCheckboxProps> = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <StyledIonic
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER || "white"}
      />
    </TouchableOpacity>
  );
};

export default StyledCheckbox;
