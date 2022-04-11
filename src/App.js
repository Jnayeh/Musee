import React from "react";
import "./App.css";
import Menu from "Components/Menu/Menu";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "Pages/User/Home/HomePage";
import Footer from "Components/Footer/Footer";
const BoutiquePage = React.lazy(() =>
  import("Pages/User/E_Boutique/BoutiquePage")
);
const NotFoundPage = React.lazy(() => import("Pages/404/NotFoundPage"));

//Checks for path to customize the UI
// start hooks with use or with an uppercase letter
const useHeader = () => {
  // URL detection
  let location = useLocation();
  React.useEffect(() => {
    //let app = document.getElementById("app-container");
    let bar = document.getElementById("header");

    if (location.pathname === "/404") {
      bar.style.display = "none";
    } else {
      bar.style.display = "flex";
    }
  }, [location]);
};
const useFooter = () => {
  // URL detection
  let location = useLocation();
  React.useEffect(() => {
    //let app = document.getElementById("app-container");
    let bar = document.getElementById("footer");

    if (location.pathname === "/404") {
      bar.style.display = "none";
    } else {
      bar.style.display = "flex";
    }
  }, [location]);
};

function App() {
  useHeader();
  useFooter();
  return (
    <>
      {/* Menu will be shown in all the routes */}
      <Menu />

      {/* Website routes */}
      <div className="app-container" id="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/A_propos_nous" element={<>...</>} />
          <Route path="/Collections" element={<>...</>} />
          <Route path="/Monnaies" element={<>...</>} />
          <Route
            path="/E_boutique"
            element={
              <React.Suspense fallback={<>...</>}>
                <BoutiquePage />
              </React.Suspense>
            }
          />

          <Route
            path="/404"
            element={
              <React.Suspense fallback={<>...</>}>
                <NotFoundPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
