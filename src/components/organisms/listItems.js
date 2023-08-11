import { Flex } from "@chakra-ui/react";
import { H1 } from "../atoms/texts";
import { ItemLine } from "../molecules/item";
import { v4 } from "uuid";

export const ListItems = ({ title, items }) => {
  return (
    <Flex
      h="100%"
      w="fit-content"
      flexDir="column"
      align="center"
      justify="flex-start"
    >
      <H1 mt="48px">{title}</H1>
      <Flex
        h="100%"
        w="fit-content"
        flexDir="column"
        align="center"
        justify="flex-start"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
      >
        {items.map((item, i) => {
          if (i % 2 === 0 && i === items.length - 1) {
            return <ItemLine key={v4()} items={[items[i], null]}></ItemLine>;
          }

          return i % 2 !== 0 ? (
            <ItemLine key={v4()} items={[items[i - 1], item]}></ItemLine>
          ) : (
            <></>
          );
        })}
      </Flex>
    </Flex>
  );
};
