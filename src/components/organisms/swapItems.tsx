import { colors } from "@/styles/colors";
import { Direction, MenuItem, Section } from "@/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SwapCard } from "../molecules/swapCard";
import { SwapImage } from "../molecules/swapImage";

type Props = {
  menuItems: Array<MenuItem>;
  onChange: (menuItem: MenuItem) => void;
};

export const SwapItems = ({ menuItems, onChange }: Props) => {
  const { background } = colors;
  const [indexes, setIndexes] = useState<Array<number>>([0, 1, 2]);
  const [direction, setDirection] = useState<Direction>("center");

  useEffect(() => {
    onChange(menuItems[indexes[1]]);
  }, [indexes, onChange, menuItems]);

  const nextItem = () => {
    const newIndexes: Array<number> = indexes.map((index) => {
      if (index + 1 === menuItems.length) {
        return 0;
      }

      return index + 1;
    });

    setIndexes(newIndexes);
    setDirection("right");
  };

  const previousItem = () => {
    const newIndexes: Array<number> = indexes.map((index) => {
      if (index - 1 < 0) {
        return menuItems.length - 1;
      }

      return index - 1;
    });

    setIndexes(newIndexes);
    setDirection("left");
  };

  return (
    <Flex h="283px" position="fixed" left="-64px" bottom="0px" align="flex-end">
      <SwapImage
        position="left"
        menuItem={menuItems[indexes[0]]}
        direction={direction}
      />
      <SwapCard menuItem={menuItems[indexes[1]]} direction={direction} />
      <SwapImage
        position="right"
        menuItem={menuItems[indexes[2]]}
        direction={direction}
      />
      <Flex
        h="98px"
        borderTopRadius="500px"
        flexDir="column"
        justify="space-between"
        mb="72px"
      >
        <Button
          onClick={() => nextItem()}
          w="40px"
          h="40px"
          bgColor="rgba(255, 255, 255, 0.15)"
          borderRadius="500px"
          border="2px solid white"
        >
          <ArrowForwardIcon color="white" w="22px" h="22px" />
        </Button>
        <Button
          onClick={() => previousItem()}
          w="40px"
          h="40px"
          bgColor="rgba(255, 255, 255, 0.15)"
          borderRadius="500px"
          border="2px solid white"
        >
          <ArrowBackIcon color="white" w="22px" h="22px" />
        </Button>
      </Flex>
    </Flex>
  );
};
