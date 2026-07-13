import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { useState } from "react";


import { Routes, Route, Link } from "react-router-dom";


function App() {

  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
