import { wait } from "@/services";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  bigImageUrl: string;
};

export const BigImage = ({ bigImageUrl }: Props) => {
  const [anim, setAnim] = useState<string>("initial");
  const [newBigImageUrl, setNewBigImageUrl] = useState<string>(bigImageUrl);

  const animate = async () => {
    if (anim === "initial") {
      await wait(1);
      setAnim("entry");
      return;
    }

    setAnim("exit");
    await wait(0.5);
    setNewBigImageUrl(bigImageUrl);
    setAnim("entry");
  };

  useEffect(() => {
    animate();
  }, [bigImageUrl]);

  const variants = {
    initial: { translateY: "0px" },
    entry: { translateY: "0px" },
    exit: { translateY: "1024px" },
  };

  return (
    <motion.img
      initial={{ translateY: "1024px" }}
      animate={anim}
      variants={variants}
      transition={{ duration: 1 }}
      src={newBigImageUrl}
      alt=""
      style={{ position: "fixed", left: "747px", top: "50px", width: "1024px" }}
    />
  );
};
