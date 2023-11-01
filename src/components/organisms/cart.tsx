import { SelectedItems } from "@/contexts";
import { colors } from "@/styles/colors";
import {
  AddIcon,
  HamburgerIcon,
  MinusIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Image,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { H1, H2, H3 } from "..";
import numeral from "numeral";
import { Item } from "@/types";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedItems, setSelectedItems } = useContext(SelectedItems);
  const { orange, red } = colors;
  const cartQuantity = selectedItems.reduce(
    (sum, { quantity }) => sum + (quantity || 1),
    0
  );

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
    <>
      <Text
        position="absolute"
        color={"black"}
        bgColor={red}
        w="24px"
        h="24px"
        textAlign="center"
        top={["8px", "26px"]}
        right={["8px", "58px"]}
        borderRadius="32px"
        zIndex={1}
        fontSize="15px"
        fontWeight="extrabold"
      >
        {cartQuantity}
      </Text>

      <Button
        bgColor="transparent"
        onClick={onOpen}
        position="absolute"
        top={["8px", "32px"]}
        right={["8px", "32px"]}
        padding="4px"
      >
        <HamburgerIcon
          color={colors.white}
          _hover={{ color: colors.background }}
          boxSize="36px"
        />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton right="16px" top="16px" />
          <DrawerHeader>Seu Carrinho</DrawerHeader>

          <DrawerBody>
            {selectedItems.map(
              ({ itemid, imageurl, name, quantity, price }) => {
                return (
                  <Flex
                    key={itemid}
                    w="100%"
                    align="center"
                    justify="space-between"
                    mb="16px"
                  >
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
                          R${" "}
                          {numeral(Number(price) * (quantity || 1)).format(
                            "0.00"
                          )}
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
                      <Button
                        onClick={() => addQuantity(itemid)}
                        bgColor="white"
                        padding={0}
                      >
                        <AddIcon />
                      </Button>
                    </Flex>
                  </Flex>
                );
              }
            )}
          </DrawerBody>

          <DrawerFooter
            flexDir="column"
            alignItems="left"
            border="0.5px solid lightgray"
            borderRadius="16px"
            margin="16px"
            padding="24px 8px"
            boxShadow="-1px 2px 4px rgba(0, 0, 0, 0.4)"
          >
            <Flex w="100%" justify="space-between" mb="20px">
              <H2 ml="16px" color="black">
                Total
              </H2>
              <Flex mr="16px">
                <H2 color="black">R$</H2>
                <H2 color="black" ml="4px">
                  {numeral(
                    selectedItems.reduce(
                      (sum, { price, quantity }) =>
                        sum + Number(price) * (quantity || 0),
                      0
                    )
                  ).format("0.00")}
                </H2>
              </Flex>
            </Flex>
            <Button bgColor={orange} w="100%" borderRadius="32px">
              Finalizar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
