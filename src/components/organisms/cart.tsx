import { SelectedItems } from "@/contexts";
import { colors } from "@/styles/colors";
import { AddIcon, HamburgerIcon, MinusIcon } from "@chakra-ui/icons";
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
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartButton, CartItem, CartTotal, H2, H3 } from "..";
import numeral from "numeral";
import { Item } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import { CartQuantity } from "../molecules/CartQuantity";

const phoneNumber = process.env.NEXT_PUBLIC_WPP_NUMBER;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type props = {
  username: string;
};

export const Cart = ({ username }: props) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedItems } = useContext(SelectedItems);
  const { red } = colors;

  const onFinish = async () => {
    try {
      await axios.put(`${apiUrl}/order/${username}`, {
        items: selectedItems,
      });

      return router.push(`https://wa.me/${phoneNumber}`);
    } catch (error) {
      alert("Não foi possível completar seu pedido");
    }
  };

  return (
    <>
      <CartQuantity />
      <CartButton onClick={onOpen} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton right="16px" top="16px" />
          <DrawerHeader>Seu Carrinho</DrawerHeader>

          <DrawerBody>
            {selectedItems.map((item) => {
              return <CartItem key={item.itemid + item.name} item={item} />;
            })}
          </DrawerBody>

          <DrawerFooter>
            <CartTotal
              selectedItems={selectedItems}
              onClick={() => onFinish()}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
