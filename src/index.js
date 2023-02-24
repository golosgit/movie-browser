import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import { router } from "./core/routes";
import store from "./core/store";
import { theme } from "./core/theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
