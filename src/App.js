import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import AdoptaMe from "./pages/adoptaMe/AdoptaMe";

import Accesorios from "./pages/accesorios/Accesorios.";
import NavBar from "./layouts/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route
            path="/"
            element={
              <h1 style={{ height: "200vh" }}>
                home <FaDog className="icon" />
              </h1>
            }
          />
          <Route path="/adote-me" element={<AdoptaMe></AdoptaMe>} />
          <Route path="/acessorios" element={<Accesorios></Accesorios>} />
          <Route path="/cerca-de" element={<p>cerca de</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
