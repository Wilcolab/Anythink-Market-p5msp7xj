import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";
import { theme } from "./styles/theme.js"

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";


ReactDOM.render(
  
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
      </GlobalStyle>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
