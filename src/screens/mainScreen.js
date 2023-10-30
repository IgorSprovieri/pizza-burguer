import { Flex } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { Advertising, ListItems, Logo, Menu } from "../components";
import { useEffect, useState } from "react";
import { sections, advertinsings, items } from "../data";
import { v4 } from "uuid";

export const MainScreen = () => {
  const { background } = colors;
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
      bgColor={background}
      w="100dvw"
      h="100dvh"
      overflow="hidden"
    >
      <Logo mt="48px"></Logo>
      <Menu mt="32px" sections={sections} page={page} setPage={setPage} />
      <Advertising mt={["0px", "20px"]} images={advertinsings} />
      <ListItems key={v4()} title={sections[page].title} items={itemsFiltred} />
    </Flex>
  );
};
