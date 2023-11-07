import { Flex } from "@chakra-ui/react";
import { H1 } from "../atoms/texts";
import { ItemLine } from "../molecules/item";
import { v4 } from "uuid";
import { Item } from "@/types";

type props = {
  title: string;
  items: Array<Item>;
};

export const ListItems = ({ title, items }: props) => {
  return (
    <Flex
      h="100%"
      w="fit-content"
      flexDir="column"
      align="center"
      justify="flex-start"
    >
      <H1 mt={["16px", "48px"]}>{title}</H1>
      <Flex
        h={["calc(100dvh - 360px)", "calc(100dvh - 400px)"]}
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
        {items?.map((item, i) => {
          if (i % 2 === 0 && i === items.length - 1) {
            return <ItemLine key={v4()} items={[items[i], null]} />;
          }

          return i % 2 !== 0 ? (
            <ItemLine key={v4()} items={[items[i - 1], item]} />
          ) : (
            <></>
          );
        })}
      </Flex>
    </Flex>
  );
};
