import { Flex } from "@chakra-ui/react";
import { H2 } from ".";
import { ReactNode } from "react";
import { colors } from "@/styles/colors";

type Props = {
  children: ReactNode;
  padding?: string;
};

export const ShadowBox = ({ children, padding }: Props) => {
  const { white } = colors;

  return (
    <Flex
      flexDir="column"
      alignItems="left"
      border="0.5px solid lightgray"
      borderRadius="16px"
      padding={padding || "24px 8px"}
      boxShadow="-1px 2px 4px rgba(0, 0, 0, 0.4)"
      backgroundColor={white}
      w="100%"
    >
      {children}
    </Flex>
  );
};
