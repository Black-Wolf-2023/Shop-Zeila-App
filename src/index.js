import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Contact } from "./pages/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
)
