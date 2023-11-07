import { Item } from "@/types";
import { Button, Flex, Image } from "@chakra-ui/react";
import numeral from "numeral";
import { H2, H3 } from "..";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { SelectedItems } from "@/contexts";

type Props = {
  item: Item;
};

export const CartItem = ({ item }: Props) => {
  const { selectedItems, setSelectedItems } = useContext(SelectedItems);
  const { itemid, imageurl, name, quantity, price } = item;

  const addQuantity = (itemid: number) => {
    if (!itemid) return;

    const newSelectedItems: Array<Item> = [];

    selectedItems.forEach((selectedItem) => {
      if (selectedItem.itemid === itemid) {
        selectedItem.quantity = (selectedItem?.quantity || 1) + 1;
      }

      newSelectedItems.push(selectedItem);
    });

    setSelectedItems(newSelectedItems);
  };

  const minusQuantity = (itemid: number) => {
    if (!itemid) return;

    const newSelectedItems: Array<Item> = [];

    selectedItems.forEach((selectedItem) => {
      if (selectedItem.itemid === itemid) {
        selectedItem.quantity = selectedItem.quantity
          ? selectedItem.quantity - 1
          : 0;
      }

      if (selectedItem.quantity !== 0) {
        newSelectedItems.push(selectedItem);
      }
    });

    setSelectedItems(newSelectedItems);
  };

  return (
    <Flex w="100%" align="center" justify="space-between" mb="16px">
      <Flex align="center">
        <Image
          src={imageurl}
          alt=""
          w="44px"
          h="44px"
          borderRadius="4px"
          marginRight="8px"
        />
        <Flex flexDir="column">
          <H2>{name}</H2>
          <H3 color="black">
            R$ {numeral(Number(price) * (quantity || 1)).format("0.00")}
          </H3>
        </Flex>
      </Flex>
      <Flex align="center" w="120px" justify="space-between">
        <Button
          onClick={() => minusQuantity(itemid)}
          bgColor="white"
          padding={0}
        >
          <MinusIcon />
        </Button>
        <H3 color="black">{quantity}</H3>
        <Button onClick={() => addQuantity(itemid)} bgColor="white" padding={0}>
          <AddIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
