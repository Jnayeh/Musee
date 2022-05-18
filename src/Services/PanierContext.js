import React, { useEffect } from "react";

const PanierContext = React.createContext();

export function PanierProvider({ children }) {
  const [panier, setPanier] = React.useState({
    billets: [],
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
