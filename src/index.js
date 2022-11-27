import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav-bar/Nav";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
       <Header/>
       <Nav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/nav" element = {<Nav/>}></Route>
      </Routes>
    </BrowserRouter>
)
