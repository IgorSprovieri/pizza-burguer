import { Button, Flex } from "@chakra-ui/react";
import { H2, OrangeButton, ShadowBox } from "..";
import numeral from "numeral";
import { Item } from "@/types";
import { colors } from "@/styles/colors";
import { MouseEventHandler } from "react";

type Props = {
  selectedItems: Array<Item>;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CartTotal = ({ selectedItems, onClick }: Props) => {
  const { orange } = colors;

  return (
    <ShadowBox>
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
      <OrangeButton onClick={onClick}>Finalizar</OrangeButton>
    </ShadowBox>
  );
};
