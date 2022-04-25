import React from "react";
import "./App.css";
import { Fab, Zoom } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowLeft } from "@mui/icons-material";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { AuthProvider } from "Services/AuthContext";
import { AdminAuthProvider } from "Services/AdminAuthContext";

import SignInAdmin from "Pages/Admin/SignInAdmin/SignInAdmin";
import SignIn from "Pages/Authentification/SignIn/SignIn";
import SignUp from "Pages/Authentification/SignUp/SignUp";

import UserApp from "Pages/User/UserApp";
import AdminApp from "Pages/Admin/AdminApp";
import HomePage from "Pages/User/Home/HomePage";

import { Loading } from "Components/Loading/Loading";
import Dashboard from "Pages/Admin/Dashboard/Dashboard";
const DashboardLayout = React.lazy(() =>
  import("Pages/Admin/DashboardLayout/DashboardLayout")
);
const BoutiquePage = React.lazy(() =>
  import("Pages/User/E_Boutique/BoutiquePage")
);
const NotFoundPage = React.lazy(() => import("Pages/404/NotFoundPage"));

function LoadingFull() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Loading />
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const [top, setTop] = React.useState(false);
  const [backButton, setbackButton] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const scrollTop = () => {
    window.scrollTo(0, 0);
    setTop(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
    return function cleanup() {
      window.removeEventListener("scroll", () => {});
    };
  });
  //Checks for path to customize the UI
  // URL detection
  let location = useLocation();
  React.useEffect(() => {
    //Scrolls to top of page each time route changes
    scrollTop();
    if (location.pathname === "/" || location.pathname.includes("admin")) {
      setbackButton(false);
    } else {
      setbackButton(true);
    }
    if (location.pathname.includes("admin")) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <UserApp />
            </AuthProvider>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/A_propos_nous" element={<Loading />} />
          <Route path="/Collections" element={<Loading />} />
          <Route path="/Monnaies" element={<Loading />} />
          <Route
            path="/E_boutique"
            element={
              <React.Suspense fallback={<Loading />}>
                <BoutiquePage />
              </React.Suspense>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        <Route
          path="admin"
          element={
            <AdminAuthProvider>
              <AdminApp />
            </AdminAuthProvider>
          }
        >
          <Route path="sign-in" element={<SignInAdmin />} />
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route
            path="dashboard"
            element={
              <React.Suspense fallback={<Loading />}>
                <DashboardLayout />
              </React.Suspense>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="ouvrages" element={<SignInAdmin />} />
            <Route path="pieces" element={<SignInAdmin />} />
            <Route path="utilisateurs" element={<SignInAdmin />} />
            <Route path="billets" element={<SignInAdmin />} />
            <Route path="periodes" element={<SignInAdmin />} />
          </Route>
        </Route>

        <Route
          path="/404"
          element={
            <React.Suspense fallback={<LoadingFull />}>
              <NotFoundPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {visible && (
        <div className="navigations">
          {backButton && (
            <Fab
              variant="extended"
              onClick={() => {
                navigate(-1);
              }}
            >
              <KeyboardArrowLeft /> Retour
            </Fab>
          )}
          <div></div>
          <Zoom in={top} unmountOnExit>
            <Fab size="medium" color="primary" onClick={scrollTop}>
              <UpIcon />
            </Fab>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default App;
