import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";
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
        <Route path="/acessórios" element={<p>acessórios</p>} />
        <Route path="/adote-me" element={<p>adote</p>} />
        <Route path="/cerca-de" element={<p>cerca de</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
