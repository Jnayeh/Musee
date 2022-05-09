import React from "react";
import "./App.css";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowLeft } from "@mui/icons-material";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import smoothscroll from "smoothscroll-polyfill";

import { AuthProvider } from "Services/AuthContext";
import { AdminAuthProvider } from "Services/AdminAuthContext";

import LoadingFull from "Components/Loading/LoadingFull";
import LoadingContained from "Components/Loading/LoadingContained";

import SignInAdmin from "Pages/Admin/SignInAdmin/SignInAdmin";
import SignIn from "Pages/Authentification/SignIn/SignIn";
import SignUp from "Pages/Authentification/SignUp/SignUp";

import UserApp from "Pages/User/UserApp";
import AdminApp from "Pages/Admin/AdminApp";
import HomePage from "Pages/User/Home/HomePage";
import { OuvrageProvider } from "Services/OuvrageContext";
import { PeriodeProvider } from "Services/PeriodeContext";
import NotFoundPage from "Pages/404/NotFoundPage";

/* LAYOUT COMPONENTS */
import DashboardLayout from "Pages/Admin/DashboardLayout/DashboardLayout";
import PeriodePages from "Pages/Admin/periodes/PeriodePages";
import BilletPages from "Pages/Admin/billets/BilletPages";
import PiecePages from "Pages/Admin/pieces/PiecePages";

const Dashboard = React.lazy(() => import("Pages/Admin/Dashboard/Dashboard"));

/* Periodes Lazy Loaded */
const ListPeriodes = React.lazy(() =>
  import("Pages/Admin/periodes/ListPeriodes/ListPeriodes")
);
const PeriodeForm = React.lazy(() =>
  import("Pages/Admin/periodes/PeriodeForm/PeriodeForm")
);

/* Billets Lazy Loaded */
const ListBillets = React.lazy(() =>
  import("Pages/Admin/billets/ListBillets/ListBillets")
);
const BilletForm = React.lazy(() =>
  import("Pages/Admin/billets/BilletForm/BilletForm")
);

/* Pieces Lazy Loaded */
const ListPieces = React.lazy(() =>
  import("Pages/Admin/pieces/ListPieces/ListPieces")
);
const PieceForm = React.lazy(() =>
  import("Pages/Admin/pieces/PieceForm/PieceForm")
);

const BoutiquePage = React.lazy(() =>
  import("Pages/User/E_Boutique/BoutiquePage")
);

function App() {
  smoothscroll.polyfill();
  const navigate = useNavigate();

  const [top, setTop] = React.useState(false);
  const [backButton, setbackButton] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const scrollTop = () => {
    /*
      window.scrollTo(0, 0);
    */
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
      <AuthProvider>
        <AdminAuthProvider>
          <div id="top"></div>
          <Routes>
            <Route path="/" element={<UserApp />}>
              <Route index element={<HomePage />} />
              <Route path="/A_propos_nous" element={<LoadingFull />} />
              <Route path="/Collections" element={<LoadingFull />} />
              <Route path="/Monnaies" element={<LoadingFull />} />
              <Route
                path="/E_boutique"
                element={
                  <React.Suspense fallback={<LoadingFull />}>
                    <BoutiquePage />
                  </React.Suspense>
                }
              />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Route>

            <Route path="admin" element={<AdminApp />}>
              <Route path="sign-in" element={<SignInAdmin />} />
              <Route index element={<Navigate to="dashboard" replace />} />

              <Route path="dashboard" element={<DashboardLayout />}>
                <Route
                  index
                  element={
                    <React.Suspense fallback={<LoadingContained />}>
                      <Dashboard />
                    </React.Suspense>
                  }
                />
                <Route
                  path="utilisateurs"
                  element={
                    <React.Suspense fallback={<LoadingContained />}>
                      <SignInAdmin />
                    </React.Suspense>
                  }
                />
                <Route
                  path="ouvrages"
                  element={
                    <OuvrageProvider>
                      <React.Suspense fallback={<LoadingContained />}>
                        <SignInAdmin />
                      </React.Suspense>
                    </OuvrageProvider>
                  }
                />
                <Route path="periodes" element={<PeriodePages />}>
                  <Route
                    index
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <ListPeriodes />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <PeriodeForm />
                      </React.Suspense>
                    }
                  />
                </Route>
                <Route path="pieces" element={<PiecePages />}>
                  <Route
                    index
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <ListPieces />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <PieceForm />
                      </React.Suspense>
                    }
                  />
                </Route>

                <Route path="billets" element={<BilletPages />}>
                  <Route
                    index
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <ListBillets />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <React.Suspense fallback={<LoadingContained />}>
                        <BilletForm />
                      </React.Suspense>
                    }
                  />
                </Route>
              </Route>
            </Route>

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AdminAuthProvider>
      </AuthProvider>

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
            <HashLink smooth to="#top">
              <Fab size="medium" color="primary" onClick={scrollTop}>
                <UpIcon />
              </Fab>
            </HashLink>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default App;
