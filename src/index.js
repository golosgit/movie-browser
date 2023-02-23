import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./core/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import App from "./core/App";
import store from "./core/store";
import { theme } from "./core/theme";
import { router } from "./core/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();