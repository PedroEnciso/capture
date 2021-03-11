import React from "react";
// global style
import GlobalStyle from "./components/GlobalStyle";
// pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// components
import Nav from "./components/Nav";
// router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/work" component={OurWork} />
        <Route path="/work/:id" component={MovieDetail} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
