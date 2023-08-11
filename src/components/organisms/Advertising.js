import { Flex, Image } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export const Advertising = ({ images, ...props }) => {
  const imgBaseStyle = {
    w: "224px",
    h: "112px",
    border: `1px solid ${colors.orange}`,
    borderRadius: "20px",
    margin: "0px 8px",
  };

  return (
    <Flex w="718px" justifyContent="flex-start" {...props}>
      {images?.map((img) => {
        const { src } = img;

        return <Image src={src} alt="Anúncio" {...imgBaseStyle}></Image>;
      })}
    </Flex>
  );
};
