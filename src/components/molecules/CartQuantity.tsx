import { SelectedItems } from "@/contexts";
import { colors } from "@/styles/colors";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";

export const CartQuantity = () => {
  const { red } = colors;
  const { selectedItems } = useContext(SelectedItems);

  const cartQuantity = selectedItems.reduce(
    (sum, { quantity }) => sum + (quantity || 1),
    0
  );

  return (
    <Text
      position="absolute"
      color={"black"}
      bgColor={red}
      w="24px"
      h="24px"
      textAlign="center"
      top={["8px", "26px"]}
      right={["8px", "58px"]}
      borderRadius="32px"
      zIndex={1}
      fontSize="15px"
      fontWeight="extrabold"
    >
      {cartQuantity}
    </Text>
  );
};
