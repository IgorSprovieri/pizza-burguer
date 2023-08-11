import { Image } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Image
      src="/logo.svg"
      alt="Pizza Burguer"
      w={props?.w || "174px"}
      h={props?.h || "51.02px"}
      {...props}
    ></Image>
  );
};
