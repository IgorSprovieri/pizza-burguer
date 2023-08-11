import { Flex } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { Advertising, ListItems, Logo, Menu } from "../components";
import { useState } from "react";
import {
  pizzas,
  sections,
  advertinsings,
  burguers,
  sideDishes,
  milkShakes,
  drinks,
} from "../data";

export const MainScreen = () => {
  const [page, setPage] = useState(0);

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
      {page === 0 ? (
        <ListItems title="Pizzas" items={pizzas}></ListItems>
      ) : (
        <></>
      )}
      {page === 1 ? (
        <ListItems title="Hambúrguers" items={burguers}></ListItems>
      ) : (
        <></>
      )}
      {page === 2 ? (
        <ListItems title="Acompanhamentos" items={sideDishes}></ListItems>
      ) : (
        <></>
      )}
      {page === 3 ? (
        <ListItems title="Milk Shakes" items={milkShakes}></ListItems>
      ) : (
        <></>
      )}
      {page === 4 ? (
        <ListItems title="Bebidas" items={drinks}></ListItems>
      ) : (
        <></>
      )}
    </Flex>
  );
};
