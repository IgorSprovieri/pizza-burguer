import { Flex } from "@chakra-ui/react";
import { H2 } from ".";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ShadowBox = ({ children }: Props) => {
  return (
    <Flex
      flexDir="column"
      alignItems="left"
      border="0.5px solid lightgray"
      borderRadius="16px"
      padding="24px 8px"
      boxShadow="-1px 2px 4px rgba(0, 0, 0, 0.4)"
      w="100%"
    >
      {children}
    </Flex>
  );
};
