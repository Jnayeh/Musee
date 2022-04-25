import React from "react";

const MonnaieHistoriqueContext = React.createContext();

export function MonnaieHistoriqueProvider({ children }) {
  const [historiqueMonnaies /* setHistoriqueMonnaies */] = React.useState([
    {
      _id: 1,
      date: "400 av .. 146 ap",
      title: "Punique",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      _id: 2,
      date: "218 av .. 60-460 av",
      title: "Numide",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      _id: 3,
      date: "149-146 av .. 476 ap",
      title: "Romaine",
      details:
        "Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      _id: 4,
      date: "435 ap .. 533 ap",
      title: "Vandale",
      details:
        "Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      _id: 5,
      date: "491 ap .. 641 ap",
      title: "Byzantine",
      details:
        "Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
      _id: 6,
      date: "670 ap/50H .. 1207 ap/603H",
      title: "Arabo-musliman",
      details:
        "Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
  ]);

  const addMonnaie = () => {};
  const updateMonnaie = () => {};
  const removeMonnaie = () => {};
  const getMonnaies = () => {
    return historiqueMonnaies;
  };
  const getMonnaie = (id) => {};
  return (
    <MonnaieHistoriqueContext.Provider
      value={{
        historiqueMonnaies,
        addMonnaie,
        updateMonnaie,
        removeMonnaie,
        getMonnaies,
        getMonnaie,
      }}
    >
      {children}
    </MonnaieHistoriqueContext.Provider>
  );
}
export default MonnaieHistoriqueContext;
