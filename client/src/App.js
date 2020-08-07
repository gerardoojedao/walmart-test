import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from './Routes';
import theme from './theme'
import store from './store'

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <BrowserRouter history={browserHistory}>
                <Routes />
              </BrowserRouter>
          </ThemeProvider>
        </Provider>
    );
  }
}
