import { Flex, Image } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export const Advertising = ({ ...props }) => {
  const images = [
    { src: "/blank.svg" },
    { src: "/blank.svg" },
    { src: "/blank.svg" },
  ];

  const imgBaseStyle = {
    w: "224px",
    h: "112px",
    border: `1px solid ${colors.orange}`,
    borderRadius: "20px",
    margin: "0px 8px",
  };

  return (
    <Flex {...props}>
      {images.map((img) => {
        const { src } = img;

        return <Image src={src} alt="Anúncio" {...imgBaseStyle}></Image>;
      })}
    </Flex>
  );
};
