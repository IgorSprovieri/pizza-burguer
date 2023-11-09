import { wait } from "@/services";
import { colors } from "@/styles/colors";
import { Direction, MenuItem } from "@/types";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { MotionProps, MotionStyle, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  menuItem: MenuItem;
  direction: Direction;
};

export const SwapCard = ({ menuItem, direction }: Props) => {
  const { background } = colors;

  const [anim, setAnim] = useState<string>("center");
  const [newMenuItem, setNewMenuItem] = useState<MenuItem>(menuItem);

  const animate = async (direction: Direction) => {
    setAnim(direction);
    await wait(0.5);
    setAnim("center");
    setNewMenuItem(menuItem);
  };

  useEffect(() => {
    animate(direction);
  }, [menuItem]);

  const variants = {
    center: {
      translateX: ["0px"],
      translateY: ["0px"],
    },
    right: { translateX: "-228px", translateY: "64px", opacity: 0 },
    left: { translateX: "228px", translateY: "64px", opacity: 0 },
  };

  return (
    <motion.div
      initial={{ translateY: "100%" }}
      animate={{ translateY: "0px" }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        w="200px"
        h="283px"
        bgColor="white"
        mr="64px"
        borderTopRadius="500px"
        align="center"
        flexDir="column"
      >
        <motion.div
          animate={anim}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <Image
            mt="32px"
            src={newMenuItem.imageUrl}
            alt=""
            w="128px"
            h="128px"
            borderRadius="500px"
          />
        </motion.div>
        <Text
          color={background}
          fontFamily="Comfortaa"
          fontWeight={600}
          fontSize="20px"
          mt="36px"
        >
          {newMenuItem.title}
        </Text>
        <Text
          color={background}
          fontFamily="Comfortaa"
          fontWeight={300}
          fontSize="18px"
          mt="4px"
        >
          {newMenuItem.weight}
        </Text>
      </Flex>
    </motion.div>
  );
};
