import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./layouts/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/acessorios" element={<p>acessórios</p>} />
          <Route path="/adote-me" element={<p>adote</p>} />
          <Route path="/cerca-de" element={<p>cerca de</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
