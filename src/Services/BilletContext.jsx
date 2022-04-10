import React from "react";

const BilletContext = React.createContext();

export function BilletProvider({ children }) {
  const [historiqueBilletes /* setHistoriqueBilletes */] = React.useState([
    {
      id: 1,
      date: "1920...",
      title: "Habib Bourguiba",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      id: 2,
      date: "1956",
      title: "7 Nouvembre",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 3,
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
  const getBillet = (id) => {};
  return (
    <BilletContext.Provider
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
    </BilletContext.Provider>
  );
}
export default BilletContext;
