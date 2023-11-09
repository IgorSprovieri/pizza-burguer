import { wait } from "@/services";
import { colors } from "@/styles/colors";
import { MenuItem } from "@/types";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  menuItem: MenuItem;
};

export const HomeTextsAnimation = ({ menuItem }: Props) => {
  const router = useRouter();
  const { background } = colors;

  const [anim, setAnim] = useState<string>("initial");
  const [newMenuItem, setNewMenuItem] = useState<MenuItem>(menuItem);

  const animate = async () => {
    if (anim === "initial") {
      await wait(1);
      setAnim("entry");
      return;
    }

    setAnim("exit");
    await wait(0.75);
    setNewMenuItem(menuItem);
    setAnim("entry");
  };

  useEffect(() => {
    animate();
  }, [menuItem]);

  const variants = {
    initial: { opacity: 0 },
    entry: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={anim}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Flex
        w="100%"
        mt="88px"
        pl="132px"
        flexDir="column"
        align="left"
        justify="flex-start"
      >
        <Heading
          color="white"
          fontFamily="Comfortaa"
          fontWeight={500}
          fontSize="72px"
        >
          {newMenuItem.title}
        </Heading>
        <Text
          color="#B3B2B2"
          fontFamily="Comfortaa"
          fontWeight={400}
          fontSize="22px"
          mt="32px"
          w="512px"
        >
          {newMenuItem.description}
        </Text>
        <Button
          onClick={() =>
            router.push(
              "https://wa.me//5511989444841?text=Olá, desejo fazer um pedido"
            )
          }
          color={background}
          fontFamily="Comfortaa"
          fontWeight={700}
          fontSize="20px"
          mt="32px"
          w="250px"
          h="50px"
          borderRadius="100px"
          background="linear-gradient(-90deg,#DD6B20, #FA9233)"
        >
          Peça Já o Seu
        </Button>
      </Flex>
    </motion.div>
  );
};
