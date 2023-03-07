import "$styles/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Intania Department Calculator</title>
        <meta
          content="Calculate your required freshmen grades here"
          name="description"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
