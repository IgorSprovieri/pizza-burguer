import { colors } from "@/styles/colors";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CartButton = ({ onClick }: Props) => {
  const { white, background } = colors;

  return (
    <Button
      bgColor="transparent"
      onClick={onClick}
      position="absolute"
      top={["8px", "32px"]}
      right={["8px", "32px"]}
      padding="4px"
    >
      <HamburgerIcon
        color={white}
        _hover={{ color: background }}
        boxSize="36px"
      />
    </Button>
  );
};
