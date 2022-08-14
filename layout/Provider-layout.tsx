import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import store from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "@/components/Loader/NextNProgress";

export default function Providerlayout({ children }: PropsWithChildren<{}>) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <NextNProgress color="#4e44c4" />
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
