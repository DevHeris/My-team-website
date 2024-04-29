import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import PageNav from "./PageNav";

function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
