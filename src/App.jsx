import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/0/home/Home";
import About from "./components/0/about/About";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
