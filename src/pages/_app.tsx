import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return render ? (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  ) : null;
}
