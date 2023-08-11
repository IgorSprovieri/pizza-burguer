import { Text } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export const H1 = ({ children, ...props }) => {
  const { white } = colors;

  return (
    <Text
      color={white}
      fontFamily="Comfortaa, cursive"
      fontSize="32px"
      fontWeight="bold"
      borderBottom={`0.5px solid ${white}`}
      w="100%"
      lineHeight="24px"
      {...props}
    >
      {children}
    </Text>
  );
};

export const H2 = ({ children, ...props }) => {
  const { orange } = colors;

  return (
    <Text
      color={orange}
      fontFamily="Comfortaa, cursive"
      fontSize="18px"
      fontWeight="semibold"
      {...props}
    >
      {children}
    </Text>
  );
};

export const H3 = ({ children, ...props }) => {
  const { white } = colors;

  return (
    <Text
      color={white}
      fontFamily="Comfortaa, cursive"
      fontSize="20px"
      fontWeight="normal"
      {...props}
    >
      {children}
    </Text>
  );
};
