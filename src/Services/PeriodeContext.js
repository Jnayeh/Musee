import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PeriodeContext = React.createContext();

export function PeriodeProvider({ children }) {
  const [historiqueBilletes, setHistoriqueBilletes] = React.useState([
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
  const [historiqueMonnaies, setHistoriqueMonnaies] = React.useState([
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
  const [periodes, setPeriodes] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const periodeURL = process.env.REACT_APP_API_URL + "periodes/";

  const addPeriode = (Json) => {
    setLoading(true);
    axios
      .post(periodeURL, Json)
      .then((response) => {
        setLoading(false);

        if (!response.data.error) {
          setPeriodes((prevState) => [...prevState, response.data]);
        }
        //handle success
        console.log(response);
      })
      .catch((err) => {
        setLoading(false);
        //handle error
        console.log("Hey", err);
      });
  };

  const updatePeriode = async (Json, _id) => {
    try {
      const response = await axios({
        method: "put",
        url: periodeURL + _id,
        data: Json,
      });
      //handle success
      if (!response.data.error) {
        getPeriodes();
        navigate("../periodes");
      }
    } catch (err) {
      //handle error
      console.log(err);
    }
  };

  const removePeriode = async (_id) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "delete",
        url: periodeURL + _id,
      });
      setLoading(false);
      //handle success
      if (!response.data.error) {
        setPeriodes(periodes.filter((item) => item._id !== _id));
      }
      console.log(response);
    } catch (err) {
      //handle error
      console.log(err);
    }
  };

  const getPeriode = async (_id) => {
    setLoading(true);
    return axios({
      method: "get",
      url: periodeURL + _id,
    })
      .then((response) => {
        setLoading(false);
        //handle success
        if (!response.data.error) {
          return response.data;
        }
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };

  const getPeriodes = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: periodeURL,
      });
      //handle success
      setLoading(false);
      if (!response.data.error) {
        setPeriodes(response.data);
      }
      console.log(response);
    } catch (err) {
      //handle error
      console.log(err);
    }
  };

  const getBilletesPeriodes = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: periodeURL + "billet",
      });
      //handle success
      setLoading(false);
      if (!response.data.error) {
        setHistoriqueBilletes(response.data);
      }
      console.log(response);
    } catch (err) {
      //handle error
      console.log(err);
    }
  };

  const getMonnaiesPeriodes = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: periodeURL + "piece",
      });
      //handle success
      setLoading(false);
      if (!response.data.error) {
        setHistoriqueMonnaies(response.data);
      }
      console.log(response);
    } catch (err) {
      //handle error
      console.log(err);
    }
  };

  return (
    <PeriodeContext.Provider
      value={{
        historiqueBilletes,
        historiqueMonnaies,
        isLoading,
        periodes,
        addPeriode,
        updatePeriode,
        removePeriode,
        getPeriodes,
        getPeriode,
        getBilletesPeriodes,
        getMonnaiesPeriodes,
      }}
    >
      {children}
    </PeriodeContext.Provider>
  );
}
export default PeriodeContext;
