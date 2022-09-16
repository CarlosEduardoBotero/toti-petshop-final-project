import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";
import Accesorios from "./pages/accesorios/Accesorios.";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <p>
              home <FaDog className="icon" />
            </p>
          }
        />
        <Route path="/Accesorios" element={<Accesorios></Accesorios>} />
        <Route path="/adote-me" element={<p>adote</p>} />
        <Route path="/cerca-de" element={<p>cerca de</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
