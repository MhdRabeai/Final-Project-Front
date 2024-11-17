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

import NotFound from "./Pages/NotFound";
import AdminDash from "./Pages/AdminDash";
import DocDash from "./Pages/DocDash";
import PharDash from "./Pages/PharDash";
import UserDash from "./Pages/UserDash";
import CalendarPage from "./Pages/CalendarPage";
// import createAccountPataint from "./Pages/createAccountPataint"
import TabelPataints from "./Pages/TabelPataints";
import TabelDoctors from "./Pages/TabelDoctors";
import TabelDrugs from "./Pages/TabelDrugs";
import TabelPharmaceutical from "./Pages/TabelPharmaceutical";
import Sessions from "./Pages/Sessions";
import ReviewForm from "./Pages/reviewform";
import ComplaintsForm from "./Pages/complaints";
import DoctorArticleForm from "./Pages/DoctorArticleForm";
// import DocProfile from "./Pages/docProfile";
import PrescriptionForm from "./Pages/PrescriptionForm";
import DocProfile from "./Pages/DocProfil";
import CalendarAdmin from "./Pages/calendarAdmin";
import CreateAccountDoctor from "./Pages/createAccountDoctor";
import CreateAccountPataint from "./Pages/createAccountDoctor";
import Profile from "./Pages/Profile";
import ProfilePage from "./Pages/ProfilePage";

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

          <Route path="dashboard/admin" element={<AdminDash />}>
            <Route index element={<CalendarAdmin />} />
            <Route path="TabelPataints" element={<TabelPataints />} />
            <Route path="TabelDoctors" element={<TabelDoctors />} />
            <Route
              path="CreateAccountDoctor"
              element={<CreateAccountDoctor />}
            />
            <Route
              path="CreateAccountPataint"
              element={<CreateAccountPataint />}
            />
            <Route path="TabelDrugs" element={<TabelDrugs />} />

            <Route
              path="TabelPharmaceutical"
              element={<TabelPharmaceutical />}
            />
          </Route>
          <Route path="dashboard/doct" element={<DocDash />}>
            <Route index element={<CalendarPage />} />
            <Route path="DocProfile" element={<DocProfile />} />
            <Route path="AddArticle" element={<DoctorArticleForm />} />
            <Route path="PrescriptionForm" element={<PrescriptionForm />} />
          </Route>
          <Route path="dashboard/pharmacy" element={<PharDash />} />
          <Route path="dashboard/user" element={<UserDash />}>
            {/* <Route index element={<ProfilePage />} /> */}
            <Route path="Setting" element={<ProfilePage />} />
            <Route index element={<Sessions />} />
            <Route path="session" element={<Sessions />} />
            <Route path="review" element={<ReviewForm />} />
            <Route path="complain" element={<ComplaintsForm />} />
          </Route>

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
