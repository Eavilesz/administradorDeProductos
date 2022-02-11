import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
