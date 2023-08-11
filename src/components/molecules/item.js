import { Box, Flex, Image } from "@chakra-ui/react";
import { colors } from "../../styles/colors";
import { v4 } from "uuid";
import { H2, H3 } from "../atoms";
import numeral from "numeral";

const Item = ({ item, ...props }) => {
  const { orange, white } = colors;

  if (!item) {
    return <Box w="320px" h="90px" {...props}></Box>;
  }

  const { Icon, name, price, src } = item;

  return (
    <Flex
      align="center"
      justifyContent="space-between"
      w="320px"
      h="90px"
      border={`1px solid ${orange}`}
      borderRadius="20px"
      padding="8px"
      cursor="pointer"
      _hover={{ borderColor: white }}
      {...props}
    >
      <Flex
        flexDir="column"
        align="left"
        justifyContent="space-between"
        ml="8px"
      >
        <Flex align="center">
          {Icon ? <Icon color={orange} size="20px"></Icon> : <></>}
          <H2 ml="4px">{name}</H2>
        </Flex>
        <H3 mt="4px">R$ {numeral(price).format("0.00")}</H3>
      </Flex>
      <Flex align="center">
        <Image
          src={src}
          alt="Foto do Item"
          w="64px"
          h="64px"
          borderRadius="5px"
        ></Image>
        <Image
          src="/arrow.svg"
          alt="Ver Mais"
          w="16px"
          h="16px"
          ml="8px"
        ></Image>
      </Flex>
    </Flex>
  );
};

export const ItemLine = ({ items, ...props }) => {
  return (
    <Flex
      mt="16px"
      h="fit-content"
      w="fit-content"
      align="center"
      justify="space-between"
      {...props}
    >
      {items?.map((item, index) => {
        return (
          <Item
            key={v4()}
            item={item}
            mr={index % 2 === 0 ? "16px" : ""}
          ></Item>
        );
      })}
    </Flex>
  );
};
