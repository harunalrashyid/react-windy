import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles"
import "../../static/fonts/nunito/fonts.css"

import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <>
      <GlobalStyles />
      <Header />
      { children }
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
