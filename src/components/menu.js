import { Button, Flex } from "@chakra-ui/react";
import {
  BurguerIcon,
  MilkShakeIcon,
  PizzaIcon,
  FriesIcon,
  DrinksIcon,
} from "../styles/icons";
import { colors } from "../styles/colors";

export const Menu = ({ page, setPage, ...props }) => {
  const { orange, background } = colors;

  const buttons = [
    {
      pageId: 0,
      children: "Pizza",
      icon: PizzaIcon,
    },
    {
      pageId: 1,
      children: "Hambúrguers",
      icon: BurguerIcon,
    },
    {
      pageId: 2,
      children: "Acompanhamentos",
      icon: FriesIcon,
    },
    {
      pageId: 3,
      children: "Milk Shakes",
      icon: MilkShakeIcon,
    },
    {
      pageId: 4,
      children: "Bebidas",
      icon: DrinksIcon,
    },
  ];

  const btnBaseStyle = {
    margin: "0px 8px",
    size: "sm",
    borderRadius: "100px",
    border: `1px solid ${orange}`,
  };

  const btnStyles = (Icon) => {
    return {
      outline: {
        ...btnBaseStyle,
        color: orange,
        bgColor: background,
        leftIcon: <Icon size={16} color={orange}></Icon>,
        _hover: { color: background, bgColor: orange },
      },
      solid: {
        ...btnBaseStyle,
        color: background,
        bgColor: orange,
        leftIcon: <Icon size={16} color={background}></Icon>,
        _hover: { color: orange, bgColor: background },
      },
    };
  };

  return (
    <Flex {...props}>
      {buttons.map((btn) => {
        const { pageId, children, icon } = btn;
        const variant = pageId === page ? "solid" : "outline";

        return (
          <Button
            key={pageId}
            onClick={() => setPage(pageId)}
            {...btnStyles(icon)[variant]}
          >
            {children}
          </Button>
        );
      })}
    </Flex>
  );
};
