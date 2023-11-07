import { colors } from "@/styles/colors";
import { Item } from "@/types";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { H1, Logo, OrangeButton, Paragraph } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { SelectedItems } from "@/contexts";
import { AddIcon } from "@chakra-ui/icons";

type props = {
  items: Array<Item>;
};

export const ItemScreen = ({ items }: props) => {
  const navigate = useNavigate();
  const { selectedItems, setSelectedItems } = useContext(SelectedItems);
  const { background, white, orange } = colors;
  const { id } = useParams();
  const item = items.find(({ itemid }) => Number(id) === itemid);

  const addToCart = (item: Item | undefined) => {
    if (!item) return;

    const newSelectedItems: Array<Item> = [];
    let found = false;

    selectedItems.forEach((selectedItem) => {
      if (selectedItem.itemid === item.itemid) {
        selectedItem.quantity = (selectedItem?.quantity || 1) + 1;
        found = true;
      }

      newSelectedItems.push(selectedItem);
    });

    if (found === false) {
      item.quantity = 1;
      newSelectedItems.push(item);
    }

    setSelectedItems(newSelectedItems);
  };

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
        padding="0px 8px"
        align="center"
        justify="space-between"
      >
        <Button
          variant="ghost"
          color={white}
          borderRadius="24px"
          onClick={() => navigate("/")}
          leftIcon={<Image w="20px" h="20px" src="/left-arrow.svg" alt="/" />}
          padding="0px"
        >
          Voltar
        </Button>
        <Logo />
        <Box w="73px" />
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
        <H1 ml="8px">{item?.name}</H1>
        <Flex
          flexDir={["column", "row"]}
          align="center"
          justify="space-between"
          w="100%"
          h="100%"
          mt="32px"
        >
          <Image
            src={item?.imageurl}
            w="256px"
            h="256px"
            borderRadius="20px"
            alt=""
          />
          <Flex
            flexDir="column"
            align="center"
            justify="space-between"
            h="100%"
            pl="24px"
            pt="8px"
            pb="8px"
          >
            <Paragraph w="100%" h="100%" textAlign="left">
              {item?.description}
            </Paragraph>
            <OrangeButton
              onClick={() => addToCart(item)}
              leftIcon={<AddIcon />}
            >
              Adicionar
            </OrangeButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
