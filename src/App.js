import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Root } from "./Pages/Root";
import AuthRoot from "./Pages/AuthRoot";
import DashRoot from "./Pages/DashRoot";
import "preline/preline";
import { HSStaticMethods } from "preline/preline";
import { lazy, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = lazy(() => import("./Pages/Profile"));
const About = lazy(() => import("./Pages/About"));
const Login = lazy(() => import("./Pages/Login"));

const BlogDetail = lazy(() => import("./Pages/BlogDetail"));
const AdminDash = lazy(() => import("./Pages/AdminDash"));
const DocDash = lazy(() => import("./Pages/DocDash"));
const PharDash = lazy(() => import("./Pages/PharDash"));
const UserDash = lazy(() => import("./Pages/UserDash"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Register = lazy(() => import("./Pages/Register"));
const Home = lazy(() => import("./Pages/Home"));
const CalendarPage = lazy(() => import("./Pages/CalendarPage"));
const TabelPataints = lazy(() => import("./Pages/TabelPataints"));
const TabelDoctors = lazy(() => import("./Pages/TabelDoctors"));
const TabelDrugs = lazy(() => import("./Pages/TabelDrugs"));
const TabelPharmaceutical = lazy(() => import("./Pages/TabelPharmaceutical"));
const CreateAccountDoctor = lazy(() => import("./Pages/CreateAccountDoctor"));
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
        pauseOnFocusLoss={false}
        pauseOnHover={false}
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
