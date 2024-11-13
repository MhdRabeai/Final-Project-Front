import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Root } from "./Pages/Root";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import "preline/preline";
import { HSStaticMethods } from "preline/preline";
import { lazy, useEffect } from "react";
import AuthRoot from "./Pages/AuthRoot";

const About = lazy(() => import("./Pages/About"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Contact = lazy(() => import("./Pages/Contact"));
const Team = lazy(() => import("./Pages/Team"));

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
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />}>
          <Route path=":id" element={<div>blogId</div>} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />}>
          <Route path=":doctorId" element={<div>doctorId</div>} />
        </Route>
      </Route>
      <Route element={<AuthRoot />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
