import axios from "axios";
import React from "react";

const BilletContext = React.createContext();

export function BilletProvider({ children }) {
  const [billets, setBillets] = React.useState([]);
  const billetURL = process.env.API_URL + "billets";
  const billetPeriodeURL = process.env.API_URL + "periodes";
  const addBillet = (FormData) => {
    axios({
      method: "post",
      url: billetURL,
      data: FormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  const updateBillet = (FormData, _id) => {
    axios({
      method: "put",
      url: billetURL + "/" + _id,
      data: FormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  const removeBillet = (_id) => {
    axios({
      method: "delete",
      url: billetURL + "/" + _id,
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  const getBillets = () => {
    axios({
      method: "get",
      url: billetURL,
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  const getBillet = (_id) => {
    axios({
      method: "get",
      url: billetURL + "/" + _id,
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  const getBilletsParPeriode = (_id) => {
    axios({
      method: "get",
      url: billetPeriodeURL + "/" + _id + "/billets",
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch((err) => {
        //handle error
        console.log(err);
      });
  };
  return (
    <BilletContext.Provider
      value={{
        billets,
        getBilletsParPeriode,
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
