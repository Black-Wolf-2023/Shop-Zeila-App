import  ReactDOM  from "react-dom/client";
import { Wallper } from "./context/Wallper";
import { App } from "./route/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Wallper>
    <App/>
  </Wallper>
)
