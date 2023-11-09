import { wait } from "@/services";
import { Direction, MenuItem } from "@/types";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  position: "left" | "right";
  menuItem: MenuItem;
  direction: Direction;
};

export const SwapImage = ({ position, menuItem, direction }: Props) => {
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
    right: {
      translateX: position === "left" ? "228px" : "0px",
      translateY: position === "left" ? "-64px" : "0px",
      opacity: 0,
    },
    left: {
      translateX: position === "left" ? "0px" : "-228px",
      translateY: position === "left" ? "0px" : "-64px",
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={anim}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={newMenuItem.imageUrl}
          alt=""
          mr="64px"
          w="128px"
          h="128px"
          borderRadius="500px"
          mb="58px"
        />
      </motion.div>
    </motion.div>
  );
};
