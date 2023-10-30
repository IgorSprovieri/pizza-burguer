import { Image } from "@chakra-ui/react";

type props = {
  w?: string;
  h?: string;
  mt?: string;
};

export const Logo = ({ w, h, ...props }: props) => {
  return (
    <Image
      src="/logo.svg"
      alt="Pizza Burguer"
      w={w || "174px"}
      h={h || "51.02px"}
      {...props}
    />
  );
};
