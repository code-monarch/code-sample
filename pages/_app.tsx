import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css"; // Toasts Notification
import { ToastContainer, Slide } from "react-toastify";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@app/store";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <TooltipPrimitive.Provider
        delayDuration={0}
        skipDelayDuration={500}
        disableHoverableContent={false}
      >
        <ToastContainer autoClose={4000} transition={Slide} />
        <Component {...pageProps} />
      </TooltipPrimitive.Provider>
    </Provider>
  );
}

export default MyApp;
