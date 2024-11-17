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
import Profile from "./Pages/profile";
import NotFound from "./Pages/NotFound";
import AdminDash from "./Pages/AdminDash";
import DocDash from "./Pages/DocDash";
import PharDash from "./Pages/PharDash";
import UserDash from "./Pages/UserDash";
import CalendarPage from "./Pages/CalendarPage";
import CreateAccountDoctor from "./Pages/createAccountDoctor";
import TabelPataints from "./Pages/TabelPataints";
import TabelDoctors from "./Pages/TabelDoctors";
import TabelDrugs from "./Pages/TabelDrugs";
import TabelPharmaceutical from "./Pages/TabelPharmaceutical";

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
            {/* <Route path="admin" element={<AdminDash />} />
            <Route path="doct" element={<DocDash />} />
            <Route path="pharmacy" element={<PharDash />} />
            <Route path="user" element={<UserDash />} />
            <Route path="*" element={<NotFound />} /> */}
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
  );
}

export default App;
