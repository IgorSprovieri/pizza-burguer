import { SwapItems } from "@/components";
import { sectionRepository } from "@/db/repositories";
import { colors } from "@/styles/colors";
import { MenuItem, Section } from "@/types";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { IconButton, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export const getStaticProps = async () => {
  const menuItems: Array<MenuItem> = [
    {
      itemid: 5,
      title: "Milk Shakes",
      weight: "300ml",
      description:
        "Para terminar, não pode faltar aquela sobremesa cheia de sabor, né?",
      imageUrl: "/images/milk-shakes.png",
      bigImageUrl: "/images/milk-shakes-big.png",
    },
    {
      itemid: 1,
      title: "Pizzas",
      weight: "960g",
      description:
        "Temos deliciosas pizzas, lotados de queijo e personalizados do jeito que você mais deseja",
      imageUrl: "/images/muçarela.png",
      bigImageUrl: "/images/pizza-big.png",
    },
    {
      itemid: 2,
      title: "Hambúrgueres",
      weight: "140g",
      description:
        "Temos deliciosos hambúrgueres, lotados de queijo e personalizados do jeito que você mais deseja",
      imageUrl: "/images/burguer.png",
      bigImageUrl: "/images/burguer-big.png",
    },
    {
      itemid: 3,
      title: "Batata Frita",
      weight: "120g",
      description:
        "Temos deliciosas fritas, temperadas do jeito que você mais deseja",
      imageUrl: "/images/fries.png",
      bigImageUrl: "/images/fries-big.png",
    },
    {
      itemid: 4,
      title: "Onion Rings",
      weight: "120g",
      description:
        "Temos deliciosos anéis de cebola, temperados do jeito que você mais deseja",
      imageUrl: "/images/onions.png",
      bigImageUrl: "/images/onions-big.png",
    },
  ];

  return {
    props: {
      menuItems,
    },
  };
};

type Props = {
  menuItems: Array<MenuItem>;
};

export default function Page({ menuItems }: Props) {
  const router = useRouter();
  const { background } = colors;
  const [title, setTitle] = useState<string>(menuItems[0].title);
  const [description, setDescription] = useState<string>(
    menuItems[0].description
  );
  const [bigImageUrl, setBigImageUrl] = useState<string>(
    menuItems[0].bigImageUrl
  );

  return (
    <>
      <Head>
        <title>Pizza Burguer</title>
        <meta name="description" content="Pizza Burguer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex bgColor={background} w="100dvw" h="100dvh" flexDir="column">
          <Flex w="100%" h="50px" mt="32px" pl="132px">
            <Image src="/logo.svg" alt="Logo" />
          </Flex>
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
              {title}
            </Heading>
            <Text
              color="#B3B2B2"
              fontFamily="Comfortaa"
              fontWeight={400}
              fontSize="22px"
              mt="32px"
              w="512px"
            >
              {description}
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
        </Flex>
        <Image
          src={bigImageUrl}
          alt=""
          w="1024px"
          position="fixed"
          left="747px"
          top="50px"
        />
        <SwapItems
          onChange={(menuItem: MenuItem) => {
            setTitle(menuItem.title);
            setDescription(menuItem.description);
            setBigImageUrl(menuItem.bigImageUrl);
          }}
          menuItems={menuItems}
        />
      </main>
    </>
  );
}
