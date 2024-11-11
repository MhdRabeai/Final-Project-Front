import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Root } from "./Pages/Root";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import "preline/preline";
import { HSStaticMethods } from "preline/preline";
import { useEffect } from "react";

import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
function App() {
  const location = useLocation();

  useEffect(() => {}, []);

  useEffect(() => {
    // @ts-ignore
    require("preline/preline");
    HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />}>
          <Route path=":blogId" element={<div>blogId</div>} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />}>
          <Route path=":doctorId" element={<div>doctorId</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
