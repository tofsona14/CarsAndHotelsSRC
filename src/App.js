import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main.js";
import Cars from "./Cars/Cars.js";
import Filter from "./Components/filter.js";
import HidedComp from "./Components/HidedComp.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Hide" element={<HidedComp />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Contact" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
