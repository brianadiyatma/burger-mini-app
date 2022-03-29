import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import BurgerMaker from "./Pages/BurgerMaker";
function App() {
  return (
    <>
      <h1>INI DEFAULT LAYOUT</h1>
      <Link to="/">Home</Link>
      <Link to="/burger-maker">Burger Maker</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker />} />
      </Routes>
    </>
  );
}

export default App;
