import React from "react";

const BilletHistoriqueContext = React.createContext();

export function BilletHistoriqueProvider({ children }) {
  const [historiqueBilletes /* setHistoriqueBilletes */] = React.useState([
    {
      _id: 1,
      date: "1920...",
      title: "Habib Bourguiba",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      _id: 2,
      date: "1956",
      title: "7 Nouvembre",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      _id: 3,
      date: "2011",
      title: "14 Janvier",
      details:
        "Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
  ]);
  const addBillet = () => {};
  const updateBillet = () => {};
  const removeBillet = () => {};
  const getBillets = () => {
    return historiqueBilletes;
  };
  const getBillet = (_id) => {};
  return (
    <BilletHistoriqueContext.Provider
      value={{
        historiqueBilletes,
        addBillet,
        updateBillet,
        removeBillet,
        getBillets,
        getBillet,
      }}
    >
      {children}
    </BilletHistoriqueContext.Provider>
  );
}
export default BilletHistoriqueContext;
