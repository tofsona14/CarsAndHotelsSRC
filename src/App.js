import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main.js";
import Cars from "./Cars/Cars.js";
import Filter from "./Components/filter.js";
import Hotels from "./Hotels/Hotels.js";
import Login from "./Components/Login.js";
import { Navbar } from "./Navbar/Navbar.js";
import Packets from "./Packets/Packets.js";
import Study from "./study/Study.js";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Contact" element={<Filter />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Packets" element={<Packets />} />
          <Route path="/Study" element={<Study />} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //   <div className="div">
    //     i am H1
    //     <button>submit</button>
    //     <div className="secondary--div">button was clicked</div>
    //   </div>
    //   <div>lllllllllllllllllllllllllllllllllllll</div>
    // </>
  );
}

export default App;
