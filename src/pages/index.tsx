import { BigImage, SwapItems } from "@/components";
import { HomeTextsAnimation } from "@/components/organisms/homeTextsAnimation";
import { sectionRepository } from "@/db/repositories";
import { colors } from "@/styles/colors";
import { MenuItem } from "@/types";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
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
        "Temos deliciosas pizzas, lotados de queijo e personalizados do seu jeito",
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
  const [menuItem, setMenuItem] = useState<MenuItem>(menuItems[1]);
  const { title, description, bigImageUrl } = menuItem;

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
          <HomeTextsAnimation menuItem={menuItem} />{" "}
        </Flex>
        <BigImage bigImageUrl={bigImageUrl} />
        <SwapItems
          onChange={(menuItem: MenuItem) => setMenuItem(menuItem)}
          menuItems={menuItems}
        />
      </main>
    </>
  );
}
