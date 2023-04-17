import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Playground from "./screens/Playground";

function App() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Tic Tac Toe</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/*" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
