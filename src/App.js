import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdoptaMe from "./pages/adoptaMe/AdoptaMe";
import Accesorios from "./pages/accesorios/Accesorios.";
import NavBar from "./layouts/NavBar/NavBar";
import AcercaDe from "./AcercaDe/AcercaDe";
import PetConfirmation from "./pages/PetConfimation/PetConfirmation";
import SeusPedidos from "./pages/SeusPedidos/SeusPedidos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/adote-me" element={<AdoptaMe></AdoptaMe>} />
          <Route path="/acessorios" element={<Accesorios></Accesorios>} />
          <Route path="/cerca-de" element={<AcercaDe></AcercaDe>} />
          <Route path="/confirmacao" element={<PetConfirmation />} />
          <Route path="/cart" element={<SeusPedidos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
