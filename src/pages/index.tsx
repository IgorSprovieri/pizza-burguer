import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { Advertising, ListItems, Logo, Menu } from "@/components/index";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import { type } from "os";
import { Item, Section } from "@/types";

const inter = Inter({ subsets: ["latin"] });
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStaticProps = async () => {
  const { data: sections } = await axios.get(`${apiUrl}/sections`);
  const { data: items } = await axios.get(`${apiUrl}/items`);
  const { data: advertisings } = await axios.get(`${apiUrl}/advertisings`);

  return { props: { sections, items, advertisings } };
};

type props = {
  sections: Array<Section>;
  items: Array<Item>;
  advertisings: Array<any>;
};

export default function Home({ sections, items, advertisings }: props) {
  const { background } = colors;
  const [page, setPage] = useState<number>(0);
  const [itemsFiltred, setItemsFiltred] = useState<Array<any>>([]);

  useEffect(() => {
    const newList: any = items.filter((item) => {
      return item.sectionId === sections[page].id;
    });

    setItemsFiltred(newList);
  }, [page, sections, items]);

  return (
    <>
      <Head>
        <title>Pizza Burguer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Flex
          flexDir="column"
          align="center"
          justify="flex-start"
          bgColor={background}
          w="100dvw"
          h="100dvh"
          overflow="hidden"
        >
          <Logo mt="48px" />
          <Menu mt="32px" sections={sections} page={page} setPage={setPage} />
          <Advertising mt={["0px", "20px"]} images={advertisings} />
          <ListItems
            key={v4()}
            title={sections[page].title}
            items={itemsFiltred}
          />
        </Flex>
      </main>
    </>
  );
}
