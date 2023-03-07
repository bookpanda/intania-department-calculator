import type { AppProps } from "next/app";
import Head from "next/head";
import "$styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>App Name</title>
        <meta content="App description" name="description" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
