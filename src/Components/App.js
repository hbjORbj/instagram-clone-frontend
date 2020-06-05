import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
`;

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyle />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
