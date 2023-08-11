import { Button, Flex } from "@chakra-ui/react";
import { colors } from "../../styles/colors";

export const Menu = ({ sections, page, setPage, ...props }) => {
  const { orange, background } = colors;

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
      {sections?.map((btn) => {
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