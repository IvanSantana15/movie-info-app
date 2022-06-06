import { ThemeProvider } from "styled-components";
import Content from "./components/Content";
import Header from "./components/Header";
import { MovieProvider } from "./contexts/MovieContext";

import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledApp } from "./styles/StyledApp";


const theme = {
  primary: "#a62639",
  secondary: "#56494e",
  therdary: "#db324d"
}
/*
#a62639
#56494e
#db324d
#a29c9b
#511c29


*/



function App() {

  return (
    <MovieProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <Header />
          <Content />
        </StyledApp>
      </ThemeProvider>
    </MovieProvider>
  );
}

export default App;
