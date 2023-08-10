import { Flex } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { Logo } from "../components";

export const MainScreen = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="flex-start"
      bgColor={colors.background}
      w="100dvw"
      h="100dvh"
    >
      <Logo mt="47px"></Logo>
    </Flex>
  );
};
