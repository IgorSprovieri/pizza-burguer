import { colors } from "@/styles/colors";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Index() {
  const { background, white } = colors;

  return (
    <>
      <Head>
        <title>Pizza Burguer</title>
        <meta name="description" content="Generated by create next app" />
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
              Hambúrguers
            </Heading>
            <Text
              color="#B3B2B2"
              fontFamily="Comfortaa"
              fontWeight={400}
              fontSize="22px"
              mt="32px"
              w="512px"
            >
              Temos deliciosos hambúrgueres, lotados de queijo e personalizados
              do jeito que você mais deseja
            </Text>
            <Button
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
          src="/images/burguer-big.png"
          alt=""
          w="1024px"
          position="fixed"
          left="747px"
          top="50px"
        />
        <Flex
          h="283px"
          position="fixed"
          left="-64px"
          bottom="0px"
          align="flex-end"
        >
          <Image
            src="/images/muçarela.png"
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
              src="/images/burguer.png"
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
              Hambúrguers
            </Text>
            <Text
              color={background}
              fontFamily="Comfortaa"
              fontWeight={300}
              fontSize="18px"
              mt="8px"
            >
              140g
            </Text>
          </Flex>
          <Image
            src="/images/fries.png"
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
              w="40px"
              h="40px"
              bgColor="rgba(255, 255, 255, 0.15)"
              borderRadius="500px"
              border="2px solid white"
            >
              <ArrowBackIcon color="white" w="22px" h="22px" />
            </Button>
            <Button
              w="40px"
              h="40px"
              bgColor="rgba(255, 255, 255, 0.15)"
              borderRadius="500px"
              border="2px solid white"
            >
              <ArrowForwardIcon color="white" w="22px" h="22px" />
            </Button>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
