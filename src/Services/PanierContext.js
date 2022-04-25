import React from "react";

const PanierContext = React.createContext();

export function PanierProvider({ children }) {
  const [Panier, setPanier] = React.useState([]);
  const addToPanier = (item) => {
    setPanier((prevState) => [...prevState, item]);
  };
  const removeFromPanier = () => {};

  return (
    <PanierContext.Provider
      value={{
        Panier,
        addToPanier,
        removeFromPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
export default PanierContext;
