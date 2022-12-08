import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import "./style.css"


export default App;


function App() {
  return (
 
    <BrowserRouter>
        <Routes>
        <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/login" exact render={(props) => <Login />} />
      <Route path="/" exact render={(props) => <Main />} />
          <Route path="/books" element={<Books></Books>}/>
          <Route path="/add" element={<Add></Add>}/>
          <Route path="/update/:id" element={<Update></Update>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
