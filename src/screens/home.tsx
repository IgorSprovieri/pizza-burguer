import { Flex } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { Advertising, ListItems, Logo, Menu } from "@/components";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Advertising as AdvertisingType, Item, Section } from "@/types";

type props = {
  sections: Array<Section>;
  items: Array<Item>;
  advertisings: Array<AdvertisingType>;
};

export const HomeScreen = ({ sections, items, advertisings }: props) => {
  const { background } = colors;
  const [page, setPage] = useState<number>(0);
  const [itemsFiltred, setItemsFiltred] = useState<Array<Item>>([]);

  useEffect(() => {
    const filtredItems: Array<Item> = items.filter((item) => {
      return item.sectionId === sections[page].id;
    });

    setItemsFiltred(filtredItems);
  }, [page, sections, items]);

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
      <Logo mt="48px" />
      <Menu mt="32px" sections={sections} page={page} setPage={setPage} />
      <Advertising mt={["0px", "20px"]} images={advertisings} />
      <ListItems key={v4()} title={sections[page].title} items={itemsFiltred} />
    </Flex>
  );
};
