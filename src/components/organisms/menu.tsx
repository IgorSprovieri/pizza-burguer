import { Flex } from "@chakra-ui/react";
import { v4 } from "uuid";
import { Section } from "@/types";
import { MenuButton } from "../atoms/";

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
      h={["110px", "80px"]}
      flexDir="row"
      align="top"
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
        {sections?.map(({ sectionid, title, iconurl, inverticonurl }) => {
          const variant = sectionid === page ? "solid" : "outline";
          const imageUrl = sectionid === page ? inverticonurl : iconurl;

          return (
            <MenuButton
              key={v4()}
              onClick={() => setPage(sectionid)}
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
