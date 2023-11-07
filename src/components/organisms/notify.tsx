import { Flex } from "@chakra-ui/react";
import { NotifyCard } from "..";
import { useContext, useEffect, useState } from "react";
import { NotifyContext } from "@/contexts";
import { motion } from "framer-motion";

export const Notify = () => {
  const { notifyText, setNotifyText } = useContext(NotifyContext);
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (notifyText !== "") {
      setOpen(true);
    }
  }, [notifyText]);

  useEffect(() => {
    if (isOpen === true) {
      setTimeout(() => {
        setOpen(false);
        setNotifyText("");
      }, 2000);
    }
  }, [isOpen]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  return (
    <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
      <Flex
        position="fixed"
        w={["100%", "50%"]}
        top="16px"
        left={["0%", "25%"]}
      >
        <NotifyCard text={notifyText} />
      </Flex>
    </motion.div>
  );
};
