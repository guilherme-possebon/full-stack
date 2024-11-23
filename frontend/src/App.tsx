import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/theme/DefaultTheme";
import { LoginProvider } from "./context/LoginContex";

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <LoginProvider>
            <Router />
          </LoginProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
