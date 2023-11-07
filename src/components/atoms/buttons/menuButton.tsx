import { colors } from "@/styles/colors";
import { Button as ChakraButton } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  imageUrl: string;
  variant: "solid" | "outline";
  onClick: (any: any) => any;
};

export const MenuButton = ({ variant, children, imageUrl, onClick }: props) => {
  const { orange, background } = colors;

  const btnBaseStyle = {
    margin: "0px 8px",
    size: "sm",
    borderRadius: "100px",
    border: `1px solid ${orange}`,
  };

  const btnStyles = {
    outline: {
      ...btnBaseStyle,
      color: orange,
      bgColor: background,
      leftIcon: <Image src={imageUrl} alt="" width={16} height={16} />,
      _hover: {
        color: background,
        bgColor: orange,
      },
    },
    solid: {
      ...btnBaseStyle,
      color: background,
      bgColor: orange,
      leftIcon: <Image src={imageUrl} alt="" width={16} height={16} />,
      _hover: {
        color: orange,
        bgColor: background,
      },
    },
  };

  return (
    <ChakraButton onClick={onClick} {...btnStyles[variant]}>
      {children}
    </ChakraButton>
  );
};
