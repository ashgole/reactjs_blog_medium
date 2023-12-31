import { Route, Routes, BrowserRouter } from "react-router-dom";

import Contact from "./components/react-router-dom-example/contact/Contact";
import About from "./components/react-router-dom-example/about/About";
import Home from "./components/react-router-dom-example/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
