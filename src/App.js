import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Root } from "./Pages/Root";
import AuthRoot from "./Pages/AuthRoot";
import DashRoot from "./Pages/DashRoot";
import "preline/preline";
import { HSStaticMethods } from "preline/preline";
import { lazy, useEffect } from "react";
import Login from "./Pages/Login";
import Profile from "./Pages/profile";
import BlogDetail from "./Pages/BlogDetail";
import AdminDash from "./Pages/AdminDash";
import DocDash from "./Pages/DocDash";
import PharDash from "./Pages/PharDash";
import UserDash from "./Pages/UserDash";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import CalendarPage from "./Pages/calendar";
// import { Calendar } from "antd";
import TabelPataints from "./Pages/TabelPataints";
import TabelDoctors from "./Pages/TabelDoctors";
import TabelDrugs from "./Pages/TabelDrugs";
import TabelPharmaceutical from "./Pages/TabelPharmaceutical";
import CreateAccountDoctor from "./Pages/createAccountDoctor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import TablePatients from "./Pages/TablePatients";
const About = lazy(() => import("./Pages/About"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Contact = lazy(() => import("./Pages/Contact"));
const Team = lazy(() => import("./Pages/Team"));

function App() {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    require("preline/preline");
    HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />

          <Route path="team/:doctorId" element={<div>doctorId</div>} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthRoot />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<DashRoot />}>
          {/* <Route path="admin" element={<AdminDash />} />
        <Route path="doct" element={<DocDash />} />
        <Route path="pharmacy" element={<PharDash />} />
        <Route path="user" element={<UserDash />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="dashboard/admin" element={<AdminDash />} />
        <Route path="dashboard/doct" element={<DocDash />} />
        <Route path="dashboard/pharmacy" element={<PharDash />} />
        <Route path="dashboard/user" element={<UserDash />} />
        <Route path="dashboard/doct/calendarpage" element={<CalendarPage />} />
        <Route
          path="dashboard/admin/TabelPataints"
          element={<TabelPataints />}
        />
        <Route path="dashboard/admin/TabelDoctors" element={<TabelDoctors />} />
        <Route
          path="dashboard/admin/CreateAccountDoctor"
          element={<CreateAccountDoctor />}
        />
        <Route path="dashboard/admin/TabelDrugs" element={<TabelDrugs />} />
        <Route
          path="dashboard/admin/TabelPharmaceutical"
          element={<TabelPharmaceutical />}
        />
        <Route path="dashboard/admin/calendarpage" element={<CalendarPage />} />
        <Route path="dashboard/user/calendarpage" element={<CalendarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
