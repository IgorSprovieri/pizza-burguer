import { colors } from "@/styles/colors";
import { MenuItem, Section } from "@/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  menuItems: Array<MenuItem>;
  onChange: (menuItem: MenuItem) => void;
};

export const SwapItems = ({ menuItems, onChange }: Props) => {
  const { background } = colors;
  const [indexes, setIndexes] = useState<Array<number>>([0, 1, 2]);

  useEffect(() => {
    console.log(indexes);
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
  };

  const previousItem = () => {
    const newIndexes: Array<number> = indexes.map((index) => {
      if (index - 1 < 0) {
        return menuItems.length - 1;
      }

      return index - 1;
    });

    setIndexes(newIndexes);
  };

  return (
    <Flex h="283px" position="fixed" left="-64px" bottom="0px" align="flex-end">
      <Image
        src={menuItems[indexes[0]].imageUrl}
        alt=""
        mr="64px"
        w="128px"
        h="128px"
        borderRadius="500px"
        mb="58px"
      />
      <Flex
        w="200px"
        h="283px"
        bgColor="white"
        mr="64px"
        borderTopRadius="500px"
        align="center"
        flexDir="column"
      >
        <Image
          mt="32px"
          src={menuItems[indexes[1]].imageUrl}
          alt=""
          w="128px"
          h="128px"
          borderRadius="500px"
        />
        <Text
          color={background}
          fontFamily="Comfortaa"
          fontWeight={600}
          fontSize="20px"
          mt="36px"
        >
          {menuItems[indexes[1]].title}
        </Text>
        <Text
          color={background}
          fontFamily="Comfortaa"
          fontWeight={300}
          fontSize="18px"
          mt="4px"
        >
          {menuItems[indexes[1]].weight}
        </Text>
      </Flex>
      <Image
        src={menuItems[indexes[2]].imageUrl}
        alt=""
        mr="90px"
        w="128px"
        h="128px"
        borderRadius="500px"
        mb="58px"
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
