import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const theme = extendTheme({ colors });
  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="container mx-auto font-sans">
          <Header />
          <main>
            <Component {...pageProps} />
            <Footer />
          </main>
        </div>
      </ChakraProvider>
    </>
  );
}
