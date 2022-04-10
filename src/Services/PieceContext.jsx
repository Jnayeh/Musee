import React from "react";

const PieceContext = React.createContext();

export function PieceProvider({ children }) {
  const [pieces, setPieces] = React.useState([]);
  const addPiece = () => {};
  const updatePiece = (id) => {};
  const removePiece = (id) => {};
  const getPieces = () => {
    return pieces;
  };
  const getPiece = (id) => {};
  return (
    <PieceContext.Provider
      value={{
        pieces,
        addPiece,
        updatePiece,
        removePiece,
        getPieces,
        getPiece,
      }}
    >
      {children}
    </PieceContext.Provider>
  );
}
export default PieceContext;
