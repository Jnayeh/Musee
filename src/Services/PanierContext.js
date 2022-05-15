import React, { useEffect } from "react";

const PanierContext = React.createContext();

export function PanierProvider({ children }) {
  const [panier, setPanier] = React.useState({
    billets: [
      {
        _id: 1,
        libele: "libele",
        front_image: "./assets/billete.jpg",
        prix: 238,
        quantite: 3,
        stock: 15,
        description: " Piece msadda men 9bal 3issa",
      },
      {
        _id: 2,
        libele: "libele",
        front_image: "./assets/musée.jpg",
        prix: 200,
        quantite: 4,
        stock: 15,
        description: " Piece msadda men 9bal 3issa",
      },
      {
        _id: 3,
        libele: "libele",
        front_image: "./assets/hassan.jpg",
        prix: 300,
        quantite: 3,
        stock: 15,
        description: " Piece msadda men 9bal 3issa",
      },
    ],
    pieces: [],
    ouvrages: [],
  });

  const addBilletToPanier = (item) => {
    setPanier((prevState) => ({
      billets: [item, ...prevState.billets],
    }));
  };

  const addToPanier = (item) => {
    let exist = panier.pieces.filter((piece) => piece._id === item._id);
    if (exist.length > 0) {
      item.quantite += exist[0].quantite;
      setPanier({
        ...panier,
        pieces: panier.pieces.map((piece) =>
          piece._id === item._id ? { ...piece, item } : { ...piece }
        ),
      });
    } else {
      setPanier((prevState) => ({
        ...panier,
        pieces: [item, ...prevState.pieces],
      }));
    }
  };
  const addOuvrageToPanier = (item) => {
    setPanier((prevState) => ({
      ouvrages: [item, ...prevState.ouvrages],
    }));
  };

  const updateInPanier = (collection, item) => {
    switch (collection) {
      case "billets":
        setPanier({
          ...panier,
          billets: panier.billets.map((piece) =>
            piece._id === item._id ? { ...piece, item } : { ...piece }
          ),
        });
        break;
      case "pieces":
        setPanier({
          ...panier,
          pieces: panier.pieces.map((piece) =>
            piece._id === item._id ? { ...piece, item } : { ...piece }
          ),
        });
        break;
      case "ouvrages":
        setPanier({
          ...panier,
          ouvrages: panier.ouvrages.map((piece) =>
            piece._id === item._id ? { ...piece, item } : { ...piece }
          ),
        });
        break;
      default:
        console.log("No collection");
    }
  };
  useEffect(() => {
    console.log(panier);
  }, [panier]);
  const removeFromPanier = (collection, _id) => {
    switch (collection) {
      case "billets":
        setPanier({
          ...panier,
          billets: panier.billets.filter((item) => item._id !== _id),
        });
        break;
      case "pieces":
        setPanier({
          ...panier,
          pieces: panier.pieces.filter((item) => item._id !== _id),
        });
        break;
      case "ouvrages":
        setPanier({
          ...panier,
          ouvrages: panier.ouvrages.filter((item) => item._id !== _id),
        });
        break;
      default:
        console.log("No collection");
    }
  };

  return (
    <PanierContext.Provider
      value={{
        panier,
        addBilletToPanier,
        addOuvrageToPanier,
        addToPanier,
        updateInPanier,
        removeFromPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
export default PanierContext;
