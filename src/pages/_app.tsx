import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Item } from "@/types";
import { SelectedItems } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<Item>>([]);

  useEffect(() => setRender(true), []);

  return render ? (
    <SelectedItems.Provider value={{ selectedItems, setSelectedItems }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SelectedItems.Provider>
  ) : null;
}
