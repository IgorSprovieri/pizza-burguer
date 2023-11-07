import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Item } from "@/types";
import { NotifyContext, SelectedItems } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Array<Item>>([]);
  const [notifyText, setNotifyText] = useState<string>("");

  useEffect(() => setRender(true), []);

  return render ? (
    <NotifyContext.Provider value={{ notifyText, setNotifyText }}>
      <SelectedItems.Provider value={{ selectedItems, setSelectedItems }}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SelectedItems.Provider>
    </NotifyContext.Provider>
  ) : null;
}
