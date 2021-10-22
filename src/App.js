import React, { Component } from "react"
import { HashRouter } from "react-router-dom"
import MainNavbar from './components/commons/MainNavbar';
import MainRoutes from './config/MainRoutes';
import GlobalStyle from "./globalStyles";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        <MainNavbar />
        <MainRoutes />
      </HashRouter>
    )
  }
}
export default App;
