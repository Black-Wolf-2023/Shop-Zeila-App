import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../components/home/Home";
import {Contacting} from "../pages/contact/Contacting";
import {Team} from "../pages/team/Team";
import {About} from "../pages/about/About";
import {Details} from "../pages/details/Details";
import {Shop} from "../pages/shop/Shop";

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path="/contact" element = {<Contacting/>}/>
            <Route path="/team" element = {<Team/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/details/:id" element = {<Details/>}/>
            <Route path="/shop" element = {<Shop/>}/>
        </Routes>
    </BrowserRouter>
  )
}
