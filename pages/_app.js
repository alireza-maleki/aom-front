import "../styles/globals.css";
import { wrapper, store } from "../components/redux/store";
import { Provider } from "react-redux";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (


    <Component {...pageProps} />


  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;