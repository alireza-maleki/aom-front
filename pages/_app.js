import "../styles/globals.css";
import Layout from "../components/header/Layout";

import { RegisterContextProvider } from "../components/contexts/RegisterContext";


function MyApp({ Component, pageProps }) {
  return (


    <Layout>
      <RegisterContextProvider>
        <Component {...pageProps} />
      </RegisterContextProvider>
    </Layout>


  );
}

export default MyApp;