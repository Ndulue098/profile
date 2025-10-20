import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import Layout from "./page/Layout";

function App() {
  return (
    <div className="bg-purple-400/20 min-h-screen flex items-center p-6 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
