import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/acessórios" element={<p>acessórios</p>} />
        <Route path="/adote-me" element={<p>adote</p>} />
        <Route path="/cerca-de" element={<p>cerca de</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
