import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdoptaMe from "./pages/adoptaMe/AdoptaMe";

import Accesorios from "./pages/accesorios/Accesorios.";
import NavBar from "./layouts/NavBar/NavBar";
import AcercaDe from "./AcercaDe/AcercaDe.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/adote-me" element={<AdoptaMe></AdoptaMe>} />
          <Route path="/acessorios" element={<Accesorios></Accesorios>} />
          <Route path="/cerca-de" element={<AcercaDe></AcercaDe>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
