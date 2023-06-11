import React, { Component } from "react";
import Iphone from "./Pages/Iphone/Iphone";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./commonResource/css/bootstrap.css";
import "./Components/FirstThreeSections/fristthree.css";
import "./Components/Headers/header.css";
import "./Components/Footers/footer.css";
import "./commonResource/css/styles.css";
import Footer from "./Components/Footers/Footer";
import Four04 from "./Pages/Four04/Four04";
import Main from "../src/Pages/Main/Main";
import Header from "./Components/Headers/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/iphone" exact element={<Iphone />} />
          <Route path="/" element={<Four04 />} />
        </Routes>
        <Footer />

      </>
    );
  }
}

export default App;
