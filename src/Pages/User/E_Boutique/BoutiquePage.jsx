import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CustomCard from "Components/Card/CustomCard";

import "./Boutique.css";
function BoutiquePage() {
  const products = [
    {
      id: 8,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 1,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 2,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 3,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 4,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 5,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 6,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
    {
      id: 7,
      name: "name",
      dateCreated: new Date().toLocaleString(),
      image: "./assets/piece.jpg",
      shortDescription: " Piece msadda",
      longDescription: " Piece msadda men 9bal 3issa",
    },
  ];
  const [prodNumber, setProdNumber] = React.useState(3);
  const responsiveResize = () => {
    if (window.innerWidth >= 800) {
      setProdNumber(3);
    } else {
      setProdNumber(2);
    }
  };
  //Re-render once the component loads
  React.useEffect(() => {
    responsiveResize();
  }, []);

  //Re-render every time resize happens
  React.useEffect(() => {
    window.addEventListener("resize", responsiveResize);
  });
  return (
    <div id="boutique">
      <h1>E-Boutique</h1>
      <div className="prod-slide">
        <Splide
          options={{
            perPage: prodNumber,
            pagination: false,
            drag: "free",
            gap: "25px",
          }}
          className="hover-effect4"
        >
          {products.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <CustomCard item={product} classes="CustomCard" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default BoutiquePage;
