import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import AuthRoot from "./Pages/AuthRoot";
import DashRoot from "./Pages/DashRoot";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "./Components/Loading";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import AdminDash from "./Pages/AdminDash";
import DocDash from "./Pages/DocDash";
import PharDash from "./Pages/PharDash";
import UserDash from "./Pages/UserDash";
import CalendarPage from "./Pages/CalendarPage";
import CreateAccountDoctor from "./Pages/CreateAccountDoctor";
import TabelPataints from "./Pages/TabelPataints";
import TabelDoctors from "./Pages/TabelDoctors";
import TabelDrugs from "./Pages/TabelDrugs";
import TabelPharmaceutical from "./Pages/TabelPharmaceutical";
<<<<<<< HEAD
=======
import CreateAccountDoctor from "./Pages/createAccountDoctor";
import CalendarAdmin from "./Pages/calendarAdmin";
import BlogsAdmin from "./Pages/BlogsAdmin";
// import TablePatients from "./Pages/TablePatients";
const About = lazy(() => import("./Pages/About"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Contact = lazy(() => import("./Pages/Contact"));
const Team = lazy(() => import("./Pages/Team"));
>>>>>>> 9744a899d4a7a8e80328c0e087252fa5d7339cc7

function App() {
  const location = useLocation();

  useEffect(() => {
    import("preline/preline")
      .then((module) => {
        const HSStaticMethods = module.HSStaticMethods;
        if (HSStaticMethods) {
          HSStaticMethods.autoInit();
        }
      })
      .catch((error) => {
        console.error("Error loading preline:", error);
      });
  }, [location.pathname]);

<<<<<<< HEAD
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        rtl={false}
        draggable
        theme="light"
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="team" element={<Team />} />
            <Route path="team/profile/:doctorId" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<AuthRoot />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/dashboard" element={<DashRoot />}>
            <Route path="admin" element={<AdminDash />} />
            <Route path="doct" element={<DocDash />} />
            <Route path="pharmacy" element={<PharDash />} />
            <Route path="user" element={<UserDash />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="dashboard/admin" element={<AdminDash />} />
          <Route path="dashboard/doct" element={<DocDash />} />
          <Route path="dashboard/pharmacy" element={<PharDash />} />
          <Route path="dashboard/user" element={<UserDash />} />
          <Route
            path="dashboard/doct/calendarpage"
            element={<CalendarPage />}
          />
          <Route
            path="dashboard/admin/TabelPataints"
            element={<TabelPataints />}
          />
          <Route
            path="dashboard/admin/TabelDoctors"
            element={<TabelDoctors />}
          />
          <Route
            path="dashboard/admin/CreateAccountDoctor"
            element={<CreateAccountDoctor />}
          />
          <Route path="dashboard/admin/TabelDrugs" element={<TabelDrugs />} />
          <Route
            path="dashboard/admin/TabelPharmaceutical"
            element={<TabelPharmaceutical />}
          />
          <Route
            path="dashboard/admin/calendarpage"
            element={<CalendarPage />}
          />
          <Route
            path="dashboard/user/calendarpage"
            element={<CalendarPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
=======
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
      <Route path="/dashboard/admin" element={<AdminDash />} />
      <Route path="dashboard/doct" element={<DocDash />} />
      <Route path="dashboard/pharmacy" element={<PharDash />} />
      <Route path="dashboard/user" element={<UserDash />} />
      <Route path="dashboard/doct/calendarpage" element={<CalendarPage />} />
      <Route path="dashboard/admin/TabelPataints" element={<TabelPataints />} />
      <Route path="dashboard/admin/TabelDoctors" element={<TabelDoctors />} />
      <Route path="dashboard/admin/CreateAccountDoctor" element={<CreateAccountDoctor />} />
      <Route path="dashboard/admin/TabelDrugs" element={<TabelDrugs />} />
      <Route path="dashboard/admin/BlogsAdmin" element={<BlogsAdmin />} />
      <Route path="dashboard/admin/TabelPharmaceutical" element={<TabelPharmaceutical />} />
      <Route path="dashboard/admin/CalendarAdmin" element={<CalendarAdmin />} />
      <Route path="dashboard/user/calendarpage" element={<CalendarPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
>>>>>>> 9744a899d4a7a8e80328c0e087252fa5d7339cc7
  );
}

export default App;
