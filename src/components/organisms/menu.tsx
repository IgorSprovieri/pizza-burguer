import { Button, Flex } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { v4 } from "uuid";
import { Section } from "@/types";
import Image from "next/image";

type props = {
  sections: Array<Section>;
  page: number;
  setPage: (id: number) => void;
  mt: string;
};

export const Menu = ({ sections, page, setPage, ...props }: props) => {
  const { orange, background } = colors;

  const btnBaseStyle = {
    margin: "0px 8px",
    size: "sm",
    borderRadius: "100px",
    border: `1px solid ${orange}`,
  };

  const btnStyles = () => {
    return {
      outline: {
        ...btnBaseStyle,
        color: orange,
        bgColor: background,
        leftIcon: (
          <Image src={sections[page].iconUrl} alt="" width={16} height={16} />
        ),
        _hover: {
          color: background,
          bgColor: orange,
        },
      },
      solid: {
        ...btnBaseStyle,
        color: background,
        bgColor: orange,
        leftIcon: (
          <Image src={sections[page].iconUrl} alt="" width={16} height={16} />
        ),
        _hover: {
          color: orange,
          bgColor: background,
        },
      },
    };
  };

  return (
    <Flex
      w="clamp(0px, 100dvw, 740px)"
      h="80px"
      flexDir="row"
      align="center"
      justify="flex-start"
      overflowX="scroll"
      sx={{
        "&::-webkit-scrollbar": {
          width: "0em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
      }}
      {...props}
    >
      <Flex>
        {sections?.map(({ id, title }) => {
          const variant = id === page ? "solid" : "outline";

          return (
            <Button
              key={v4()}
              onClick={() => setPage(id)}
              {...btnStyles()[variant]}
            >
              {title}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};
