import { Button, Flex, Image } from "@chakra-ui/react";
import { H1, Logo, Paragraph } from "../components";
import { colors } from "../styles/colors";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../data";

export const ItemScreen = () => {
  const navigate = useNavigate();
  const { background, white, orange } = colors;
  const { id } = useParams();
  const item = items[id];

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="flex-start"
      bgColor={background}
      w="100dvw"
      h="100dvh"
      overflow="hidden"
    >
      <Flex
        w="clamp(0px, 100dvw, 600px)"
        mt="48px"
        padding="0px 16px"
        align="center"
        justify="space-between"
      >
        <Logo></Logo>
        <Button
          variant="outline"
          color={orange}
          borderRadius="24px"
          onClick={() => navigate("/")}
          rightIcon={<Image w="20px" h="20px" src="/arrow.svg"></Image>}
          paddingRight="8px"
        >
          Voltar
        </Button>
      </Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="flex-start"
        w="clamp(0px, calc(100dvw - 32px), 600px)"
        h="fit-content"
        mt="32px"
        border={`1px solid ${white}`}
        borderRadius="20px"
        padding="32px"
      >
        <H1 ml="8px">{item.name}</H1>
        <Flex
          flexDir={["column", "row"]}
          align="center"
          justify="space-between"
          w="100%"
          h="100%"
          mt="32px"
        >
          <Image src={item.src} w="256px" h="256px" borderRadius="20px"></Image>
          <Paragraph w="100%" h="100%" textAlign="left" ml="16px" mt="16px">
            {item.description}
          </Paragraph>
        </Flex>
      </Flex>
    </Flex>
  );
};
