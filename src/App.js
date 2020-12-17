import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//Screens
import HomeScreen from "./Screens/HomeScreen";
import ProjectScreen from "./Screens/ProjectScreen";

//components
// import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/projects" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
