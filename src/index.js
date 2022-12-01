import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./pages/about/About";
import { Contacting } from "./pages/contact/Contacting";
import { Team } from "./pages/team/Team";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/contact" element = {<Contacting/>}/>
        <Route path="/team" element = {<Team/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
)
