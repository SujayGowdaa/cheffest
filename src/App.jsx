import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Authentication from "./Pages/Authentication";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./UI/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppContext from "./store/AppContext";
import Order from "./Pages/Order";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/order" element={<Order />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="login" element={<Authentication />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </QueryClientProvider>
  );
}

export default App;
