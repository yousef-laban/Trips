//component
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetails from "./components/TripDetails";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

// import { useState } from "react";
import trips from "./trips";
import { Route, Switch } from "react-router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/trips/:tripSlug">
          <TripDetails trips={trips} />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>

        <Route path="/trips">
          <TripsList trips={trips} />;
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
