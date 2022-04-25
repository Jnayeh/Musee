import React from "react";
import { BilletHistoriqueProvider } from "Services/BilletHistoriqueContext";
import { MonnaieHistoriqueProvider } from "Services/MonnaieHistoriqueContext";
import Intro from "Components/Introduction/Intro";
import Hassan from "Components/Hassan/Hassan";
import { Slide } from "@mui/material";

const AxeMonaie = React.lazy(() => import("Components/Axes/AxeMonaie"));
const AxeBillete = React.lazy(() => import("Components/Axes/AxeBillete"));
const Collections = React.lazy(() =>
  import("Components/Collections/Collections")
);
function HomePage() {
  return (
    <Slide in direction="up" mountOnEnter unmountOnExit>
      <div id="home" className="padding-top">
        <Intro />
        <Hassan />
        <MonnaieHistoriqueProvider>
          <React.Suspense fallback={<> </>}>
            <AxeMonaie />
          </React.Suspense>
        </MonnaieHistoriqueProvider>
        <BilletHistoriqueProvider>
          <React.Suspense fallback={<> </>}>
            <AxeBillete />
          </React.Suspense>
        </BilletHistoriqueProvider>
        <React.Suspense fallback={<> </>}>
          <Collections />
        </React.Suspense>
      </div>
    </Slide>
  );
}

export default HomePage;
