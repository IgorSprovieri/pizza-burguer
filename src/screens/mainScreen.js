import { Flex } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { Advertising, ListItems, Logo, Menu } from "../components";
import { useEffect, useState } from "react";
import { sections, advertinsings, items } from "../data";
import { v4 } from "uuid";

export const MainScreen = () => {
  const [page, setPage] = useState(0);
  const [itemsFiltred, setItemsFiltred] = useState([]);

  useEffect(() => {
    const newList = items.filter((item) => {
      return item.sectionId === sections[page].id;
    });

    setItemsFiltred(newList);
  }, [page]);

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="flex-start"
      bgColor={colors.background}
      w="100dvw"
      h="100dvh"
    >
      <Logo mt="48px"></Logo>
      <Menu mt="32px" sections={sections} page={page} setPage={setPage}></Menu>
      <Advertising mt="20px" images={advertinsings}></Advertising>
      <ListItems
        key={v4()}
        title={sections[page].title}
        items={itemsFiltred}
      ></ListItems>
    </Flex>
  );
};
