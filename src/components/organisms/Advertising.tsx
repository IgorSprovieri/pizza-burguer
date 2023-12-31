import { Flex, Image } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { v4 } from "uuid";
import { Advertising as AdvertisingType } from "@/types";

type props = {
  images: Array<AdvertisingType>;
  mt: string | Array<string>;
};

export const Advertising = ({ images, ...props }: props) => {
  const imgBaseStyle = {
    w: "224px",
    h: "112px",
    border: `1px solid ${colors.orange}`,
    borderRadius: "20px",
    margin: "0px 8px",
    scrollSnapAlign: "start",
  };

  return (
    <Flex
      w="clamp(0px, 100dvw, 716px)"
      h={["232px", "218px"]}
      justifyContent="flex-start"
      overflowX="scroll"
      scrollSnapType="x mandatory"
      scrollPadding="16px"
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
      {images?.map(({ src }) => {
        return <Image key={v4()} src={src} alt="Anúncio" {...imgBaseStyle} />;
      })}
    </Flex>
  );
};
