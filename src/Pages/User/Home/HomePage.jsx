import React from "react";
import { BilletProvider } from "Services/BilletContext";
import { MonnaieProvider } from "Services/MonnaieContext";
import Intro from "Components/Introduction/Intro";
import Hassan from "Components/Hassan/Hassan";

const AxeMonaie = React.lazy(() => import("Components/Axes/AxeMonaie"));
const AxeBillete = React.lazy(() => import("Components/Axes/AxeBillete"));
const Collections = React.lazy(() =>
  import("Components/Collections/Collections")
);
function HomePage() {
  return (
    <div>
      <Intro />
      <Hassan />
      <MonnaieProvider>
        <React.Suspense fallback={<>...</>}>
          <AxeMonaie />
        </React.Suspense>
      </MonnaieProvider>
      <BilletProvider>
        <React.Suspense fallback={<>...</>}>
          <AxeBillete />
        </React.Suspense>
      </BilletProvider>
      <React.Suspense fallback={<>...</>}>
        <Collections />
      </React.Suspense>
    </div>
  );
}

export default HomePage;
