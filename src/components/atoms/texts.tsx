import { Text } from "@chakra-ui/react";
import { colors } from "../../styles/colors";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  mt?: string | Array<string>;
  ml?: string;
  w?: string;
  h?: string;
  textAlign?: "left" | "center" | "right";
};

export const H1 = ({ children, ...props }: props) => {
  const { white } = colors;

  return (
    <Text
      color={white}
      fontFamily="Inter, sans-serif"
      fontSize="24px"
      fontWeight="light"
      borderBottom={`0.5px solid ${white}`}
      w={["calc(100% - 16px)", "100%"]}
      lineHeight="24px"
      {...props}
    >
      {children}
    </Text>
  );
};

export const H2 = ({ children, ...props }: props) => {
  const { orange } = colors;

  return (
    <Text
      color={orange}
      fontFamily="Inter, sans-serif"
      fontSize="16px"
      fontWeight="semibold"
      {...props}
    >
      {children}
    </Text>
  );
};

export const H3 = ({ children, ...props }: props) => {
  const { white } = colors;

  return (
    <Text
      color={white}
      fontFamily="Inter, sans-serif"
      fontSize="16px"
      fontWeight="normal"
      {...props}
    >
      {children}
    </Text>
  );
};

export const Paragraph = ({ children, ...props }: props) => {
  const { white } = colors;

  return (
    <Text
      color={white}
      fontFamily="Inter, sans-serif"
      fontSize="16px"
      fontWeight="normal"
      {...props}
    >
      {children}
    </Text>
  );
};
