import React from "react";

import Intro from "Components/Introduction/Intro";
import Hassan from "Components/Hassan/Hassan";
import { Slide } from "@mui/material";
import { PeriodeProvider } from "Services/PeriodeContext";
import LoadingContained from "Components/Loading/LoadingContained";

const AxeMonaie = React.lazy(() => import("Components/Axes/AxeMonaie"));
const AxeBillete = React.lazy(() => import("Components/Axes/AxeBillete"));
const Collections = React.lazy(() =>
  import("Components/Collections/Collections")
);
function HomePage() {
  return (
    <Slide in direction="up" mountOnEnter unmountOnExit>
      <div id="home" className="padding-top">
        <section id="A_propos_nous">
          <Intro />
          <Hassan />
        </section>
        <PeriodeProvider>
          <section id="Monnaies">
            <React.Suspense fallback={<LoadingContained />}>
              <AxeMonaie />
            </React.Suspense>
            <React.Suspense fallback={<LoadingContained />}>
              <AxeBillete />
            </React.Suspense>
          </section>
        </PeriodeProvider>
        <section id="Collections">
          <React.Suspense fallback={<LoadingContained />}>
            <Collections />
          </React.Suspense>
        </section>
        <section id="Contact"></section>
      </div>
    </Slide>
  );
}

export default HomePage;
