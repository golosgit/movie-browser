import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import { router } from "./core/routes";
import { theme } from "./core/theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
