import { Flex } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { v4 } from "uuid";
import { Section } from "@/types";
import { MenuButton } from "../atoms/menuButton";

type props = {
  sections: Array<Section>;
  page: number;
  setPage: (id: number) => void;
  mt: string;
};

export const Menu = ({ sections, page, setPage, ...props }: props) => {
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
        {sections?.map(({ id, title, iconurl, inverticonurl }) => {
          const variant = id === page ? "solid" : "outline";
          const imageUrl = id === page ? inverticonurl : iconurl;

          return (
            <MenuButton
              key={v4()}
              onClick={() => setPage(id)}
              imageUrl={imageUrl}
              variant={variant}
            >
              {title}
            </MenuButton>
          );
        })}
      </Flex>
    </Flex>
  );
};
