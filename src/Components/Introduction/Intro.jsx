import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import "./Intro.css";

function Intro() {
  return (
    <div id="intro" className="intro">
      <div className="intro-title">
        <h2> La Musée de Monnaie </h2>
        <p> La Musée de Monnaie.</p>
        <p>La Musée de Monnaie La Musée de Monnaie.</p>
        <p>Every single day !</p>
      </div>

      <Splide
        options={{
          rewind: true,
          autoplay: true,
          pagination: false,
          interval: 5000,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className="intro-img img1"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="intro-img img2"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="intro-img img3"></div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Intro;
