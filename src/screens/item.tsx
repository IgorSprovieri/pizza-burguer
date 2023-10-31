import { colors } from "@/styles/colors";
import { Item, Section } from "@/types";
import { Button, Flex, Image } from "@chakra-ui/react";
import { H1, Logo, Paragraph } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { SelectedItems } from "@/contexts";

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

    const found = selectedItems.find(({ itemid }) => {
      return item.itemid === itemid;
    });

    if (found) {
      const newSelectedItems = selectedItems.map((selectedItem) => {
        if (selectedItem.itemid === item.itemid) {
          selectedItem.quantity = selectedItem.quantity
            ? selectedItem.quantity + 1
            : (selectedItem.quantity = 1);
        }

        return selectedItem;
      });

      setSelectedItems(newSelectedItems);
      return;
    }

    const newSelectedItems = selectedItems;
    item.quantity = 1;
    newSelectedItems.push(item);
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
        padding="0px 16px"
        align="center"
        justify="space-between"
      >
        <Button
          variant="outline"
          color={orange}
          borderRadius="24px"
          onClick={() => navigate("/")}
          leftIcon={<Image w="20px" h="20px" src="/left-arrow.svg" alt="/" />}
          paddingLeft="8px"
        >
          Voltar
        </Button>
        <Logo />
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
          <Flex flexDir="column" align="center" justify="space-between">
            <Paragraph w="100%" h="100%" textAlign="left" ml="16px" mt="16px">
              {item?.description}
            </Paragraph>
            <Button
              color={orange}
              borderRadius="24px"
              onClick={() => addToCart(item)}
              leftIcon={
                <Image w="20px" h="20px" src="/left-arrow.svg" alt="/" />
              }
              paddingLeft="8px"
            >
              Voltar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
