import { colors } from "@/styles/colors";
import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactElement, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  leftIcon?: ReactElement;
};

export const OrangeButton = ({ onClick, children, leftIcon }: Props) => {
  const { orange, background } = colors;

  return (
    <Button
      onClick={onClick}
      color={background}
      bgColor={orange}
      w="100%"
      leftIcon={leftIcon}
      borderRadius="24px"
    >
      {children}
    </Button>
  );
};
