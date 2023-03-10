import { AppProvider } from "$core/context/appProvider";
import "$styles/global.scss";
import { theme } from "$theme/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Intania Department Calculator</title>
        <meta
          content="Calculates freshmen grades for desired department"
          name="description"
        />
      </Head>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
