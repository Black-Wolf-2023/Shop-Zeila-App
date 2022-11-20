import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/home/Home";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
)
